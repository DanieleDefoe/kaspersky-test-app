import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kaspersky Next App',
  description: 'Создатель приложения: Абузар Мамедов',
};

export default function RootLayout({ children }: BaseLayoutProps) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-gray-300`}>
        <main className="min-h-screen bg-black flex items-center justify-center w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
