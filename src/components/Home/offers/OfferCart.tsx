import Image from 'next/image';
import { IProductDto } from '@/src/types/IProductDto';
import { setProductOffer } from '@/src/utility/setProductOffer';
import { toNumberFa } from '@/src/utility/toNumberFa';
import TomanSvg from '@/assets/svg/toman.svg';

export default function OfferCart({
  main_image,
  name,
  price,
  offer_percent,
  is_offer,
  category,
}: IProductDto) {
  return (
    <div className="embla_slide_offers bg-white rounded-md p-2 space-y-2">
      <div className="relative">
        {is_offer && (
          <span className="absolute top-2 left-4 bg-red-700 text-white rounded-xl p-1 px-1.5 items-center ">
            {toNumberFa(offer_percent as number, false)}%
          </span>
        )}
        <Image
          className={'rounded-md mx-auto'}
          src={main_image}
          alt={name}
          width={270}
          height={250}
          quality={100}
        />
      </div>
      <h3 className={'text-xl'}>{name}</h3>
      <span>{category.name}</span>
      {is_offer ? (
        <div className="flex items-center justify-end">
          <span className="text-sm line-through text-gray-500 px-2">
            {toNumberFa(price)}
          </span>
          <span className="text-lg font-bold flex gap-1">
            {toNumberFa(setProductOffer(price, offer_percent as number))}{' '}
            <Image src={TomanSvg} alt="logo" width={18} />
          </span>
        </div>
      ) : (
        <span className="text-md flex gap-2">
          {toNumberFa(price)}
          <Image src={TomanSvg} alt="logo" width={44} />
        </span>
      )}
    </div>
  );
}
