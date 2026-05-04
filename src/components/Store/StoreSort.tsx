import Link from 'next/link';
import { FiFilter } from 'react-icons/fi';

export default function StoreSort() {
  return (
    <div className="flex gap-5 items-center text-gray-700">
      <span className="flex gap-2 items-center text-sm">
        <FiFilter size={18} />
        فیلتر بر اساس :
      </span>
      <Link
        href={'/'}
        className="p-1 rounded-md hover:text-red-500 text-sm transition-colors"
      >
        پیش فرض
      </Link>
      <Link
        href={'/'}
        className="p-1 rounded-md hover:text-red-500 text-sm transition-colors"
      >
        جدید ترین
      </Link>
      <Link
        href={'/'}
        className="p-1 rounded-md hover:text-red-500 text-sm transition-colors"
      >
        ارزان ترین
      </Link>
      <Link
        href={'/'}
        className="p-1 rounded-md hover:text-red-500 text-sm transition-colors"
      >
        گران ترین
      </Link>
      <Link
        href={'/'}
        className="p-1 rounded-md hover:text-red-500 text-sm transition-colors"
      >
        تخفیفاتی
      </Link>
      <Link
        href={'/'}
        className="p-1 rounded-md hover:text-red-500 text-sm transition-colors"
      >
        پرفروش ترین
      </Link>
    </div>
  );
}
