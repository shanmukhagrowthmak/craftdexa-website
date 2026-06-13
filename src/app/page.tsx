import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Stats />
      <Process />
      <WhyUs />
      <CTASection />
      <Footer />
    </main>
  );
}
