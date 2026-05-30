import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { DemoSection } from '@/components/sections/DemoSection';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <BenefitsSection />
      <TechStackSection />
      <TimelineSection />
      <DemoSection />
    </div>
  );
}
