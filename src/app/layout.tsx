import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export const metadata: Metadata = {
  title: 'لباسینو',
  description: 'سایت فروشگاهی لباس - سایت لباسینو',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className='bg-gray-50'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
