import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/Services';
import TechnologySection from '@/components/TechnologySection';
import ProductShowcase from '@/components/sections/ProductShowcase';
import CallToAction from '@/components/sections/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TechnologySection />
      <ProductShowcase />
      <CallToAction />
    </>
  );
}
