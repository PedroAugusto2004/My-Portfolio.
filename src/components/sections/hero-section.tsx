import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/config/resume-data';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import AnimatedScrollWrapper from '@/components/ui/animated-scroll-wrapper';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-background via-slate-50 to-background py-12 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-screen-lg px-4 text-center">
        <AnimatedScrollWrapper>
          <h1 className="text-5xl font-extrabold tracking-tight text-deepIndigo sm:text-6xl md:text-7xl lg:text-8xl">
            {resumeData.name}
          </h1>
        </AnimatedScrollWrapper>
        <AnimatedScrollWrapper delay="delay-100">
          <p className="mt-4 text-xl font-medium text-foreground/80 sm:text-2xl md:text-3xl">
            {resumeData.title}
          </p>
        </AnimatedScrollWrapper>
        <AnimatedScrollWrapper delay="delay-200">
          <p className="mt-6 max-w-2xl mx-auto text-base text-muted-foreground sm:text-lg md:text-xl">
            {resumeData.summary.substring(0, 150)}... {/* Shortened summary for hero */}
          </p>
        </AnimatedScrollWrapper>
        
        <AnimatedScrollWrapper delay="delay-300" className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow">
            <Link href="#contact">
              <Mail className="mr-2 h-5 w-5" /> Get in Touch
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow">
            <Link href="#experience">
              <FileText className="mr-2 h-5 w-5" /> View My Work
            </Link>
          </Button>
        </AnimatedScrollWrapper>

        <AnimatedScrollWrapper delay="delay-400" className="mt-12 flex justify-center space-x-6">
          {resumeData.contact.github && (
            <Link href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-7 w-7" />
            </Link>
          )}
          {resumeData.contact.linkedin && (
            <Link href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-7 w-7" />
            </Link>
          )}
          {resumeData.contact.email && (
            <Link href={`mailto:${resumeData.contact.email}`} aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-7 w-7" />
            </Link>
          )}
        </AnimatedScrollWrapper>
      </div>
    </section>
  );
}
