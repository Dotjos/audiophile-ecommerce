import type { Metadata } from 'next'
import './globals.css'
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Audiophile e-commerce website',
  description: 'An ecommerce website for audiophiles',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body>
        {children}    
      </body>
    </html>
    
  );
}