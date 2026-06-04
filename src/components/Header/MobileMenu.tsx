'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import leftSvg from '@/public/svg/left.svg';
import exitSvg from '@/public/svg/exit.svg';
import menuSvg from '@/public/svg/menu.svg';
import { FiSearch } from 'react-icons/fi';

type NavItem = { title: string; link: string };

const navItems: NavItem[] = [
  { title: 'صفحه اصلی', link: '/' },
  { title: 'فروشگاه', link: '/store' },
  { title: 'وبلاگ', link: '/blog' },
  { title: 'درباره ما', link: '/about' },
  { title: 'تماس با ما', link: '/contact-us' },
  { title: 'سوالات متداول', link: '/faq' },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // بستن منو با کلید Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // جلوگیری از اسکرول پس‌زمینه
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(true)} aria-label="باز کردن منو">
        <Image src={menuSvg} alt="" width={32} aria-hidden="true" />
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="منوی ناوبری"
            className="fixed top-0 right-0 z-50 h-screen w-3/4 max-w-sm bg-gray-50 shadow-xl rounded-l-xl flex flex-col"
          >
            {/* سربرگ */}
            <div className="flex items-center gap-2 p-4 border-b border-gray-200">
              <form
                role="search"
                className="flex flex-1 items-center gap-2 border border-gray-300 rounded-lg px-3 py-2"
              >
                <FiSearch className="text-gray-400 shrink-0" size={18} />
                <input
                  type="search"
                  className="text-gray-600 outline-none text-sm w-full bg-transparent"
                  placeholder="جست‌وجو در لباسینو..."
                />
              </form>
              <button
                onClick={() => setOpen(false)}
                aria-label="بستن منو"
                className="p-1"
              >
                <Image src={exitSvg} alt="" width={22} aria-hidden="true" />
              </button>
            </div>

            {/* دکمه‌های سریع */}
            <div className="flex gap-3 px-4 py-3 border-b border-gray-200">
              <button className="flex-1 bg-red-100 text-red-700 text-sm font-medium py-2 rounded-xl">
                دسته‌بندی
              </button>
              <button className="flex-1 bg-red-100 text-red-700 text-sm font-medium py-2 rounded-xl">
                منو
              </button>
            </div>

            {/* لیست لینک‌ها */}
            <ul className="flex-1 overflow-y-auto px-4 py-2">
              {navItems.map((item) => (
                <li
                  key={item.link + item.title}
                  className="border-b border-gray-200 last:border-none"
                >
                  <Link
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="flex justify-between items-center py-4 text-sm text-gray-700 hover:text-red-600 transition-colors"
                  >
                    {item.title}
                    <Image src={leftSvg} alt="" width={10} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}