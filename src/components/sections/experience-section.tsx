
import { resumeData, type ExperienceEntry } from '@/config/resume-data';
import SectionTitle from '@/components/ui/section-title-component';
import AnimatedScrollWrapper from '@/components/ui/animated-scroll-wrapper';
import { Card } from '@/components/ui/card';
import { Briefcase, CalendarDays, CheckCircle, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ExperienceSection() {
  const imageMap: Record<string, string> = {
    'StudyShield': '/images/studyshield.png',
    'Megaphoton': '/images/megaphoton.png',
    'MediMentor': '/images/medimentor.png',
    'Muscles & Balance': '/images/muscles-and-balance.png',
  };

  const getImageForCompany = (company: string) => {
    if (company.toLowerCase().includes('studyshield')) return imageMap['StudyShield'];
    if (company.toLowerCase().includes('megaphoton')) return imageMap['Megaphoton'];
    if (company.toLowerCase().includes('medimentor') || company.toLowerCase().includes('medimentor')) return imageMap['MediMentor'];
    if (company.toLowerCase().includes('muscles')) return imageMap['Muscles & Balance'];
    return '';
  };
  return (
    <section id="experience" className="bg-transparent py-16 sm:py-20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <AnimatedScrollWrapper animationClassName="animate-fade-in-up">
          <SectionTitle>Experience & Projects</SectionTitle>
        </AnimatedScrollWrapper>

        <div className="mt-12 space-y-12">
          {resumeData.experience.map((exp: ExperienceEntry, index: number) => (
            <AnimatedScrollWrapper key={index} delay={`delay-${index * 100}`} animationClassName="animate-fade-in-up">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
                <div className="p-4 sm:p-6 md:p-8">
                  {/* First entry: no image layout */}
                  {index === 0 ? (
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                        <h3 className="text-2xl md:text-3xl font-bold text-primary">{exp.role}</h3>
                      </div>
                      <p className="text-base md:text-lg font-semibold text-muted-foreground mb-1">{exp.company}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <CalendarDays className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>

                      <p className="text-foreground/80 mb-6 leading-relaxed">{exp.description}</p>

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
                          <div className="flex flex-wrap gap-3">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {exp.projectLinks && exp.projectLinks.length > 0 && (
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
                      )}
                    </div>
                  ) : (
                    /* Other entries: two-column layout with images */
                    <div>
                      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start`}>
                        {/* Content - Header and Description */}
                        <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                          <div className="flex items-center gap-3 mb-2">
                            <Briefcase className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-primary">{exp.role}</h3>
                          </div>
                          <p className="text-base md:text-lg font-semibold text-muted-foreground mb-1">{exp.company}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                            <CalendarDays className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>

                          <p className="text-foreground/80 mb-6 leading-relaxed">{exp.description}</p>

                          {/* Image for mobile, shown after description */}
                          {(() => {
                            const imgSrc = getImageForCompany(exp.company);
                            if (!imgSrc) return null;
                            return (
                              <div className="lg:hidden relative h-64 sm:h-80 rounded-2xl overflow-hidden my-6 shadow-lg ring-1 ring-black/10">
                                <Image
                                  src={imgSrc}
                                  alt={`${exp.company} showcase`}
                                  fill
                                  quality={90}
                                  className="object-cover shadow-lg"
                                  sizes="(max-width: 1023px) 100vw, 0"
                                />
                              </div>
                            );
                          })()}

                          <h4 className="font-semibold text-md text-primary mb-3">Key Responsibilities:</h4>
                          <ul className="space-y-2.5 mb-6">
                            {exp.responsibilities.slice(0, 4).map((resp, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/75">
                                <CheckCircle className="h-5 w-5 mt-px text-primary flex-shrink-0" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Image for desktop */}
                        {(() => {
                          const imgSrc = getImageForCompany(exp.company);
                          if (!imgSrc) return null;
                          return (
                            <div className={`hidden lg:block order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} relative h-96 rounded-2xl overflow-hidden mt-12 shadow-lg ring-1 ring-black/10`}>
                              <Image
                                src={imgSrc}
                                alt={`${exp.company} showcase`}
                                fill
                                quality={90}
                                className="object-cover shadow-lg"
                                sizes="50vw"
                              />
                            </div>
                          );
                        })()}
                      </div>

                      {/* Technologies and Links - Full width */}
                      <div className="mt-6">
                        {(() => {
                          const imgSrc = getImageForCompany(exp.company);
                          if (!imgSrc) return null;
                          return (
                            <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
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
                              )}
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </AnimatedScrollWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
