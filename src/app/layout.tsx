import type { Metadata } from 'next';
import { lato, playfairDisplay } from '@/lib/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import ScrollReactiveBackground from '@/components/layout/scroll-reactive-background';
import { ThemeToggle } from '@/components/theme-toggle';


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
    <html lang="en" className={`${lato.variable} ${playfairDisplay.variable} scroll-smooth`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollReactiveBackground />
          <Navbar />
          <main vaul-drawer-wrapper="" className="min-h-screen flex-1 bg-transparent">{children}</main>
          <Footer />
          <div className="fixed bottom-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
