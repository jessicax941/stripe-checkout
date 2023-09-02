import Header from '@/components/header';
import '@stripe/stripe-js';
import type { Metadata } from 'next';
import { inter } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'webdevpro',
  description: 'React courses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="px-8 lg:px-16 py-8">{children}</main>
      </body>
    </html>
  );
}
