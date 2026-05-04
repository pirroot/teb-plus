import Image from 'next/image';
import axios from 'axios';
import PageRouter from '@/src/components/PageRouter/PageRouter';
import { IProductDto } from '@/src/types/IProductDto';
import { IPageRouterDto } from '@/src/types/IPageRouterDto';
import { toNumberFa } from '@/src/utility/toNumberFa';
import ProductGallery from '@/src/components/Store/ProductGallery';
import TomanSvg from '@/assets/svg/toman.svg';
import { setProductOffer } from '@/src/utility/setProductOffer';
import BtnAddProduct from '@/src/components/Store/ProductDitail/BtnAddProduct';
import ProductOrderTracking from '@/src/components/Store/ProductDitail/ProductOrderTracking';
import {
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineStar,
} from 'react-icons/hi2';

export default async function ProductDetail(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const result = await axios(`http://localhost:3001/products/?slug=${slug}`);
  const product: IProductDto = result.data[0];
  const routes: IPageRouterDto[] = [
    { link: '/store', title: 'فروشگاه' },
    { link: slug, title: 'test' },
  ];

  return (
    <>
      <PageRouter routs={routes} />
      <div className="container mx-auto space-y-10">
        <div className=" grid grid-cols-12 gap-5">
          <div className="col-span-9 p-7 bg-white shadow rounded-lg">
            <div className="grid grid-cols-5 gap-10">
              <div className="col-span-2">
                <ProductGallery
                  images={product.images}
                  alt_title={product.name}
                />
              </div>
              <div className="col-span-3">
                <div className="flex justify-between">
                  <h1 className="text-xl">{product.name}</h1>
                </div>
                <p className="text-gray-500 mt-5 text-justify">
                  شم{product.description}
                </p>
                <hr className="text-gray-300 my-10" />
                <h3 className="text-red-700 mb-3">برخی ویژگی های محصول :</h3>
                <div className="flex gap-5">
                  <div className="w-3/4">
                    <div className="border border-gray-300 p-3 rounded-md grid grid-cols-2 gap-5">
                      {product.features.map((feature, index) => (
                        <div key={index} className="col-span-1">
                          <span className="text-gray-900 font-black text-sm">
                            {feature.title}
                            {' : '}
                          </span>
                          <span className="text-gray-500">
                            {feature.value.join(', ')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-1/4 text-gray-800">
                    <div className="bg-gray-300 rounded-lg text-sm font-thin p-5 space-y-5">
                      <div className="flex gap-3">
                        <HiOutlineStar size={22} className="" />
                        <span className="border-l py-3"></span>
                        بدون امتیاز
                      </div>
                      <div className="flex gap-3">
                        <HiOutlineChatBubbleLeftEllipsis size={22} />
                        <span className="border-l py-3"></span>
                        دیدگاه 0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 p-7 bg-white shadow rounded-lg space-y-5 text-md ">
            <div className="flex justify-between gap-5 items-center ">
              <span>شناسه محصول : </span>
              <span className="text-gray-600">{product.id_product}</span>
            </div>
            <div className="flex justify-between gap-5 items-center">
              <span>دسته :</span>
              <span className="text-gray-600">{product.category.name}</span>
            </div>
            <div className="flex justify-between gap-5 items-center">
              <span>برند :</span>
              <span className="text-gray-600">{product.model_name}</span>
            </div>
            <hr className="text-gray-300 my-5" />
            <h3 className="text-lg flex justify-between">
              قیمت کل:{' '}
              <span className="flex gap-2 text-2xl text-red-700 font-bold">
                {toNumberFa(
                  product.is_offer
                    ? setProductOffer(
                        product.price,
                        product.offer_percent as number
                      )
                    : product.price
                )}
                <Image src={TomanSvg} alt="تومان svg" width={20} />
              </span>
            </h3>
            <del className="flex justify-end text-xl text-gray-400">
              <bdi className="">
                {product.is_offer && toNumberFa(product.price)}
              </bdi>
            </del>
            <BtnAddProduct />
          </div>
        </div>
        <ProductOrderTracking />
        <div className="col-span-3 p-7 bg-white shadow rounded-lg space-y-5 text-md ">
          fdsfd
        </div>
      </div>
    </>
  );
}
