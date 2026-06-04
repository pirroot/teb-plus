import Image from 'next/image';
import { IProductDto } from '@/src/types/IProductDto';
import { setProductOffer } from '@/src/utils/setProductOffer';
import { toNumberFa } from '@/src/utils/toNumberFa';
import TomanSvg from '@/public/svg/toman.svg';

export default function OfferCart({
  images,
  name,
  price,
  offer_percent,
  is_offer,
  category,
}: IProductDto) {
  const discountedPrice = setProductOffer(price, offer_percent as number);

  return (
    <div className="bg-white rounded-xl p-3 space-y-2 h-full flex flex-col">
      {/* Image + badge */}
      <div className="relative">
        {is_offer && offer_percent && (
          <span className="absolute top-2 right-2 z-10 bg-[#c83b3b] text-white text-xs font-bold rounded-full px-2 py-0.5">
            {toNumberFa(offer_percent, false)}٪
          </span>
        )}
        <Image
          src={images[0]}
          alt={name}
          width={260}
          height={240}
          quality={90}
          className="rounded-lg mx-auto object-cover w-full aspect-square"
        />
      </div>

      {/* Name */}
      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 text-right">
        {name}
      </h3>

      {/* Category */}
      <span className="text-xs text-gray-400 text-right">{category.name}</span>

      {/* Price — pushes to bottom */}
      <div className="mt-auto pt-2 flex flex-col items-end gap-0.5">
        {is_offer ? (
          <>
            <span className="text-xs line-through text-gray-400">
              {toNumberFa(price)}
            </span>
            <span className="text-base font-bold text-[#c83b3b] flex items-center gap-1">
              {toNumberFa(discountedPrice)}
              <Image src={TomanSvg} alt="تومان" width={16} height={16} />
            </span>
          </>
        ) : (
          <span className="text-base font-semibold text-gray-800 flex items-center gap-1">
            {toNumberFa(price)}
            <Image src={TomanSvg} alt="تومان" width={16} height={16} />
          </span>
        )}
      </div>
    </div>
  );
}