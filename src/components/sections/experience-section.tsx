
import { resumeData, type ExperienceEntry } from '@/config/resume-data';
import SectionTitle from '@/components/ui/section-title-component';
import AnimatedScrollWrapper from '@/components/ui/animated-scroll-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CalendarDays, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-transparent">
      <div className="container mx-auto max-w-screen-xl px-4">
        <AnimatedScrollWrapper>
          <SectionTitle>Experience & Projects</SectionTitle>
        </AnimatedScrollWrapper>

        <div className="space-y-12">
          {resumeData.experience.map((exp: ExperienceEntry, index: number) => (
            <AnimatedScrollWrapper key={index} delay={`delay-${index * 100}`}>
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-80 md:h-[440px] w-full overflow-hidden"> {/* Increased height */}
                     <Image
                        src="/images/exp.png"
                        alt={`${exp.company} project image`}
                        layout="fill"
                        objectFit="contain" // Ensures the entire image is visible
                        data-ai-hint="project visual"
                      />
                  </div>
                  <div className="p-6 md:p-8">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center gap-3 mb-1">
                        <Briefcase className="h-7 w-7 text-primary" />
                        <CardTitle className="text-2xl text-primary">{exp.role}</CardTitle>
                      </div>
                      <CardDescription className="text-lg text-muted-foreground font-medium">
                        {exp.company}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="mb-4 text-foreground/80">{exp.description}</p>
                      <h4 className="font-semibold text-md text-primary mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                            <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-md text-primary mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </div>
              </Card>
            </AnimatedScrollWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
