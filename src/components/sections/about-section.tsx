import { resumeData } from '@/config/resume-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';
import { GraduationCap, CircleCheckBig, Zap } from 'lucide-react';
import SectionTitle from '@/components/ui/section-title-component';
import AnimatedScrollWrapper from '@/components/ui/animated-scroll-wrapper';

export default function AboutSection() {
  return (
    <section id="about" className="bg-transparent">
      <div className="container mx-auto max-w-screen-lg px-4">
        <AnimatedScrollWrapper animationClassName="animate-fade-in-up">
          <SectionTitle>About Me</SectionTitle>
        </AnimatedScrollWrapper>
        
        <AnimatedScrollWrapper animationClassName="animate-fade-in-up" delay="delay-100">
          <p className="mb-12 text-center text-lg text-muted-foreground md:text-xl">
            {resumeData.summary}
          </p>
        </AnimatedScrollWrapper>

        <div className="grid md:grid-cols-1 gap-8">
          <AnimatedScrollWrapper as="div" className="w-full" animationClassName="animate-fade-in-up" delay="delay-200">
             <Accordion type="multiple" className="w-full rounded-lg border bg-card p-2 shadow-sm">
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
                      <CircleCheckBig className="h-6 w-6 text-primary" /> Certifications
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    <ul className="space-y-4 text-muted-foreground">
                      {resumeData.certifications.map((cert, index) => (
                        <li key={index} className="pl-2">
                          <div className="flex items-start gap-2">
                            <CircleCheckBig className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                            <span>
                              <span className="font-medium text-foreground">{cert.name}</span> - {cert.issuer}
                              {cert.year && <span className="text-sm"> ({cert.year})</span>}
                            </span>
                          </div>
                          {cert.name === "CS50x: Introduction to Computer Science" && (
                            <div className="mt-2 pl-7">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button aria-label={`View ${cert.name} Certificate`} className="outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded">
                                    <Image
                                      src="/images/CS50x.png" 
                                      alt={`${cert.name} Thumbnail`}
                                      width={150}
                                      height={106} 
                                      className="rounded shadow-md cursor-pointer hover:opacity-80 transition-opacity transform hover:scale-105"
                                      data-ai-hint="certificate document"
                                    />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl p-1 sm:p-2 md:p-3 bg-background overflow-auto">
                                  <DialogHeader className="sr-only">
                                    <DialogTitle>{cert.name} Certificate</DialogTitle>
                                    <DialogDescription>
                                      Expanded view of {resumeData.name}'s {cert.name} Certificate of Completion from {cert.issuer}.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <Image
                                    src="/images/CS50x.png" 
                                    alt={`${cert.name} - ${resumeData.name}`}
                                    width={1200} 
                                    height={849} 
                                    className="rounded-md w-full h-auto"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
                           {cert.name === "CS50AI: Introduction to Artificial Intelligence with Python" && (
                            <div className="mt-2 pl-7">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button aria-label={`View ${cert.name} Certificate`} className="outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded">
                                    <Image
                                      src="/images/CS50AI.png"
                                      alt={`${cert.name} Thumbnail`}
                                      width={150}
                                      height={106}
                                      className="rounded shadow-md cursor-pointer hover:opacity-80 transition-opacity transform hover:scale-105"
                                      data-ai-hint="certificate document"
                                    />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl p-1 sm:p-2 md:p-3 bg-background overflow-auto">
                                  <DialogHeader className="sr-only">
                                    <DialogTitle>{cert.name} Certificate</DialogTitle>
                                    <DialogDescription>
                                      Expanded view of {resumeData.name}'s {cert.name} Certificate of Completion from {cert.issuer}.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <Image
                                    src="/images/CS50AI.png"
                                    alt={`${cert.name} - ${resumeData.name}`}
                                    width={1200}
                                    height={849}
                                    className="rounded-md w-full h-auto"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
                          {cert.name === "CS50C: Introduction to Cybersecurity" && (
                            <div className="mt-2 pl-7">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button aria-label={`View ${cert.name} Certificate`} className="outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded">
                                    <Image
                                      src="/images/CS50 Cybersecurity.png"
                                      alt={`${cert.name} Thumbnail`}
                                      width={150}
                                      height={106}
                                      className="rounded shadow-md cursor-pointer hover:opacity-80 transition-opacity transform hover:scale-105"
                                      data-ai-hint="certificate document"
                                    />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl p-1 sm:p-2 md:p-3 bg-background overflow-auto">
                                  <DialogHeader className="sr-only">
                                    <DialogTitle>{cert.name} Certificate</DialogTitle>
                                    <DialogDescription>
                                      Expanded view of {resumeData.name}'s {cert.name} Certificate of Completion from {cert.issuer}.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <Image
                                    src="/images/CS50 Cybersecurity.png"
                                    alt={`${cert.name} - ${resumeData.name}`}
                                    width={1200}
                                    height={849}
                                    className="rounded-md w-full h-auto"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
                           {cert.name === "Front End Development Certification" && (
                            <div className="mt-2 pl-7">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button aria-label={`View ${cert.name} Certificate`} className="outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded">
                                    <Image
                                      src="/images/FrontEnd.png"
                                      alt={`${cert.name} Thumbnail`}
                                      width={150}
                                      height={106}
                                      className="rounded shadow-md cursor-pointer hover:opacity-80 transition-opacity transform hover:scale-105"
                                      data-ai-hint="certificate document"
                                    />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl p-1 sm:p-2 md:p-3 bg-background overflow-auto">
                                  <DialogHeader className="sr-only">
                                    <DialogTitle>{cert.name} Certificate</DialogTitle>
                                    <DialogDescription>
                                      Expanded view of {resumeData.name}'s {cert.name} Certificate of Completion from {cert.issuer}.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <Image
                                    src="/images/FrontEnd.png"
                                    alt={`${cert.name} - ${resumeData.name}`}
                                    width={1200}
                                    height={849}
                                    className="rounded-md w-full h-auto"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
                           {cert.name === "100+ hours of training" && (
                            <div className="mt-2 pl-7">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button aria-label={`View ${cert.name} Certificate`} className="outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded">
                                    <Image
                                      src="/images/DIO.png"
                                      alt={`${cert.name} Thumbnail`}
                                      width={150}
                                      height={106}
                                      className="rounded shadow-md cursor-pointer hover:opacity-80 transition-opacity transform hover:scale-105"
                                      data-ai-hint="certificate document"
                                    />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl p-1 sm:p-2 md:p-3 bg-background overflow-auto">
                                  <DialogHeader className="sr-only">
                                    <DialogTitle>{cert.name} Certificate</DialogTitle>
                                    <DialogDescription>
                                      Expanded view of {resumeData.name}'s {cert.name} Certificate of Completion from {cert.issuer}.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <Image
                                    src="/images/DIO.png"
                                    alt={`${cert.name} - ${resumeData.name}`}
                                    width={1200}
                                    height={849}
                                    className="rounded-md w-full h-auto"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}

              {resumeData.achievements.length > 0 && (
                <AccordionItem value="achievements" className="border-b-0">
                  <AccordionTrigger className="px-4 text-lg font-semibold hover:no-underline data-[state=open]:text-primary">
                    <div className="flex items-center gap-3">
                      <Zap className="h-6 w-6 text-primary" /> Achievements
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    <ul className="space-y-2 text-muted-foreground">
                      {resumeData.achievements.map((ach, index) => (
                        <li key={index} className="pl-2">
                          <div className="flex items-start gap-2">
                            <Zap className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                            <span>
                              <span className="font-medium text-foreground">{ach.title}</span>: {ach.description}
                            </span>
                          </div>
                          {ach.title === "VOX ASTRA Hackathon Winner" && (
                            <div className="mt-2 pl-7">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button aria-label={`View ${ach.title} Related Image`} className="outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded">
                                    <Image
                                      src="/images/MediMentor.jpg" 
                                      alt={`${ach.title} Thumbnail`}
                                      width={150} // Adjust as needed for thumbnail size
                                      height={106} // Adjust to maintain aspect ratio, or use a square
                                      className="rounded shadow-md cursor-pointer hover:opacity-80 transition-opacity transform hover:scale-105"
                                      data-ai-hint="hackathon project"
                                    />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl p-1 sm:p-2 md:p-3 bg-background overflow-auto">
                                  <DialogHeader className="sr-only">
                                    <DialogTitle>{ach.title} - Visual</DialogTitle>
                                    <DialogDescription>
                                      Expanded view of an image related to {resumeData.name}'s {ach.title} achievement.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <Image
                                    src="/images/MediMentor.jpg" 
                                    alt={`${ach.title} - ${resumeData.name}`}
                                    width={1200} // Adjust for desired expanded size
                                    height={800} // Adjust for desired expanded size
                                    className="rounded-md w-full h-auto"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
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

