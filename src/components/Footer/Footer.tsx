import Image from 'next/image';
import { toNumberFa } from '@/src/utils/toNumberFa';
import ENamadImg from '@/public/images/enamad_icon_text_color_blue_1024.png';
import MelatImg from '@/public/images/Behpardakht-Mellat-Logo-PNG-Way2pay-99-05-26-2.png';
import FooterDown from './FooterDown';
import FooterLink from './FooterLink';
import FooterAbout from './FooterAbout';

export default function Footer() {
  return (
    <footer className="pb-5 container mx-auto mt-10">
      <div className="grid grid-cols-12 gap-8 bg-[#242b3d] p-10 rounded-xl mb-3 text-white">
        <FooterAbout />

        <div className="col-span-3 space-y-4">
          <div className="p-4 bg-black/25 rounded-xl text-justify font-bold leading-7">
            بیش از <span className="text-red-400">{toNumberFa(25)}</span> سال در کنار شما هستیم…
          </div>
          <div className="p-4 bg-black/25 rounded-xl text-justify font-bold leading-7">
            بیش از{' '}
            <span className="text-red-400 text-xl">{toNumberFa(4000)}</span>{' '}
            نفر مشتری فعال در سراسر کشور…
          </div>
          <div className="flex gap-4 justify-around pt-1">
            <Image
              src={MelatImg}
              alt="درگاه بانک ملت"
              width={90}
              className="rounded-xl bg-gray-600 p-2"
            />
            <Image
              src={ENamadImg}
              alt="نماد اعتماد الکترونیکی"
              width={90}
              className="rounded-xl bg-gray-600 p-2"
            />
          </div>
        </div>

        <FooterLink />
      </div>
      <FooterDown />
    </footer>
  );
}