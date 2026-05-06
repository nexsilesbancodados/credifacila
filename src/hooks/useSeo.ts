import { useEffect } from "react";

type SeoOptions = {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
};

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!el) {
    if (selector.startsWith("link")) {
      el = document.createElement("link");
      const rel = selector.match(/rel="([^"]+)"/)?.[1];
      if (rel) (el as HTMLLinkElement).rel = rel;
    } else {
      el = document.createElement("meta");
      const name = selector.match(/name="([^"]+)"/)?.[1];
      const property = selector.match(/property="([^"]+)"/)?.[1];
      if (name) (el as HTMLMetaElement).name = name;
      if (property) (el as HTMLMetaElement).setAttribute("property", property);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

export const useSeo = ({ title, description, canonical, ogImage, keywords, type, jsonLd, noindex }: SeoOptions) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }
    if (title) {
      setMeta('meta[property="og:title"]', "content", title);
      setMeta('meta[name="twitter:title"]', "content", title);
    }
    const canonicalUrl =
      canonical ||
      (typeof window !== "undefined"
        ? `${window.location.origin}${window.location.pathname}`
        : "");
    if (canonicalUrl) {
      setMeta('link[rel="canonical"]', "href", canonicalUrl);
      setMeta('meta[property="og:url"]', "content", canonicalUrl);
    }
    if (ogImage) {
      setMeta('meta[property="og:image"]', "content", ogImage);
      setMeta('meta[name="twitter:image"]', "content", ogImage);
    }
    if (keywords) {
      setMeta('meta[name="keywords"]', "content", keywords);
    }
    if (type) {
      setMeta('meta[property="og:type"]', "content", type);
    }
    setMeta('meta[name="robots"]', "content", noindex ? "noindex,nofollow" : "index,follow");

    // JSON-LD per page (replace any prior page-level script we injected)
    const PREV_ID = "page-jsonld";
    document.head.querySelector(`script#${PREV_ID}`)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = PREV_ID;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, ogImage, keywords, type, jsonLd, noindex]);
};
