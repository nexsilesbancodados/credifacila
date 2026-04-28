import { Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import Header from "@/components/Header";

const AdvantagesSection = lazy(() => import("@/components/AdvantagesSection"));
const LoansSection = lazy(() => import("@/components/LoansSection"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const ContactFooter = lazy(() => import("@/components/ContactFooter"));

type DeferredSectionProps = {
  children: ReactNode;
  minHeight: string;
};

const DeferredSection = ({ children, minHeight }: DeferredSectionProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={ref} style={{ minHeight }}>
      {shouldLoad ? (
        <Suspense
          fallback={<div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20 lg:px-10" aria-hidden="true" />}
        >
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <DeferredSection minHeight="980px">
        <AdvantagesSection />
      </DeferredSection>
      <DeferredSection minHeight="1120px">
        <LoansSection />
      </DeferredSection>
      <DeferredSection minHeight="640px">
        <HowItWorks />
      </DeferredSection>
      <DeferredSection minHeight="780px">
        <AboutSection />
      </DeferredSection>
      <DeferredSection minHeight="900px">
        <FaqSection />
      </DeferredSection>
      <DeferredSection minHeight="700px">
        <ContactFooter />
      </DeferredSection>
    </div>
  );
};

export default Index;
