import Link from 'next/link';
import Image from 'next/image';
import { MobileMenu } from '@/src/components/Header/MobileMenu';
import Logo from '@/public/svg/logo.svg';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

export default function MainNav() {
  return (
    <nav className="container mx-auto flex justify-between max-md:justify-around gap-7 items-center py-4 px-0">
      <MobileMenu />
      <Image src={Logo} alt="لوگو لباسینو" />
      <form
        role="search"
        className="flex justify-start items-center gap-3 bg-gray-100 rounded-md w-1/2 px-4 max-md:hidden"
      >
        <FiSearch className="text-gray-400" size={22} />
        <input
          type="search"
          className="text-gray-600 outline-0 py-3 text-sm w-full bg-transparent"
          placeholder="جست‌وجو در لباسینو..."
        />
      </form>
      <div className="flex justify-end gap-4 items-center">
        <Link href="/login" className="flex gap-2 text-center items-center">
          <FiUser size={28} className="text-gray-600" />
          <span className="max-md:hidden text-sm">ورود / ثبت‌نام</span>
        </Link>
        <span className="border-l border-gray-300 py-3" aria-hidden="true" />
        <Link href="/cart" aria-label="سبد خرید">
          <FiShoppingCart size={25} className="text-gray-700" />
        </Link>
      </div>
    </nav>
  );
}