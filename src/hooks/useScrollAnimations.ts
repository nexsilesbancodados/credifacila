import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ANIMATED = new WeakSet<Element>();

const animate = (el: HTMLElement) => {
  if (ANIMATED.has(el)) return;
  ANIMATED.add(el);

  const type = el.dataset.anim || "fade-up";
  const delay = parseFloat(el.dataset.animDelay || "0");
  const duration = parseFloat(el.dataset.animDuration || "0.9");

  let from: gsap.TweenVars = { opacity: 0, y: 40 };
  let to: gsap.TweenVars = { opacity: 1, y: 0 };

  switch (type) {
    case "fade":
      from = { opacity: 0 };
      to = { opacity: 1 };
      break;
    case "fade-down":
      from = { opacity: 0, y: -40 };
      to = { opacity: 1, y: 0 };
      break;
    case "fade-left":
      from = { opacity: 0, x: 60 };
      to = { opacity: 1, x: 0 };
      break;
    case "fade-right":
      from = { opacity: 0, x: -60 };
      to = { opacity: 1, x: 0 };
      break;
    case "scale-in":
      from = { opacity: 0, scale: 0.9 };
      to = { opacity: 1, scale: 1 };
      break;
    case "blur-in":
      from = { opacity: 0, filter: "blur(14px)", y: 20 };
      to = { opacity: 1, filter: "blur(0px)", y: 0 };
      break;
    case "fade-up":
    default:
      break;
  }

  gsap.fromTo(el, from, {
    ...to,
    duration,
    delay,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 88%",
      toggleActions: "play none none none",
    },
  });
};

const animateStagger = (container: HTMLElement) => {
  if (ANIMATED.has(container)) return;
  ANIMATED.add(container);

  const children = Array.from(container.children) as HTMLElement[];
  if (children.length === 0) return;

  gsap.fromTo(
    children,
    { opacity: 0, y: 36 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

const setupParallax = (el: HTMLElement) => {
  if (ANIMATED.has(el)) return;
  ANIMATED.add(el);

  const speed = parseFloat(el.dataset.parallax || "0.3");
  gsap.to(el, {
    yPercent: -speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: el.parentElement || el,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

const scan = (root: ParentNode = document) => {
  root.querySelectorAll<HTMLElement>("[data-anim]").forEach(animate);
  root.querySelectorAll<HTMLElement>("[data-anim-stagger]").forEach(animateStagger);
  root.querySelectorAll<HTMLElement>("[data-parallax]").forEach(setupParallax);
};

export const useScrollAnimations = () => {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Initial scan
    scan();

    // Re-scan when lazy sections mount
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const el = node as HTMLElement;
            if (el.matches?.("[data-anim], [data-anim-stagger], [data-parallax]")) {
              if (el.hasAttribute("data-anim")) animate(el);
              if (el.hasAttribute("data-anim-stagger")) animateStagger(el);
              if (el.hasAttribute("data-parallax")) setupParallax(el);
            }
            scan(el);
          }
        });
      }
      ScrollTrigger.refresh();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Refresh on load
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      observer.disconnect();
      window.removeEventListener("load", onLoad);
    };
  }, []);
};

export default useScrollAnimations;