import type { Metadata } from 'next';
import { lato, playfairDisplay } from '@/lib/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import ScrollReactiveBackground from '@/components/layout/scroll-reactive-background';
import CursorLightBackground from '@/components/ui/cursor-light-background';
import { ThemeToggle } from '@/components/theme-toggle';


export const metadata: Metadata = {
  title: 'Portfolio | Pedro Augusto',
  description: 'Personal portfolio of Pedro Augusto, Full Stack Developer & Cloud Specialist.',
  icons: {
    icon: '/images/blue logo.png', // Updated to use the correct logo path
    shortcut: '/images/blue logo.png', // Added shortcut icon for header image
  },
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
          <CursorLightBackground />
          <Navbar />
          <main vaul-drawer-wrapper="" className="min-h-screen flex-1 bg-transparent">{children}</main>
          <Footer />
          <div className="fixed bottom-4 right-4 z-[101]"> {/* Increased z-index */}
            <ThemeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
