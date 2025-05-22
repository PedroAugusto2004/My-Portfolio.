import type { Metadata } from 'next';
import { openSans } from '@/lib/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Portfolio Pro | Pedro Augusto',
  description: 'Personal portfolio of Pedro Augusto, Full Stack Developer & Cloud Specialist.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${openSans.variable} font-sans bg-background text-foreground`}>
        <Navbar />
        <main vaul-drawer-wrapper="" className="min-h-screen flex-1 bg-background">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
