import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { Inter, Space_Grotesk } from 'next/font/google';
import client from '@/services/apolloClient';
import { ApolloProvider } from '@apollo/client';

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
});


export const metadata: Metadata = {
  title: 'CodeWithWest Portfolio',
  description: 'A professional developer portfolio to showcase development skills, projects, and educational background.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(fontBody.variable, fontHeadline.variable, "font-body antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
