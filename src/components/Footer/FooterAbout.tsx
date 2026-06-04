import Logo from '@/public/svg/logo-white.svg';
import Image from 'next/image';
import { BsTelephone } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

export default function FooterAbout() {
  return (
    <div className="col-span-5 space-y-4">
      <Image src={Logo} alt="لوگو لباسینو" width={200} />
      <p className="text-justify text-sm leading-7 text-gray-300">
        لباسینو، مرجع تخصصی خرید لباس‌های برندهای خلاق ایرانی، جایی است که هنر و مد به هم
        می‌رسند. این فروشگاه با ارائه محصولات برندهای داخلی، فرصتی برای کشف استایل‌های
        منحصربه‌فرد و همراهی با ترندهای روز دنیا ایجاد کرده است. از لباس‌های روزمره تا
        طرح‌های خاص، هر قطعه در لباسینو روایتی از خلاقیت و اصالت ایرانی است.
      </p>
      <hr className="border-gray-600" />
      <div className="space-y-1">
        <span className="text-gray-400 text-sm">آدرس فروشگاه</span>
        <p className="flex gap-2 items-start text-sm">
          <FiMapPin size={18} className="mt-0.5 shrink-0" />
          تهران، خیابان نوفل لوشاتو، خیابان هانری کوربن، کوچه بابک، پلاک ۳۵
        </p>
      </div>
      <div className="space-y-1">
        <span className="text-gray-400 text-sm">شماره تماس</span>
        <p className="flex gap-2 items-center text-sm">
          <BsTelephone size={18} className="shrink-0" />
          021-44556677 | 021-44556688
        </p>
      </div>
    </div>
  );
}