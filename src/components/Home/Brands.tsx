import Image from 'next/image';
import brand1 from '@/public/images/brands/brand-1.png';
import Link from 'next/link';


const brands = [
  {
    url: '/',
    img: brand1
  },
  {
    url: '/',
    img: brand1
  },
  {
    url: '/',
    img: brand1
  },
  {
    url: '/',
    img: brand1
  },
  {
    url: '/',
    img: brand1
  },
  {
    url: '/',
    img: brand1
  },
  {
    url: '/',
    img: brand1
  },
  {
    url: '/',
    img: brand1
  },
]

export default function Brands() {
  return (
    <section className="container mx-auto">
      <div className=" flex justify-between max-md:justify-center">
        <h2 className="text-3xl font-bold">
          محبوب ترین <span className="text-red-700">برند ها</span>
        </h2>
        <div className=""></div>
      </div>
      <hr className="text-gray-300 border mt-10" />
      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:text-center md:gap-10 py-10">
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
        <div className="col-span-3 grid grid-cols-6 max-md:grid-cols-4 max-sm:grid-cols-2 justify-between gap-5">
          {brands.map((brand, index) => (
            <Link
              href={brand.url}
              className="shadow-2xl rounded-3xl p-3 border-2 border-gray-200 hover:-translate-1 duration-500 transition-transform"
            >
              <Image src={brand.img} alt="brand-logo" className='mx-auto' />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
