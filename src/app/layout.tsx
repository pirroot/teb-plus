import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import raviFont from '../utils/font/font';

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
    <html lang="en" dir="rtl" className={`scroll-smooth ${raviFont.variable}`}>
      <body className='bg-gray-50'>
        <Header />
        {children}
        <Footer />
      </body>
    </html >
  );
}
