import Link from 'next/link';
import { FiChevronsLeft } from 'react-icons/fi';

type NavItem = { label: string; href: string };

const usefulLinks: NavItem[] = [
  { label: 'صفحه نخست', href: '/' },
  { label: 'فروشگاه', href: '/store' },
  { label: 'وبگاه', href: '/blog' },
  { label: 'درباره ما', href: '/about' },
  { label: 'تماس با ما', href: '/contact-us' },
];

const quickAccess: NavItem[] = [
  { label: 'پروفایل من', href: '/profile' },
  { label: 'سبد خرید', href: '/cart' },
  { label: 'علاقه‌مندی‌ها', href: '/wishlist' },
  { label: 'پیگیری سفارش', href: '/orders' },
  { label: 'قوانین و مقررات', href: '/terms' },
];

function NavColumn({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div className="space-y-5">
      <h5 className="text-lg font-bold border-r-4 pr-3 border-red-600">
        {title}
      </h5>
      <nav className="grid gap-4">
        {items.map((item) => (
          <Link
            key={item.href + item.label}
            href={item.href}
            className="flex items-center group gap-1 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <FiChevronsLeft size={18} className="shrink-0" />
            <span className="group-hover:-translate-x-1.5 transition-transform duration-300">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default function FooterLink() {
  return (
    <div className="col-span-4 flex gap-8 justify-around">
      <NavColumn title="لینک‌های مفید" items={usefulLinks} />
      <NavColumn title="دسترسی سریع" items={quickAccess} />
    </div>
  );
}