"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Landmark } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Bank {
  id: string;
  name: string;
}

const banks: Bank[] = [
  { id: "b1", name: "Banco do Brasil" },
  { id: "b2", name: "Caixa" },
  { id: "b3", name: "Itaú" },
  { id: "b4", name: "Bradesco" },
  { id: "b5", name: "Santander" },
  { id: "b6", name: "Nubank" },
  { id: "b7", name: "Inter" },
  { id: "b8", name: "BTG Pactual" },
  { id: "b9", name: "Sicoob" },
  { id: "b10", name: "Sicredi" },
  { id: "b11", name: "Safra" },
  { id: "b12", name: "C6 Bank" },
];

const BanksMarquee = ({
  heading = "Trabalhamos com as principais instituições financeiras",
}: {
  heading?: string;
}) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-x flex flex-col items-center text-center">
        <h2 className="text-balance text-xl font-semibold tracking-tight text-foreground/80 md:text-2xl">
          {heading}
        </h2>

        <div className="relative mt-10 w-full">
          <Carousel
            opts={{ loop: true, align: "start", dragFree: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.8, stopOnInteraction: false })]}
          >
            <CarouselContent className="ml-0">
              {banks.map((bank) => (
                <CarouselItem
                  key={bank.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="mx-3 flex h-20 w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 backdrop-blur-sm transition hover:border-[hsl(var(--gold))/0.4] hover:bg-white/[0.06]">
                    <Landmark className="h-5 w-5 text-[hsl(var(--gold))]" />
                    <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-foreground/90 md:text-base">
                      {bank.name}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent md:w-32" />
        </div>
      </div>
    </section>
  );
};

export { BanksMarquee };