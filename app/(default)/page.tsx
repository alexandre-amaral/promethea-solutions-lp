export const metadata = {
  title: "Promethea Solutions",
  description: "Automação Empresarial, Inteligência de Negócios e Desenvolvimento de Software",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <AboutSection />
      <FeaturesPlanet />
      <Cta />
    </>
  );
}
