import { useEffect } from "react";

const VISIBLE_CLASS = "anim-visible";

const useScrollAnimations = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    // Skip parallax on mobile (jank) and when reduced motion is requested
     // Total skip for anything that causes reflow/paint during scroll on mobile
     const skipEffects = reduce || isMobile;
     if (skipEffects) {
      document.querySelectorAll<HTMLElement>("[data-anim], [data-anim-stagger]").forEach((el) => {
        el.classList.add(VISIBLE_CLASS);
      });
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add(VISIBLE_CLASS);
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

     if (!skipEffects) {
       const observe = (root: ParentNode = document) => {
         root.querySelectorAll<HTMLElement>("[data-anim], [data-anim-stagger]").forEach((el) => {
           if (el.classList.contains(VISIBLE_CLASS)) return;
           io.observe(el);
         });
       };
       observe();
     }

    /* ------- Lightweight parallax (rAF + IO, skips offscreen) ------- */
    const parallaxEls = new Set<HTMLElement>();
    const visibleParallax = new Set<HTMLElement>();
    let rafId = 0;

    const updateParallax = () => {
      rafId = 0;
      const vh = window.innerHeight;
      visibleParallax.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const speed = parseFloat(el.dataset.parallax || "0.15");
        // progress: -1 (entering bottom) → 1 (leaving top)
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        const offset = -progress * 100 * speed;
        el.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(updateParallax);
    };

    const pIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) visibleParallax.add(el);
          else visibleParallax.delete(el);
        }
        if (visibleParallax.size > 0) onScroll();
      },
      { rootMargin: "10% 0px 10% 0px" }
    );

     if (!skipEffects) {
       const observeParallax = (root: ParentNode = document) => {
         root.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
           if (parallaxEls.has(el)) return;
           parallaxEls.add(el);
           pIO.observe(el);
         });
       };
       observeParallax();
       
       window.addEventListener("scroll", onScroll, { passive: true });
       window.addEventListener("resize", onScroll, { passive: true });
 
       const observe = (root: ParentNode = document) => {
         root.querySelectorAll<HTMLElement>("[data-anim], [data-anim-stagger]").forEach((el) => {
           if (el.classList.contains(VISIBLE_CLASS)) return;
           io.observe(el);
         });
       };
 
       let pending = false;
       const mo = new MutationObserver((mutations) => {
         if (pending) return;
         let hasNew = false;
         for (const m of mutations) {
           if (m.addedNodes.length > 0) {
             hasNew = true;
             break;
           }
         }
         if (!hasNew) return;
         pending = true;
         requestAnimationFrame(() => {
           observe();
           observeParallax();
           pending = false;
         });
       });
       mo.observe(document.body, { childList: true, subtree: true });
 
       return () => {
         io.disconnect();
         pIO.disconnect();
         mo.disconnect();
         window.removeEventListener("scroll", onScroll);
         window.removeEventListener("resize", onScroll);
         if (rafId) cancelAnimationFrame(rafId);
       };
     }
     
     // If skipping effects, still cleanup basic IO if it exists
     return () => {
       io.disconnect();
     };
  }, []);
};

export default useScrollAnimations;
