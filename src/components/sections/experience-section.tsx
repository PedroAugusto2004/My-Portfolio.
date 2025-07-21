
import { resumeData, type ExperienceEntry } from '@/config/resume-data';
import SectionTitle from '@/components/ui/section-title-component';
import AnimatedScrollWrapper from '@/components/ui/animated-scroll-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CalendarDays, CheckCircle, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-transparent">
      <div className="container mx-auto max-w-screen-xl px-4">
        <AnimatedScrollWrapper animationClassName="animate-fade-in-up">
          <SectionTitle>Experience & Projects</SectionTitle>
        </AnimatedScrollWrapper>

        <div className="space-y-12">
          {resumeData.experience.map((exp: ExperienceEntry, index: number) => (
            <AnimatedScrollWrapper key={index} delay={`delay-${index * 100}`} animationClassName="animate-fade-in-up">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
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
                    <p className="mb-6 text-foreground/80">{exp.description}</p>
                    
                    <h4 className="font-semibold text-md text-primary mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2.5 mb-6">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/75">
                          <CheckCircle className="h-5 w-5 mt-px text-primary flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-md text-primary mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {exp.projectLinks && exp.projectLinks.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-md text-primary mb-3">Project Links:</h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.projectLinks.map((link, linkIndex) => {
                            const isGithubLink = link.name.toLowerCase().includes('github');
                            const isVisitLink = link.name.toLowerCase().includes('visit');
                            
                            return (
                              <Button 
                                asChild 
                                variant={isVisitLink ? "default" : "outline"} 
                                size="sm" 
                                key={linkIndex} 
                                className={isVisitLink ? "bg-primary hover:bg-primary/90 text-white shadow-md" : "hover:bg-accent/80"}
                              >
                                <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${link.name}`}>
                                  {isGithubLink && <Github className="mr-2 h-4 w-4" />}
                                  {isVisitLink && <ExternalLink className="mr-2 h-4 w-4" />}
                                  {link.name}
                                </Link>
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </div>
              </Card>
            </AnimatedScrollWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
