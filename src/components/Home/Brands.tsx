import Image from 'next/image';
import brand1 from '@/assets/images/brands/brand-1.png';
import brand2 from '@/assets/images/brands/brand-2.png';
import Link from 'next/link';

export default function Brands() {
  return (
    <section className="container mx-auto">
      <div className=" flex justify-between max-md:justify-around">
        <h2 className="text-3xl font-bold">
          محبوب ترین <span className="text-red-700">برند ها</span>
        </h2>
        <div className=""></div>
      </div>
      <hr className="text-gray-300 border mt-10" />
      <div className="grid grid-cols-4 gap-10 py-10">
        <div className="col-span-1 ">
          <h3 className="text-md font-bold py-4">
            بیش از <span className="text-red-700">40 برند</span> با کیفیت ایرانی
          </h3>
          <p className="text-sm">
            این فروشگاه با تمرکز بر ارائه‌ی محصولات برندهای ایرانی، فرصتی
            بی‌نظیر برای کشف استایل‌های منحصربه‌فرد و همراهی با آخرین ترندهای
            دنیای مد فراهم کرده است.
          </p>
        </div>
        <div
          className="col-span-3 flex justify-between
        "
        >
          <Link
            href={'/'}
            className="shadow-2xl rounded-3xl p-3 border-2 border-gray-200 hover:-translate-1 duration-500 transition-transform"
          >
            <Image src={brand1} alt="brand-logo" />
          </Link>
          <Link
            href={'/'}
            className="shadow-2xl rounded-3xl p-3 border-2 border-gray-200 hover:-translate-1 duration-500 transition-transform"
          >
            <Image src={brand2} alt="brand-logo" />
          </Link>
          <Link
            href={'/'}
            className="shadow-2xl rounded-3xl p-3 border-2 border-gray-200 hover:-translate-1 duration-500 transition-transform"
          >
            <Image src={brand1} alt="brand-logo" />
          </Link>
          <Link
            href={'/'}
            className="shadow-2xl rounded-3xl p-3 border-2 border-gray-200 hover:-translate-1 duration-500 transition-transform"
          >
            <Image src={brand1} alt="brand-logo" />
          </Link>
          <Link
            href={'/'}
            className="shadow-2xl rounded-3xl p-3 border-2 border-gray-200 hover:-translate-1 duration-500 transition-transform"
          >
            <Image src={brand2} alt="brand-logo" />
          </Link>
          <Link
            href={'/'}
            className="shadow-2xl rounded-3xl p-3 border-2 border-gray-200 hover:-translate-1 duration-500 transition-transform"
          >
            <Image src={brand1} alt="brand-logo" />
          </Link>
        </div>
      </div>
    </section>
  );
}
