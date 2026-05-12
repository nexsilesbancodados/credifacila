import { site } from "@/config/site";

const CONSENT_KEY = "credifacil:cookie-consent:v1";
const ANALYTICS_LOADED_KEY = "__credifacil_analytics_loaded";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    [ANALYTICS_LOADED_KEY]?: boolean;
  }
}

const loadScript = (src: string, attrs: Record<string, string> = {}) =>
  new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Falha ao carregar ${src}`));
    document.head.appendChild(s);
  });

const loadGA4 = async (id: string) => {
  if (!id) return;
  await loadScript(`https://www.googletagmanager.com/gtag/js?id=${id}`);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args as unknown as Record<string, unknown>);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
};

const loadMetaPixel = (id: string) => {
  if (!id) return;
  // Snippet oficial reduzido — gera fbq()
  const init = (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) => {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  };
  init(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  window.fbq?.("init", id);
  window.fbq?.("track", "PageView");
};

/** Inicializa providers se houver consentimento e IDs configurados. Idempotente. */
export const initAnalytics = async () => {
  if (typeof window === "undefined") return;
  if (window[ANALYTICS_LOADED_KEY]) return;

  let accepted = false;
  try {
    accepted = !!localStorage.getItem(CONSENT_KEY);
  } catch {
    return;
  }
  if (!accepted) return;

  window[ANALYTICS_LOADED_KEY] = true;

  const tasks: Promise<unknown>[] = [];
  if (site.tracking.ga4MeasurementId) tasks.push(loadGA4(site.tracking.ga4MeasurementId));
  if (site.tracking.metaPixelId) {
    try {
      loadMetaPixel(site.tracking.metaPixelId);
    } catch {
      // ignore
    }
  }
  await Promise.allSettled(tasks);
};

/** Dispara um evento custom (GA4 + Meta) — só funciona se já carregado. */
export const trackEvent = (
  name: string,
  params?: Record<string, unknown>
) => {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", name, params ?? {});
    window.fbq?.("trackCustom", name, params ?? {});
  } catch {
    // silencia
  }
};
