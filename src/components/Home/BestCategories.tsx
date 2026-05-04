import Image from 'next/image';
import CatImg1 from '@/assets/images/categories/cat-2.png';
import CatImg2 from '@/assets/images/categories/cat-3.png';
import CatImg3 from '@/assets/images/categories/cat-2.png';
import CatImg4 from '@/assets/images/categories/cat-3.png';
import CatImg5 from '@/assets/images/categories/cat-2.png';
import { toNumberFa } from '@/src/utility/toNumberFa';
import Link from 'next/link';
import { FiAlignLeft, FiArrowLeft } from 'react-icons/fi';
import { FaAlignLeft } from 'react-icons/fa';

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
    id: 77,
    title: 'پوشاک مردانه',
    img: CatImg1,
    alt: '1',
    productCount: 24000,
  },
  {
    id: 24324,
    title: 'پوشاک زنانه',
    img: CatImg2,
    alt: '2',

    productCount: 4000,
  },
  {
    id: 3342,
    title: 'پوشاک بچگانه',
    img: CatImg3,
    alt: '3',
    productCount: 6000,
  },
  {
    id: 445,
    title: 'کیف کفش',
    img: CatImg4,
    alt: '4',
    productCount: 4000,
  },
  {
    id: 553,
    title: 'اکسسوری ها',
    img: CatImg5,
    alt: '5',
    productCount: 64000,
  },
];

export default function BestCategories() {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center pb-10 mb-10">
        دسته بندی های <span className="text-red-600">متنوع</span>
      </h2>
      <div className=" grid grid-cols-10 gap-10 items-center">
        {list.map((item) => (
          <Link
            href={'/'}
            key={item.id}
            className="col-span-2 flex items-center gap- bg-white rounded-xl p-5 space-y-2 hover:scale-105 duration-300 transition-transform border-2 border-gray-100 shadow-xl group"
          >
            <Image
              src={item.img}
              alt={item.alt}
              className="rounded-xl"
              width={80}
            />
            <div className="space-y-2">
              <h4 className="text-xl font-bold group-hover:text-[#c83b3b]">
                {item.title}
              </h4>
              <div className="flex gap-2">
                <span className="text-sm text-gray-500">
                  {toNumberFa(item.productCount)} محصول
                </span>
                <FiArrowLeft size={18} className="text-gray-500" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
