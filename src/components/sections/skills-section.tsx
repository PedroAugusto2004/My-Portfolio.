
import { resumeData, type SkillCategory } from '@/config/resume-data';
import SectionTitle from '@/components/ui/section-title-component';
import AnimatedScrollWrapper from '@/components/ui/animated-scroll-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Laptop, Server, LanguagesIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const categoryIcons: { [key: string]: React.ElementType } = {
  "Frontend Development": Laptop,
  "Backend Development": Server,
  "Cloud & DevOps": Server,
  "Languages": LanguagesIcon,
  "Default": Brain,
};

export default function SkillsSection() {
  return (
    <section id="skills">
      <TooltipProvider>
        <div className="container mx-auto max-w-screen-xl px-4">
          <AnimatedScrollWrapper>
            <SectionTitle>My Expertise</SectionTitle>
          </AnimatedScrollWrapper>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {resumeData.skills.map((category: SkillCategory, index: number) => {
              const IconComponent = categoryIcons[category.category] || categoryIcons["Default"];
              return (
                <AnimatedScrollWrapper key={category.category} delay={`delay-${index * 100}`}>
                  <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="h-8 w-8 text-primary" />
                        <CardTitle className="text-2xl text-primary">{category.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) =>
                          skill.description ? (
                            <Tooltip key={skill.name} delayDuration={100}>
                              <TooltipTrigger asChild>
                                <Badge
                                  variant="secondary"
                                  className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 cursor-default"
                                >
                                  {skill.name}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent side="top" align="center">
                                <p>{skill.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <Badge
                              key={skill.name}
                              variant="secondary"
                              className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/30 hover:bg-primary/20"
                            >
                              {skill.name}
                            </Badge>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedScrollWrapper>
              );
            })}
          </div>
        </div>
      </TooltipProvider>
    </section>
  );
}
