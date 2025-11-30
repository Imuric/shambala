import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from '@/components/HeaderMegaMenu';
import { FooterLinks } from '@/components/FooterLinks';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Organization Portfolio',
  description: 'Welcome to our organization portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          {/* 1. The Header is placed here to show on all pages */}
          <HeaderMegaMenu />
          
          {/* 2. The main page content renders here */}
          <main className="min-h-[calc(100vh-400px)]">
             {children}
          </main>
          
          {/* 3. The Footer is placed here to show on all pages */}
          <FooterLinks />
        </MantineProvider>
      </body>
    </html>
  );
}