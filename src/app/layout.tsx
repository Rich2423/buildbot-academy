'use client'

import './globals.css';
import Navbar from './components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-nunito">
        {/* Navigation Component */}
        <Navbar />
        
        {/* Main Content with bottom padding for fixed nav */}
        <main className="pb-16">
          {children}
        </main>
      </body>
    </html>
  );
}