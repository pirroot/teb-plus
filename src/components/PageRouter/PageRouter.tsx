'use client';
import { IPageRouterDto } from '@/src/types/IPageRouterDto';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { HiOutlineHome } from 'react-icons/hi2';

export default function PageRouter({ routs }: { routs: IPageRouterDto[] }) {
  const routeName = usePathname();

  return (
    <nav className="my-5 rounded-xl container mx-auto">
      <ul className="flex gap-3 items-center">
        <li>
          <Link href={'/'}>
            <HiOutlineHome size={24} />
          </Link>
        </li>
        {routs.map((route, index) => (
          <li key={index} className={`flex gap-2 items-center`}>
            <FaArrowLeftLong size={18} className="text-red-600 mx-2" />
            <Link
              href={route.link}
              className={`
                ${routeName == '/' + route.link ? 'text-red-700' : ''}  
                `}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
