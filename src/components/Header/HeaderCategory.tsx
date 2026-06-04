'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { ChevronLeft, Cpu, Layers } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface SubCategoryGroup {
  title: string;
  items: { title: string; url: string }[];
}

interface Category {
  title: string;
  url: string;
  icon: React.ReactNode;
  image: string;
  subcategories: SubCategoryGroup[];
}

const categories: Category[] = [
  {
    title: 'مد و پوشاک',
    url: '/',
    icon: <Cpu size={20} className="ml-2" />,
    image: "",
    subcategories: [
      {
        title: 'دسته‌بندی مد و پوشاک',
        items: [
          { title: 'کفش', url: '/shoes' },
          { title: 'پیراهن', url: '/shirt' },
          { title: 'کت و شلوار', url: '/suit' },
        ],
      },
    ],
  },
  // ... بقیه آیتم‌ها
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SubCategoryPanel({ category }: { category: Category }) {
  return (
    <div className="absolute right-full top-0 z-10 w-[700px] bg-white rounded-b-lg rounded-l-lg shadow-md p-4 flex gap-4 animate-fade-left">
      <div className="w-full grid grid-cols-3 gap-5">
        {category.subcategories.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold border-r-2 pr-2 border-red-600 text-gray-700">
              {group.title}
            </h4>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className="block text-sm p-1.5 hover:bg-gray-100 rounded-md text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Image
        src={category.image}
        alt={category.title}
        width={130}
        height={130}
        className="rounded-md border border-gray-200 object-cover shrink-0"
      />
    </div>
  );
}

function CategoryItem({
  category,
  isOpen,
  onEnter,
  onLeave,
}: {
  category: Category;
  isOpen: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <li
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <Link
        href={category.url}
        className="flex justify-between items-center p-3 group hover:bg-gray-100 rounded-md text-gray-700 transition-colors duration-200"
      >
        <div className="flex items-center">
          {category.icon}
          <span className="text-sm">{category.title}</span>
        </div>
        <ChevronLeft
          size={16}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-0' : '-rotate-90'}`}
        />
      </Link>

      {isOpen && <SubCategoryPanel category={category} />}
    </li>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeaderCategory() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const openMenu = useCallback(() => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimeout.current = setTimeout(() => {
      setMenuOpen(false);
      setOpenCategoryIndex(null);
    }, 300);
  }, []);

  return (
    <div className="relative max-lg:hidden">
      {/* تریگر دسته‌بندی */}
      <div
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        className="flex cursor-pointer items-center gap-2 p-2 px-3 text-gray-600 hover:text-red-600 transition-colors"
      >
        <HiMiniBars3BottomRight size={23} />
        <span>دسته‌بندی‌ها</span>
      </div>

      {/* دراپ‌داون */}
      {isMenuOpen && (
        <div
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          className="absolute top-full right-0 z-50 w-56 bg-white border border-gray-100 rounded-b-lg rounded-l-lg shadow-lg py-2"
        >
          <ul>
            {categories.map((category, index) => (
              <CategoryItem
                key={category.url + category.title + index}
                category={category}
                isOpen={openCategoryIndex === index}
                onEnter={() => setOpenCategoryIndex(index)}
                onLeave={() => setOpenCategoryIndex(null)}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}