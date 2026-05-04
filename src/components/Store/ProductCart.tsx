import Link from 'next/link';
import Image from 'next/image';
import { IProductDto } from '@/src/types/IProductDto';
import { setProductOffer } from '@/src/utility/setProductOffer';
import { toNumberFa } from '@/src/utility/toNumberFa';
import TomanSvg from '@/assets/svg/toman.svg';

export default function ProductCart({
  name,
  slug,
  price,
  images,
  offer_percent,
  is_offer,
  category,
}: IProductDto) {
  return (
    <Link
      href={`/store/${slug}`}
      className="col-span-1 relative bg-white rounded-lg p-5 space-y-3 border-2 items-center border-gray-200 text-center transition-all duration-300  hover:-translate-y-1 hover:border-[#c83b3b] group"
    >
      <div className="relative">
        {is_offer && (
          <span className="absolute top-1 left-1 bg-[#c83b3b] text-white rounded-lg py-0.5 px-1.5 items-center">
            %{toNumberFa(offer_percent as number, false)}
          </span>
        )}
        <Image
          className={'rounded-lg mx-auto'}
          src={images[0]}
          alt={name}
          width={270}
          height={250}
          quality={100}
        />
      </div>
      <h3 className={'text-lg'}>{name}</h3>
      <span className="text-gray-400">{category.name}</span>
      <div>
        {is_offer ? (
          <div className="text-lg font-bold flex gap-1 items-center justify-center">
            <span className="text-sm line-through text-gray-400 px-2">
              {toNumberFa(price)}
            </span>
            {toNumberFa(setProductOffer(price, offer_percent as number))}{' '}
            <Image src={TomanSvg} alt="logo" width={18} />
          </div>
        ) : (
          <span className="text-md flex gap-2 justify-center">
            {toNumberFa(price)}
            <Image src={TomanSvg} alt="logo" width={16} />
          </span>
        )}
      </div>
      {/* <button className="absolute left-0 right-0 mx-auto text-sm font-light  text-white bg-[#c83b3b] rounded-t-2xl w-3/4 py-2  bottom-0 hidden group-hover:flex justify-center gap-2 itmes-center">
        افزودن به سبد 
        <FiShoppingCart size={20} />
      </button> */}
    </Link>
  );
}
