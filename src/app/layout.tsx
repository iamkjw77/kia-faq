import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { createMetadata } from '@/config/seo';
import { siteConfig } from '@/config/site';
import Header from '@/components/@layout/Header';
import Footer from '@/components/@layout/Footer';
import QueryProvider from '@/providers/QueryProvider';
import ErrorBoundary from '@/providers/ErrorBoundary';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="canonical" href={siteConfig.url} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <ErrorBoundary>
            <Header />
            <main className="side-padding pb-3xl mt-[56px] lg:mt-3xl m">
              <div className="max-w-[1240px] mx-auto">{children}</div>
            </main>
            <Footer />
          </ErrorBoundary>
        </QueryProvider>
      </body>
    </html>
  );
}
