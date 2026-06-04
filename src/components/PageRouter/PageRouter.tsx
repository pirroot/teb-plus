'use client';

import { IPageRouterDto } from '@/src/types/IPageRouterDto';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { HiOutlineHome } from 'react-icons/hi2';

export default function PageRouter({ routs }: { routs: IPageRouterDto[] }) {
  const pathname = usePathname();

  const isActive = (link: string) => {
    const normalized = link.startsWith('/') ? link : `/${link}`;
    return pathname === normalized;
  };

  return (
    <nav className="my-5 container mx-auto" aria-label="breadcrumb">
      <ol className="flex flex-wrap gap-1 items-center text-sm">
        <li>
          <Link
            href="/"
            className="text-gray-500 hover:text-red-600 transition-colors"
            aria-label="خانه"
          >
            <HiOutlineHome size={20} />
          </Link>
        </li>

        {routs.map((route) => (
          <li key={route.link} className="flex items-center gap-1">
            <FaArrowLeftLong size={12} className="text-gray-300 mx-1" />
            <Link
              href={route.link}
              className={`transition-colors hover:text-red-600 ${isActive(route.link)
                ? 'text-red-700 font-medium pointer-events-none'
                : 'text-gray-500'
                }`}
              aria-current={isActive(route.link) ? 'page' : undefined}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}