import { useEffect } from "react";

type SeoOptions = {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
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

export const useSeo = ({ title, description, canonical, ogImage }: SeoOptions) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
    }
    if (title) {
      setMeta('meta[property="og:title"]', "content", title);
    }
    if (canonical) {
      setMeta('link[rel="canonical"]', "href", canonical);
    }
    if (ogImage) {
      setMeta('meta[property="og:image"]', "content", ogImage);
    }
  }, [title, description, canonical, ogImage]);
};
