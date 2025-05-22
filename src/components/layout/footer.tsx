import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '@/config/resume-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {resumeData.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {resumeData.contact.github && (
              <Link href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            )}
            {resumeData.contact.linkedin && (
              <Link href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            )}
            {resumeData.contact.email && (
              <Link href={`mailto:${resumeData.contact.email}`} aria-label="Email">
                <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
