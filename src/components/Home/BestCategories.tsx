import Image, { StaticImageData } from 'next/image';
import CatImg1 from '@/public/images/categories/cat-2.png';
import CatImg2 from '@/public/images/categories/cat-3.png';
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
  { id: 3, title: 'پوشاک بچگانه', img: CatImg1, productCount: 6000 },
  { id: 4, title: 'کیف و کفش', img: CatImg2, productCount: 4000 },
  { id: 77, title: 'پوشاک مردانه', img: CatImg1, productCount: 24000 },
  { id: 243, title: 'پوشاک زنانه', img: CatImg2, productCount: 4000 },
  { id: 334, title: 'پوشاک بچگانه', img: CatImg1, productCount: 6000 },
  { id: 445, title: 'کیف و کفش', img: CatImg2, productCount: 4000 },
  { id: 553, title: 'اکسسوری‌ها', img: CatImg1, productCount: 64000 },
];

export default function BestCategories() {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center pb-10 mb-10">
        دسته‌بندی‌های <span className="text-red-600">متنوع</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {list.map((item) => (
          <Link
            href={`/categories/${item.id}`}
            key={item.id}
            className="flex items-center gap-3 bg-white rounded-xl p-5 hover:scale-105 duration-300 transition-transform border border-gray-100 shadow-md group"
          >
            <Image
              src={item.img}
              alt={item.title}
              className="rounded-xl shrink-0"
              width={70}
              height={70}
            />
            <div className="space-y-1.5">
              <h4 className="text-base font-bold group-hover:text-red-600 transition-colors">
                {item.title}
              </h4>
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-500">
                  {toNumberFa(item.productCount)} محصول
                </span>
                <FiArrowLeft size={14} className="text-gray-400" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}