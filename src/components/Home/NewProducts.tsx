import Link from 'next/link';
import Image from 'next/image';
import ImageProduct from '@/assets/images/products/produc1.jpg';
import ImageProduct2 from '@/assets/images/products/p-3-300x400.jpg';
import ImageProduct3 from '@/assets/images/products/p-5.jpg';
import { IProductCategoryDto, IProductDto } from '@/src/types/IProductDto';
import { toNumberFa } from '@/src/utility/toNumberFa';
import TomanSvg from '@/assets/svg/toman.svg';
import { setProductOffer } from '@/src/utility/setProductOffer';
import CartSvg from '@/assets/svg/cart shopping.svg';
import { FiArrowLeft } from 'react-icons/fi';

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
    main_image: ImageProduct2,
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
    main_image: ImageProduct3,
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
    main_image: ImageProduct2,
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
    main_image: ImageProduct,
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
    main_image: ImageProduct2,
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

export default function NewProducts() {
  return (
    <section className="container mx-auto my-30">
      <div className="flex justify-between max-md:justify-around mb-10">
        <h2 className="text-3xl font-bold">
          پرفروش ترین محصولات
          <span className=" text-red-600"> هفتگی </span>
        </h2>

        <Link
          href={'/category/product/'}
          className="p-3 px-5 border-2 flex gap-2 items-center rounded-lg font-black border-red-700 text-red-700 hover:text-white hover:bg-red-700 transition-colors"
        >
          مشاهده و خرید
          <FiArrowLeft
            size={18}
            className="text-red-700 group-hover:text-white"
          />
        </Link>
      </div>
      <hr className="text-gray-300 border mb-10" />
      <div className="grid grid-cols-12 gap-5">
        {products.map((product: IProductDto) => (
          <Link
            key={product.id}
            href={'/'}
            className="col-span-3 flex gap-5 relative bg-white rounded-lg p-5 space-y-3 shadow-xl border-2 items-center border-gray-100  transition-all duration-300 hover:shadow-2xl  hover:-translate-y-1 hover:border-[#c83b3b] group"
          >
            <Image
              className="rounded-lg group-hover:bg-[#c83b3b] transition-all duration-300"
              src={product.main_image}
              alt={product.name}
              width={100}
            />
            <div>
              <h3>{product.name}</h3>
              {product.is_offer ? (
                <div className="text-lg font-bold flex justify-start gap-1 items-center">
                  {product.is_offer && (
                    <span className="absolute top-2 left-2 bg-[#c83b3b] text-white rounded-lg text-sm p-1 px-1.5 items-center">
                      %{toNumberFa(product.offer_percent as number, false)}
                    </span>
                  )}
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
              <button className="border-2 border-gray-200 p-1 rounded-lg group-hover:border-[#c83b3b]">
                <Image src={CartSvg} alt="cartvsg" width={24} />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
