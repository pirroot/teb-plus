import Image from 'next/image';
import Link from 'next/link';
import image404 from '@/public/images/404.png';
import PageRouter from '../components/PageRouter/PageRouter';
import { IPageRouterDto } from '../types/IPageRouterDto';
import { FiHome, FiArrowLeft, FiSearch } from 'react-icons/fi';

export default function NotFound() {
  const routes: IPageRouterDto[] = [{ link: '404', title: 'صفحه یافت نشد' }];

  return (
    <>
      <PageRouter routs={routes} />
      <section className="space-y-8 container mx-auto my-20 text-center items-center px-4">
        <Image
          src={image404}
          alt="not found page - image"
          className="mx-auto max-w-[400px] w-full"
          priority
        />

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          اوه! صفحه مورد نظر یافت نشد
        </h1>

        <p className="text-gray-500 text-base max-w-md mx-auto">
          ممکن است این صفحه وجود نداشته باشد، حذف شده باشد یا آدرس اشتباه وارد کرده‌اید.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            <FiHome size={18} />
            بازگشت به خانه
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-bold transition-colors"
          >
            <FiArrowLeft size={18} />
            صفحه قبل
          </button>

          <Link
            href="/store"
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-bold transition-colors"
          >
            <FiSearch size={18} />
            جست‌وجو در فروشگاه
          </Link>
        </div>

        <div className="pt-8 text-sm text-gray-400">
          <span>خطای ۴۰۴ • صفحه پیدا نشد</span>
        </div>
      </section>
    </>
  );
}