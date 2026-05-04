import Link from 'next/link';
import { FiChevronsLeft } from 'react-icons/fi';

export default function FooterLink() {
  return (
    <div className="col-span-4 flex gap-5 justify-around">
      <div className="">
        <h5 className="text-2xl font-bold border-r-5 px-2 border-red-700 ">
          لینک‌های مفید
        </h5>
        <div className="grid pt-10 gap-5 text-justify">
          <Link href={'/'} className="flex items-center group gap-1">
            <FiChevronsLeft size={22} />
            <span className="group-hover:-translate-x-1.5 transition-transform duration-300">
              صفحه نخست
            </span>
          </Link>
          <Link href={'/'} className="flex items-center group gap-1">
            <FiChevronsLeft size={22} />
            <span className="group-hover:-translate-x-1.5 transition-transform duration-300">
              فروشگاه{' '}
            </span>
          </Link>
          <Link href={'/blog'} className="flex items-center group gap-1">
            <FiChevronsLeft size={22} />
            <span className="group-hover:-translate-x-1.5 transition-transform duration-300">
              وبگاه
            </span>
          </Link>
          <Link href={'/about'} className="flex items-center group gap-1">
            <FiChevronsLeft size={22} />
            <span className="group-hover:-translate-x-1.5 transition-transform duration-300">
              درباره ما{' '}
            </span>
          </Link>
          <Link href={'/contact-us'} className="flex items-center group gap-1">
            <FiChevronsLeft size={22} />
            <span className="group-hover:-translate-x-1.5 transition-transform duration-300">
              تماس با ما{' '}
            </span>
          </Link>
        </div>
      </div>
      <div className="">
        <h5 className="text-2xl font-bold border-r-5 px-2 border-red-700 ">
          دسترسی سریع{' '}
        </h5>
        <div className="grid pt-10 gap-5 text-justify">
          <Link href={'/'} className="flex items-center group gap-1">
            <FiChevronsLeft size={22} />
            <span className="group-hover:-translate-x-1.5 transition-transform duration-300">
              صفحه نخست
            </span>
          </Link>
          <Link href={'/'} className="flex items-center group gap-1">
            <FiChevronsLeft size={22} />
            <span className="group-hover:-translate-x-1.5 transition-transform duration-300">
              فروشگاه{' '}
            </span>
          </Link>
          <Link href={'/blog'} className="flex items-center group gap-1">
            <FiChevronsLeft size={22} />
            <span className="group-hover:-translate-x-1.5 transition-transform duration-300">
              وبگاه
            </span>
          </Link>
          <Link href={'/about'} className="flex items-center group gap-1">
            <FiChevronsLeft size={22} />
            <span className="group-hover:-translate-x-1.5 transition-transform duration-300">
              درباره ما{' '}
            </span>
          </Link>
          <Link href={'/contact-us'} className="flex items-center group gap-1">
            <FiChevronsLeft size={22} />
            <span className="group-hover:-translate-x-1.5 transition-transform duration-300">
              تماس با ما{' '}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
