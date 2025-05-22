import { resumeData } from '@/config/resume-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { GraduationCap, Award, Zap, Building, CalendarDays, CheckCircle } from 'lucide-react';
import SectionTitle from '@/components/ui/section-title-component';
import AnimatedScrollWrapper from '@/components/ui/animated-scroll-wrapper';

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-50">
      <div className="container mx-auto max-w-screen-lg px-4">
        <AnimatedScrollWrapper>
          <SectionTitle>About Me</SectionTitle>
        </AnimatedScrollWrapper>
        
        <AnimatedScrollWrapper delay="delay-100">
          <p className="mb-12 text-center text-lg text-muted-foreground md:text-xl">
            {resumeData.summary}
          </p>
        </AnimatedScrollWrapper>

        <div className="grid md:grid-cols-1 gap-8">
          <AnimatedScrollWrapper as="div" className="w-full" delay="delay-200">
             <Accordion type="single" collapsible className="w-full rounded-lg border bg-card p-2 shadow-sm">
              {resumeData.education.length > 0 && (
                <AccordionItem value="education">
                  <AccordionTrigger className="px-4 text-lg font-semibold hover:no-underline data-[state=open]:text-primary">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-6 w-6 text-primary" /> Education
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    <ul className="space-y-3 text-muted-foreground">
                      {resumeData.education.map((edu, index) => (
                        <li key={index} className="pl-2">
                          <div className="font-medium text-foreground">{edu.degree}</div>
                          <div>{edu.institution}</div>
                          <div className="text-sm">{edu.period}</div>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}

              {resumeData.certifications.length > 0 && (
                <AccordionItem value="certifications">
                  <AccordionTrigger className="px-4 text-lg font-semibold hover:no-underline data-[state=open]:text-primary">
                     <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-primary" /> Certifications
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    <ul className="space-y-2 text-muted-foreground">
                      {resumeData.certifications.map((cert, index) => (
                        <li key={index} className="flex items-start gap-2 pl-2">
                           <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                           <span>
                            <span className="font-medium text-foreground">{cert.name}</span> - {cert.issuer}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}

              {resumeData.achievements.length > 0 && (
                <AccordionItem value="achievements">
                  <AccordionTrigger className="px-4 text-lg font-semibold hover:no-underline data-[state=open]:text-primary">
                    <div className="flex items-center gap-3">
                      <Zap className="h-6 w-6 text-primary" /> Achievements
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    <ul className="space-y-2 text-muted-foreground">
                      {resumeData.achievements.map((ach, index) => (
                        <li key={index} className="flex items-start gap-2 pl-2">
                          <Zap className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                          <span>
                            <span className="font-medium text-foreground">{ach.title}</span>: {ach.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </AnimatedScrollWrapper>
        </div>
      </div>
    </section>
  );
}
