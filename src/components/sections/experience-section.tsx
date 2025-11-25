
import { resumeData, type ExperienceEntry } from '@/config/resume-data';
import SectionTitle from '@/components/ui/section-title-component';
import AnimatedScrollWrapper from '@/components/ui/animated-scroll-wrapper';
import { Card } from '@/components/ui/card';
import { Briefcase, CalendarDays, CheckCircle, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const ProjectShowcase = ({ src, alt, link }: { src: string; alt: string; link?: string }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl transition-all duration-300 hover:shadow-primary/25 hover:-translate-y-1">
      {/* Browser Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50/90 dark:bg-gray-800/90 border-b border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md z-10 relative">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm" />
        </div>
        {/* Address Bar */}
        <div className="ml-4 flex-1 h-6 rounded-md bg-white/50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 flex items-center px-3">
          <div className="w-2 h-2 rounded-full border border-gray-400 dark:border-gray-500 mr-2 opacity-50" />
          <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono truncate max-w-[150px] sm:max-w-[200px]">
            {link ? new URL(link).hostname : 'localhost:3000'}
          </span>
        </div>
      </div>

      {/* Image Area */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
        <Image
          src={src}
          alt={alt}
          fill
          quality={95}
          className="object-cover object-[50%_85%] transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Hover Overlay */}
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-white/40 dark:bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-gray-900/95 dark:bg-white/95 hover:bg-gray-900 dark:hover:bg-white text-white dark:text-gray-900 rounded-full font-medium text-sm shadow-lg transition-colors">
                Visit Website <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

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

  const getVisitLink = (links?: { name: string; url: string }[]) => {
    return links?.find(l => l.name.toLowerCase().includes('visit'))?.url;
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
                          {/* Image for mobile, shown after description */}
                          {(() => {
                            const imgSrc = getImageForCompany(exp.company);
                            const visitLink = getVisitLink(exp.projectLinks);
                            if (!imgSrc) return null;
                            return (
                              <div className="lg:hidden my-8">
                                <ProjectShowcase
                                  src={imgSrc}
                                  alt={`${exp.company} showcase`}
                                  link={visitLink}
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
                        {/* Image for desktop */}
                        {(() => {
                          const imgSrc = getImageForCompany(exp.company);
                          const visitLink = getVisitLink(exp.projectLinks);
                          if (!imgSrc) return null;
                          return (
                            <div className={`hidden lg:block order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} mt-2`}>
                              <ProjectShowcase
                                src={imgSrc}
                                alt={`${exp.company} showcase`}
                                link={visitLink}
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
