
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Briefcase, User, BrainCircuit, Send, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { resumeData } from '@/config/resume-data';

const navItems = [
  { label: 'Home', href: '#hero', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: BrainCircuit },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Contact', href: '#contact', icon: Send },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLinks = ({ onItemClick }: { onItemClick?: () => void }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={onItemClick}
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-primary transition-colors"
          aria-label={item.label}
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </Link>
      ))}
    </>
  );
  
  const initials = resumeData.name.split(" ").map(n => n[0]).join("");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="flex items-center gap-2" aria-label="Homepage">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
            {initials}
          </div>
          <span className="text-xl font-bold text-primary">{resumeData.name}</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          <NavLinks />
        </nav>

        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              </SheetHeader>
              <div className="mb-6 flex items-center justify-between">
                 <Link href="#hero" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)} aria-label="Homepage">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                      {initials}
                    </div>
                  </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-2">
                <NavLinks onItemClick={() => setMobileMenuOpen(false)} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
