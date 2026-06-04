import Link from 'next/link';
import ImageProduct from '@/public/images/products/produc1.jpg';
import ImageProduct2 from '@/public/images/products/p-3-300x400.jpg';
import ImageProduct3 from '@/public/images/products/p-5.jpg';
import { IProductCategoryDto, IProductDto } from '@/src/types/IProductDto';
import Image from 'next/image';
import { toNumberFa } from '@/src/utils/toNumberFa';
import TomanSvg from '@/public/svg/toman.svg';
import { setProductOffer } from '@/src/utils/setProductOffer';
import { FiShoppingCart } from 'react-icons/fi';

const categories: IProductCategoryDto = {
  id: '12312',
  name: 'مانتو',
  slug: 'monto',
  description: '',
  image: ImageProduct,
  is_deleted: false,
  Is_active: false,
  // product: products as IProductDto[],
};

const products: IProductDto[] = [
  {
    id: '1',
    id_product: '133-321jf-32',
    name: 'مانتو کتی ژاکارد M31884',
    slug: 'm-1231',
    description:
      'آیا به دنبال مانتویی هستید که همزمان هم رسمیت یک کت را داشته باشد و هم راحتی یک مانتو روزمره؟ مانتو کتی ژاکارد مدل M31884 دقیقاً همان چیزی است که شما نیاز دارید. این محصول با الهام از طراحی‌های کلاسیک و اجرایی مدرن، به شما این امکان را می‌دهد که در هر موقعیتی، از جلسات کاری گرفته تا دورهمی‌های دوستانه، بدرخشید.',
    images: ImageProduct2,
    price: 300000,
    is_offer: true,
    offer_percent: 50,
    rating: 0,
    size: ['M', 'L', 'XL'],
    colors: ['زرد', 'قرمز', 'آبی'],
    comments: [],
    favorites_number: 0,
    category: categories,
    is_active: false,
    is_deleted: false,
  },
  {
    id: '2',
    id_product: '133-321jf-32',
    name: 'مانتو کتی ژاکارد M31884',
    slug: 'm-1231',
    description:
      'آیا به دنبال مانتویی هستید که همزمان هم رسمیت یک کت را داشته باشد و هم راحتی یک مانتو روزمره؟ مانتو کتی ژاکارد مدل M31884 دقیقاً همان چیزی است که شما نیاز دارید. این محصول با الهام از طراحی‌های کلاسیک و اجرایی مدرن، به شما این امکان را می‌دهد که در هر موقعیتی، از جلسات کاری گرفته تا دورهمی‌های دوستانه، بدرخشید.',
    images: ImageProduct3,
    price: 300000,
    is_offer: true,
    offer_percent: 50,
    rating: 0,
    size: ['M', 'L', 'XL'],
    colors: ['زرد', 'قرمز', 'آبی'],
    comments: [],
    favorites_number: 0,
    category: categories,
    is_active: false,
    is_deleted: false,
  },
  {
    id: '3',
    id_product: '133-321jf-32',
    name: 'مانتو کتی ژاکارد M31884',
    slug: 'm-1231',
    description:
      'آیا به دنبال مانتویی هستید که همزمان هم رسمیت یک کت را داشته باشد و هم راحتی یک مانتو روزمره؟ مانتو کتی ژاکارد مدل M31884 دقیقاً همان چیزی است که شما نیاز دارید. این محصول با الهام از طراحی‌های کلاسیک و اجرایی مدرن، به شما این امکان را می‌دهد که در هر موقعیتی، از جلسات کاری گرفته تا دورهمی‌های دوستانه، بدرخشید.',
    images: ImageProduct2,
    price: 300000,
    is_offer: true,
    offer_percent: 50,
    rating: 0,
    size: ['M', 'L', 'XL'],
    colors: ['زرد', 'قرمز', 'آبی'],
    comments: [],
    favorites_number: 0,
    category: categories,
    is_active: false,
    is_deleted: false,
  },
  {
    id: '4',
    id_product: '133-321jf-32',
    name: 'مانتو کتی ژاکارد M31884',
    slug: 'm-1231',
    description:
      'آیا به دنبال مانتویی هستید که همزمان هم رسمیت یک کت را داشته باشد و هم راحتی یک مانتو روزمره؟ مانتو کتی ژاکارد مدل M31884 دقیقاً همان چیزی است که شما نیاز دارید. این محصول با الهام از طراحی‌های کلاسیک و اجرایی مدرن، به شما این امکان را می‌دهد که در هر موقعیتی، از جلسات کاری گرفته تا دورهمی‌های دوستانه، بدرخشید.',
    images: ImageProduct,
    price: 300000,
    is_offer: true,
    offer_percent: 50,
    rating: 0,
    size: ['M', 'L', 'XL'],
    colors: ['زرد', 'قرمز', 'آبی'],
    comments: [],
    favorites_number: 0,
    category: categories,
    is_active: false,
    is_deleted: false,
  },
  {
    id: '5',
    id_product: '133-321jf-32',
    name: 'مانتو کتی ژاکارد M31884',
    slug: 'm-1231',
    description:
      'آیا به دنبال مانتویی هستید که همزمان هم رسمیت یک کت را داشته باشد و هم راحتی یک مانتو روزمره؟ مانتو کتی ژاکارد مدل M31884 دقیقاً همان چیزی است که شما نیاز دارید. این محصول با الهام از طراحی‌های کلاسیک و اجرایی مدرن، به شما این امکان را می‌دهد که در هر موقعیتی، از جلسات کاری گرفته تا دورهمی‌های دوستانه، بدرخشید.',
    images: ImageProduct2,
    price: 300000,
    is_offer: true,
    offer_percent: 50,
    rating: 0,
    size: ['M', 'L', 'XL'],
    colors: ['زرد', 'قرمز', 'آبی'],
    comments: [],
    favorites_number: 0,
    category: categories,
    is_active: false,
    is_deleted: false,
  },
];

export default function BestSellers() {
  return (
    <section className="container mx-auto my-30">
      <div className="flex justify-between max-md:justify-around mb-10">
        <h2 className="text-3xl font-bold">
          پرفروش ترین محصولات
          <span className="text-red-600"> هفتگی </span>
        </h2>
      </div>
      <div className="flex gap-5 justify-between">
        {products.map((product: IProductDto) => (
          <Link
            key={product.id}
            href={'/'}
            className="relative bg-white rounded-lg p-5 space-y-3 shadow-xl border-2 items-center border-gray-100 text-center transition-all duration-300 hover:shadow-2xl  hover:-translate-y-1 hover:border-[#c83b3b] group"
          >
            <div className="relative">
              {product.is_offer && (
                <span className="absolute top-2 left-2 bg-[#c83b3b] text-white rounded-lg p-1 px-1.5 items-center duration-300 transition-all">
                  %{toNumberFa(product.offer_percent as number, false)}
                </span>
              )}
              <Image
                className={'rounded-lg mx-auto'}
                src={product.images[0]}
                alt={product.name}
                width={270}
                height={250}
                quality={100}
              />
            </div>
            <h3 className={'text-xl'}>{product.name}</h3>
            <span className="text-gray-400">{product.category.name}</span>
            <div>
              {product.is_offer ? (
                <div className="text-lg font-bold flex gap-1 items-center justify-center">
                  <span className="text-sm line-through text-gray-500 px-2">
                    {toNumberFa(product.price)}
                  </span>
                  {toNumberFa(
                    setProductOffer(
                      product.price,
                      product.offer_percent as number
                    )
                  )}{' '}
                  <Image src={TomanSvg} alt="logo" width={18} />
                </div>
              ) : (
                <span className="text-md flex gap-2 justify-center">
                  {toNumberFa(product.price)}
                  <Image src={TomanSvg} alt="logo" width={16} />
                </span>
              )}
            </div>
            <button className="absolute left-0 right-0 mx-auto text-sm font-light  text-white bg-[#c83b3b] rounded-t-2xl w-3/4 py-2  bottom-0 hidden group-hover:flex justify-center gap-2">
              افزودن به سبد خرید
              <FiShoppingCart size={20} />
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
}
