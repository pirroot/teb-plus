import Link from 'next/link';
import CategoryImage1 from '@/public/images/categories/1.png';
import CategoryImage2 from '@/public/images/categories/2.png';
import CategoryImage3 from '@/public/images/categories/3.png';
import Image, { StaticImageData } from 'next/image';

type OfferCategory = {
  title: string;
  discount: string;
  href: string;
  image: StaticImageData;
  imageWidth: number;
};

const offerCategories: OfferCategory[] = [
  {
    title: 'پوشاک بچگانه',
    discount: 'تا ۳۵٪ تخفیف',
    href: '/categories/kids',
    image: CategoryImage1,
    imageWidth: 157,
  },
  {
    title: 'پوشاک مردانه',
    discount: 'تا ۳۵٪ تخفیف',
    href: '/categories/men',
    image: CategoryImage2,
    imageWidth: 220,
  },
  {
    title: 'پوشاک زنانه',
    discount: 'تا ۳۵٪ تخفیف',
    href: '/categories/women',
    image: CategoryImage3,
    imageWidth: 220,
  },
];

export default function OfferCategories() {
  return (
    <section className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24">
      {offerCategories.map((cat) => (
        <div
          key={cat.href}
          className="bg-[#242B3D] rounded-3xl shadow-2xl flex justify-between items-end gap-1 pr-6 pt-16 pb-7 relative overflow-visible min-h-[180]"
        >
          <div className="text-white space-y-4">
            <span
              className="inline-block bg-red-500 py-1.5 px-3 rounded-lg text-sm font-medium"
            >
              {cat.discount}
            </span>
            <h4 className="text-2xl font-bold">{cat.title}</h4>
            <Link
              href={cat.href}
              className="text-sm text-gray-300 hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              مشاهده محصولات
            </Link>
          </div>
          <Image
            src={cat.image}
            alt={cat.title}
            width={cat.imageWidth}
            className="absolute left-3 -top-10 pointer-events-none"
          />
        </div>
      ))}
    </section>
  );
}