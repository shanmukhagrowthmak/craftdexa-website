import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { ServiceSection } from "@/components/ServiceSection";
import { HowWeWork } from "@/components/HowWeWork";
import { Marquee } from "@/components/Marquee";
import { GetStarted } from "@/components/GetStarted";
import { Footer } from "@/components/Footer";
import { SERVICES } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        {SERVICES.map((service) => (
          <ServiceSection key={service.id} service={service} />
        ))}
        <HowWeWork />
        <Marquee />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
