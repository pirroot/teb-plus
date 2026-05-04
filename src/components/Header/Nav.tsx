import Link from 'next/link';
import { HiMiniBars3BottomRight, HiReceiptPercent } from 'react-icons/hi2';

export default function Nav() {
  const nav = [
    {
      title: 'صفحه اصلی',
      link: '/',
    },
    {
      title: 'فروشگاه',
      link: '/store',
    },
    {
      title: 'وبلاگ',
      link: '/articles',
    },
    {
      title: 'تماس با ما',
      link: '/contact-us',
    },
    {
      title: 'درباره ما',
      link: '/about',
    },
    {
      title: 'سوالات متداول؟',
      link: '/faq',
    },
  ];

  return (
    <div className="container mx-auto flex justify-between gap-5 items-center pb-1">
      <ul className="flex  items-center gap-7 transition-colors max-md:hidden">
        <li>
          <Link href="/" className=" p-2 px-3  max-lg:hidden flex gap-2">
            <HiMiniBars3BottomRight size={25} /> دسته بندی ها
          </Link>
          <button className="md:hidden">منو</button>
        </li>
        <span className="border-l border-gray-300 py-4"></span>
        {nav.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="hover:border-b-2 py-2 border-red-600"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="animate-pulse max-lg:hidden">
        <Link
          href={'/'}
          className="flex gap-2 bg-red-100 text-red-600 rounded-lg text-lg p-1.5 px-2"
        >
          پیشنهاد ویژه <HiReceiptPercent size={25} />
        </Link>
      </div>
    </div>
  );
}
