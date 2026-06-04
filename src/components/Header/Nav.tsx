import Link from 'next/link';
import { HiReceiptPercent } from 'react-icons/hi2';
import HeaderCategory from './HeaderCategory';

type NavItem = { title: string; link: string };

const navItems: NavItem[] = [
  { title: 'صفحه اصلی', link: '/' },
  { title: 'فروشگاه', link: '/store' },
  { title: 'وبلاگ', link: '/blog' },
  { title: 'تماس با ما', link: '/contact-us' },
  { title: 'درباره ما', link: '/about' },
  { title: 'سوالات متداول', link: '/faq' },
];

export default function Nav() {
  return (
    <div className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between gap-5 items-center py-1 max-md:hidden">
        <ul className="flex items-center gap-6">
          <li>
            <HeaderCategory />
          </li>
          <li aria-hidden="true" className="border-l border-gray-300 h-6" />
          {navItems.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className="hover:border-b-2 border-transparent hover:border-red-600 py-2 text-sm transition-colors"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="animate-pulse max-lg:hidden">
          <Link
            href="/special-offers"
            className="flex gap-2 items-center bg-red-100 text-red-600 rounded-lg text-sm font-medium p-2 px-3"
          >
            پیشنهاد ویژه
            <HiReceiptPercent size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}