// app/layout.tsx (o RootLayout.tsx)
import type { Metadata } from 'next';

import './globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'EAL',
  description: 'EAL Genius Construction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
