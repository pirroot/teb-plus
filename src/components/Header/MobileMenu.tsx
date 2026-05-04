'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import leftSvg from '@/assets/svg/left.svg';
import exitSvg from '@/assets/svg/exit.svg';
import menuSvg from '@/assets/svg/menu.svg';
import { FiSearch } from 'react-icons/fi';
const list = [
  {
    title: 'صحفه اصلی',
    link: '/',
  },
  {
    title: 'صحفه اصلی',
    link: '/',
  },
  {
    title: 'صحفه اصلی',
    link: '/',
  },
  {
    title: 'صحفه اصلی',
    link: '/',
  },
  {
    title: 'صحفه اصلی',
    link: '/',
  },
  {
    title: 'صحفه اصلی',
    link: '/',
  },
  {
    title: 'صحفه اصلی',
    link: '/',
  },
];

export function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="md:hidden">
      <div>
        <button onClick={() => setOpen(true)}>
          <Image src={menuSvg} alt={'hel'} width={32} />
        </button>
      </div>
      <div
        className={` ${
          open ? 'fixed' : 'hidden'
        } top-0 z-50 rounded-l-xl bg-gray-50 shadow w-3/4 h-screen `}
      >
        <div className="flex-initial items-center justify-center my-5">
          <div className="flex items-center justify-center">
            <form className="border flex justify-start items-center gap-3 text-cener border-gray-300 rounded col-span-7 mx-2">
              <FiSearch className="text-gray-400" size={22} />
              <input
                type="search"
                name="search"
                id="search"
                className="text-gray-600 outline-0  py-2 text-center text-sm min-w-full"
                placeholder="جست و جو در لباسینو ..."
              />
            </form>
            <button onClick={() => setOpen(false)}>
              {' '}
              <Image src={exitSvg} alt={'exitmeno'} width={22} />
            </button>
          </div>
          <div className="flex items-center justify-around my-5">
            <button className="bg-red-100 p-2 px-7 rounded-xl">
              دسته بنده
            </button>
            <button className="bg-red-100 p-2 px-12 rounded-xl">منو</button>
          </div>
          <ul className="flex-initial text-start px-5 ">
            {list.map((item, index) => (
              <li
                key={index}
                className="py-4 border-b border-gray-300 flex justify-between"
              >
                <Link href={item.link}>{item.title}</Link>
                <Image src={leftSvg} alt="icon" width={10} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
