"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState, useTransition } from 'react';
import SectionTitle from '@/components/ui/section-title-component';
import AnimatedScrollWrapper from '@/components/ui/animated-scroll-wrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { resumeData } from '@/config/resume-data';
import { Mail, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import Link from 'next/link';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Replace the mock server action with an API call
async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (err: any) {
    return { success: false, message: err.message || 'Failed to send message.' };
  }
}


export default function ContactSection() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    startTransition(async () => {
      try {
        const response = await submitContactForm(data);
        if (response.success) {
          toast({
            title: "Message Sent!",
            description: response.message,
          });
          reset();
        } else {
          throw new Error(response.message);
        }
      } catch (error) {
         toast({
          title: "Error Sending Message",
          description: error instanceof Error ? error.message : "An unexpected error occurred.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <section id="contact" className="bg-slate-50">
      <div className="container mx-auto max-w-screen-lg px-4">
        <AnimatedScrollWrapper>
          <SectionTitle>Get In Touch</SectionTitle>
          <p className="mb-10 text-center text-lg text-muted-foreground md:text-xl">
            Have a project in mind, a question, or just want to connect? Feel free to reach out!
          </p>
        </AnimatedScrollWrapper>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <AnimatedScrollWrapper delay="delay-100">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Send className="h-6 w-6" /> Send Me a Message
                </CardTitle>
                <CardDescription>I'll do my best to respond as soon as possible.</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" {...register("name")} placeholder="Your Name" className="mt-1"/>
                    {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" {...register("email")} placeholder="your.email@example.com" className="mt-1"/>
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" {...register("message")} rows={5} placeholder="Your message..." className="mt-1"/>
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isPending} size="lg">
                    {isPending ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="mr-2 h-5 w-5" /> Send Message</>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </AnimatedScrollWrapper>

          <AnimatedScrollWrapper delay="delay-200" className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Contact Information</h3>
            <p className="text-muted-foreground">
              Alternatively, you can reach me through the following channels:
            </p>
            <div className="space-y-4">
              <Link href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-3 group">
                <Mail className="h-6 w-6 text-primary" />
                <span className="text-foreground group-hover:text-primary transition-colors">{resumeData.contact.email}</span>
              </Link>
              <Link href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <Linkedin className="h-6 w-6 text-primary" />
                <span className="text-foreground group-hover:text-primary transition-colors">LinkedIn Profile</span>
              </Link>
              <Link href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <Github className="h-6 w-6 text-primary" />
                <span className="text-foreground group-hover:text-primary transition-colors">GitHub Profile</span>
              </Link>
            </div>
             <div className="mt-6 p-4 border rounded-lg bg-card">
              <h4 className="font-semibold text-primary mb-2">Preferred Contact Method:</h4>
              <p className="text-sm text-muted-foreground">
                Email is generally the quickest way to get a response for inquiries. For professional networking, LinkedIn is also a great option.
              </p>
            </div>
          </AnimatedScrollWrapper>
        </div>
      </div>
    </section>
  );
}
