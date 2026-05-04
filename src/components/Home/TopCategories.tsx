import Image from 'next/image';
import CatImg1 from '@/assets/images/categories/men-cat.jpg';
import CatImg2 from '@/assets/images/categories/women-cat.jpg';
import CatImg3 from '@/assets/images/categories/kids-cat.jpg';
import CatImg4 from '@/assets/images/categories/shoes-cat.jpg';
import CatImg5 from '@/assets/images/categories/accessory-cat.jpg';
import { toNumberFa } from '@/src/utility/toNumberFa';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

const list = [
  {
    id: 1,
    title: 'پوشاک مردانه',
    img: CatImg1,
    alt: '1',
    productCount: 24000,
  },
  {
    id: 2,
    title: 'پوشاک زنانه',
    img: CatImg2,
    alt: '2',

    productCount: 4000,
  },
  {
    id: 3,
    title: 'پوشاک بچگانه',
    img: CatImg3,
    alt: '3',
    productCount: 6000,
  },
  {
    id: 4,
    title: 'کیف کفش',
    img: CatImg4,
    alt: '4',
    productCount: 4000,
  },
  {
    id: 5,
    title: 'اکسسوری ها',
    img: CatImg5,
    alt: '5',
    productCount: 64000,
  },
];

export default function TopCategories() {
  return (
    <section className="bg-[#242B3D0D]">
      <div className="container mx-auto py-15">
        <h2 className="text-3xl font-bold text-center pb-5 mb-10 ">
          دسته بندی های
          <span className="text-red-600"> منتخب </span>
        </h2>
        <div className="flex justify-between gap-10 items-center mx-20">
          {list.map((item) => (
            <Link
              href={'/'}
              key={item.id}
              className="bg-white rounded-3xl p-5 space-y-2 hover:scale-105 duration-300 transition-transform border-2 border-gray-100 "
            >
              <Image src={item.img} alt={item.alt} className="rounded-xl" />
              <h4 className="text-xl font-bold">{item.title}</h4>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  {toNumberFa(item.productCount)} محصول
                </span>
                <FiArrowLeft
                  size={18}
                  className="text-red-700 group-hover:text-white"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
