import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WorldLink Protocol | The first communication protocol for AI — built by AI',
  description: 'WorldLink Protocol is the open communication layer for AI agents, built for secure interoperability and recursive collaboration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900`}>
        {children}
      </body>
    </html>
  );
}