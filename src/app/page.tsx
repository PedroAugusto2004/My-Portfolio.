import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import SkillsSection from '@/components/sections/skills-section';
import ExperienceSection from '@/components/sections/experience-section';
import AiOptimizerSection from '@/components/sections/ai-optimizer-section';
import ContactSection from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <AiOptimizerSection />
      <ContactSection />
    </div>
  );
}
