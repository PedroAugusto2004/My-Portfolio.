"use client";

import { useState, useTransition } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { optimizeResume, type OptimizeResumeInput, type OptimizeResumeOutput } from '@/ai/flows/resume-optimization';
import { resumeData } from '@/config/resume-data';
import SectionTitle from '@/components/ui/section-title-component';
import AnimatedScrollWrapper from '@/components/ui/animated-scroll-wrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  resumeText: z.string().min(100, "Resume text must be at least 100 characters."),
  targetAudience: z.string().min(3, "Target audience must be at least 3 characters."),
  portfolioText: z.string().min(50, "Portfolio text must be at least 50 characters."),
});

type FormData = z.infer<typeof formSchema>;

export default function AiOptimizerSection() {
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resumeText: resumeData.get전체ResumeText,
      targetAudience: "Tech Recruiter at a FAANG company",
      portfolioText: resumeData.portfolioSummaryText,
    }
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    startTransition(async () => {
      try {
        setSuggestions([]);
        const result: OptimizeResumeOutput = await optimizeResume(data as OptimizeResumeInput);
        if (result && result.optimizedTextSuggestions) {
          setSuggestions(result.optimizedTextSuggestions);
          toast({
            title: "Optimization Complete!",
            description: "Suggestions generated successfully.",
            variant: "default",
          });
        } else {
          throw new Error("No suggestions returned from AI.");
        }
      } catch (error) {
        console.error("AI Optimization Error:", error);
        toast({
          title: "Optimization Failed",
          description: error instanceof Error ? error.message : "An unknown error occurred. Please try again.",
          variant: "destructive",
        });
        setSuggestions([]);
      }
    });
  };

  return (
    <section id="ai-optimizer">
      <div className="container mx-auto max-w-screen-lg px-4">
        <AnimatedScrollWrapper>
          <SectionTitle>AI Portfolio Optimizer</SectionTitle>
          <p className="mb-10 text-center text-lg text-muted-foreground md:text-xl">
            Leverage AI to tailor your portfolio's message. Get suggestions to reword text based on your resume and target audience.
          </p>
        </AnimatedScrollWrapper>

        <AnimatedScrollWrapper delay="delay-100">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-deepIndigo flex items-center gap-2">
                <Wand2 className="h-6 w-6" /> Optimize Your Content
              </CardTitle>
              <CardDescription>
                Provide your resume, portfolio summary, and target audience to get AI-powered suggestions.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="resumeText" className="font-semibold">Your Resume Text</Label>
                  <Textarea
                    id="resumeText"
                    {...register("resumeText")}
                    rows={8}
                    className="mt-1"
                    placeholder="Paste your full resume text here..."
                  />
                  {errors.resumeText && <p className="mt-1 text-sm text-destructive">{errors.resumeText.message}</p>}
                </div>
                <div>
                  <Label htmlFor="portfolioText" className="font-semibold">Your Portfolio Summary</Label>
                  <Textarea
                    id="portfolioText"
                    {...register("portfolioText")}
                    rows={5}
                    className="mt-1"
                    placeholder="Enter a summary of your portfolio content (e.g., intro, project highlights)."
                  />
                  {errors.portfolioText && <p className="mt-1 text-sm text-destructive">{errors.portfolioText.message}</p>}
                </div>
                <div>
                  <Label htmlFor="targetAudience" className="font-semibold">Target Audience</Label>
                  <Input
                    id="targetAudience"
                    {...register("targetAudience")}
                    className="mt-1"
                    placeholder="e.g., Software Engineering Manager, Startup Founder, HR at a specific company"
                  />
                  {errors.targetAudience && <p className="mt-1 text-sm text-destructive">{errors.targetAudience.message}</p>}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button type="submit" disabled={isPending} size="lg">
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Optimizing...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-5 w-5" /> Get Suggestions
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </AnimatedScrollWrapper>

        {suggestions.length > 0 && (
          <AnimatedScrollWrapper className="mt-12" delay="delay-200">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-deepIndigo flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" /> AI Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="p-4 bg-primary/5 border border-primary/20 rounded-md text-foreground/90">
                      <p>{suggestion}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedScrollWrapper>
        )}
      </div>
    </section>
  );
}
