import Image from 'next/image';
import PageRouter from '@/src/components/PageRouter/PageRouter';
import { IProductDto } from '@/src/types/IProductDto';
import { IPageRouterDto } from '@/src/types/IPageRouterDto';
import { toNumberFa } from '@/src/utils/toNumberFa';
import ProductGallery from '@/src/components/Store/ProductGallery';
import TomanSvg from '@/public/svg/toman.svg';
import { setProductOffer } from '@/src/utils/setProductOffer';
import BtnAddProduct from '@/src/components/Store/ProductDitail/BtnAddProduct';
import ProductOrderTracking from '@/src/components/Store/ProductDitail/ProductOrderTracking';
import { HiOutlineChatBubbleLeftEllipsis, HiOutlineStar } from 'react-icons/hi2';
import { FiPackage, FiTag, FiHash } from 'react-icons/fi';

export default async function ProductDetail(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const res = await fetch(`http://localhost:3001/products/?slug=${slug}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  const product: IProductDto = data[0];

  const finalPrice = product.is_offer
    ? setProductOffer(product.price, product.offer_percent as number)
    : product.price;

  const routes: IPageRouterDto[] = [
    { link: '/store', title: 'فروشگاه' },
    { link: `/store/${slug}`, title: product.name },
  ];

  return (
    <>
      <PageRouter routs={routes} />

      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-8">
            <div className="grid grid-cols-5 gap-8">
              <div className="col-span-2">
                <ProductGallery images={product.images} alt_title={product.name} />
              </div>

              <div className="col-span-3 flex flex-col gap-5 text-right">
                <div>
                  <h1 className="text-xl font-bold text-gray-900 leading-8">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="flex items-center gap-1.5 text-sm text-gray-500">
                      <HiOutlineStar size={16} className="text-amber-400" />
                      بدون امتیاز
                    </span>
                    <span className="w-px h-4 bg-gray-200" />
                    <span className="flex items-center gap-1.5 text-sm text-gray-500">
                      <HiOutlineChatBubbleLeftEllipsis size={16} />
                      ۰ دیدگاه
                    </span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-7 text-justify">
                  {product.description}
                </p>

                <hr className="border-gray-100" />

                <div>
                  <h3 className="text-sm font-bold text-[#c83b3b] mb-3">
                    ویژگی‌های محصول
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex flex-col bg-gray-50 rounded-xl px-4 py-3 border border-gray-100"
                      >
                        <span className="text-xs text-gray-400 mb-1">
                          {feature.title}
                        </span>
                        <span className="text-sm font-semibold text-gray-800">
                          {feature.value.join('، ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4 text-right">
              <MetaRow icon={<FiHash size={15} />} label="شناسه محصول" value={product.id_product} />
              <MetaRow icon={<FiTag size={15} />} label="دسته‌بندی" value={product.category.name} />
              <MetaRow icon={<FiPackage size={15} />} label="برند" value={product.model_name} />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4 text-right">
              {product.is_offer && (
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-red-50 text-[#c83b3b] font-bold px-3 py-1 rounded-full">
                    {toNumberFa(product.offer_percent as number, false)}٪ تخفیف
                  </span>
                  <span className="text-sm line-through text-gray-400">
                    {toNumberFa(product.price)}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">قیمت نهایی</span>
                <span className="flex items-center gap-1.5 text-2xl font-extrabold text-gray-900">
                  {toNumberFa(finalPrice)}
                  <Image src={TomanSvg} alt="تومان" width={20} height={20} />
                </span>
              </div>

              <BtnAddProduct />
            </div>
          </div>
        </div>

        <ProductOrderTracking />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-base font-bold text-gray-800 mb-4">دیدگاه‌ها</h2>
          <p className="text-sm text-gray-400 text-center py-8">
            هنوز دیدگاهی ثبت نشده است.
          </p>
        </div>
      </div>
    </>
  );
}

function MetaRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="flex items-center gap-1.5 text-sm text-gray-500">
        <span className="text-[#c83b3b]">{icon}</span>
        {label}
      </span>
      <span className="text-sm font-semibold text-gray-700">{value}</span>
    </div>
  );
}