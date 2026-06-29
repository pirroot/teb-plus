import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import raviFont from '../utils/font/font';

export const metadata: Metadata = {
  title: 'لباسینو | فروشگاه آنلاین لباس',
  description: 'مرجع تخصصی خرید لباس‌های برندهای خلاق ایرانی',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`scroll-smooth ${raviFont.variable}`}>
      <body className='bg-linear-to-b from-gray-50 to-white min-h-screen'>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}