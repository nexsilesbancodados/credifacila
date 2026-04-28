import { useEffect } from "react";

const VISIBLE_CLASS = "anim-visible";

const useScrollAnimations = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<HTMLElement>("[data-anim], [data-anim-stagger]").forEach((el) => {
        el.classList.add(VISIBLE_CLASS);
      });
      return;
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

    const observe = (root: ParentNode = document) => {
      root.querySelectorAll<HTMLElement>("[data-anim], [data-anim-stagger]").forEach((el) => {
        if (el.classList.contains(VISIBLE_CLASS)) return;
        io.observe(el);
      });
    };

    observe();

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
        pending = false;
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
};

export default useScrollAnimations;
