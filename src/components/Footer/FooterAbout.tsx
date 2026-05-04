import Logo from '@/assets/svg/logo-white.svg';
import Image from 'next/image';
import { BsTelephone } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

export default function FooterAbout() {
  return (
    <div className="col-span-4 space-y-5">
      <Image src={Logo} alt="footer logo" width={200} />
      <p className="text-justify text-sm">
        لباسینو، مرجع تخصصی خرید لباس‌های برندهای خلاق ایرانی، جایی است که هنر و
        مد به هم می‌رسند. این فروشگاه با ارائه محصولات برندهای داخلی، فرصتی برای
        کشف استایل‌های منحصربه‌فرد و همراهی با ترندهای روز دنیا ایجاد کرده است.
        از لباس‌های روزمره تا طرح‌های خاص، هر قطعه در لباسینو روایتی از خلاقیت و
        اصالت ایرانی است.
      </p>
      <hr className="text-gray-400" />
      <div className="text-justify">
        <span className="text-gray-400 ">آدرس فروشگاه : </span>
        <p className="flex gap-2 pt-2">
          <FiMapPin size={22} />
          تهران، خیابان نوفل لوشاتو، خیابان هانری کوربن، کوچه بابک، پلاک 35
        </p>
      </div>
      <div className="text-justify">
        <span className="text-gray-400">شماره تماس : </span>
        <p className="flex gap-2 pt-2 ">
          <BsTelephone size={22} />
          021-445566770 | 021-445566770{}
        </p>
      </div>
    </div>
  );
}
