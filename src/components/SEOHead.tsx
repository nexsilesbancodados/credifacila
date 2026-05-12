import { useEffect } from "react";

type Props = {
  title: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  canonical?: string;
  jsonLd?: Record<string, unknown>;
};

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [, key, val] = selector.match(/\[(.*?)="(.*?)"\]/) || [];
    if (key && val) el.setAttribute(key, val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const setCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const setJsonLd = (data: Record<string, unknown>) => {
  const id = "page-jsonld";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

const SEOHead = ({ title, description, image, type = "website", canonical, jsonLd }: Props) => {
  useEffect(() => {
    document.title = title;
    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
    }
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[name="twitter:title"]', "content", title);
    if (description) setMeta('meta[name="twitter:description"]', "content", description);
    if (image) {
      setMeta('meta[property="og:image"]', "content", image);
      setMeta('meta[name="twitter:image"]', "content", image);
    }
    const url = canonical || window.location.origin + window.location.pathname;
    setCanonical(url);
    setMeta('meta[property="og:url"]', "content", url);
    if (jsonLd) setJsonLd(jsonLd);
    return () => {
      const el = document.getElementById("page-jsonld");
      if (el) el.remove();
    };
  }, [title, description, image, type, canonical, jsonLd]);
  return null;
};

export default SEOHead;