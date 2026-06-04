import Image, { StaticImageData } from 'next/image';
import CatImg1 from '@/public/images/categories/men-cat.jpg';
import CatImg2 from '@/public/images/categories/women-cat.jpg';
import CatImg3 from '@/public/images/categories/kids-cat.jpg';
import CatImg4 from '@/public/images/categories/shoes-cat.jpg';
import CatImg5 from '@/public/images/categories/accessory-cat.jpg';
import { toNumberFa } from '@/src/utils/toNumberFa';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

type Category = {
  id: number;
  title: string;
  img: StaticImageData;
  productCount: number;
};

const list: Category[] = [
  { id: 1, title: 'پوشاک مردانه', img: CatImg1, productCount: 24000 },
  { id: 2, title: 'پوشاک زنانه', img: CatImg2, productCount: 4000 },
  { id: 3, title: 'پوشاک بچگانه', img: CatImg3, productCount: 6000 },
  { id: 4, title: 'کیف و کفش', img: CatImg4, productCount: 4000 },
  { id: 5, title: 'اکسسوری‌ها', img: CatImg5, productCount: 64000 },
];

export default function TopCategories() {
  return (
    <section className="bg-[#242B3D0D] mt-20">
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          دسته‌بندی‌های <span className="text-red-600">منتخب</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {list.map((item) => (
            <Link
              href={`/categories/${item.id}`}
              key={item.id}
              className="group bg-white rounded-2xl p-4 space-y-3 hover:scale-105 transition-transform duration-300 border border-gray-100 shadow-sm hover:shadow-md"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <h4 className="text-base font-bold group-hover:text-red-600 transition-colors">
                {item.title}
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">
                  {toNumberFa(item.productCount)} محصول
                </span>
                <FiArrowLeft size={16} className="text-red-600" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}