import Image from 'next/image';
import { toNumberFa } from '@/src/utility/toNumberFa';
import ENamadImg from '@/assets/images/enamad_icon_text_color_blue_1024.png';
import MelatImg from '@/assets/images/Behpardakht-Mellat-Logo-PNG-Way2pay-99-05-26-2.png';
import FooterDown from './FooterDown';
import FooterLink from './FooterLink';
import FooterAbout from './FooterAbout';

export default function Footer() {
  return (
    <footer className="text-center pb-5 container mx-auto mt-10">
      <div className="grid grid-cols-10 gap-20 bg-[#242b3d] p-10 rounded-xl mb-3 text-white">
        <FooterAbout />
        <div className="col-span-2 space-y-5">
          <div className="p-5 bg-[#00000040] rounded-xl text-justify font-bold">
            بیش از <span className="text-red-500">{toNumberFa(25)}</span>{' '}
            ســـــــال در کنار شما هستیــــــــــم…
          </div>
          <div className="p-5 bg-[#00000040] rounded-xl text-justify font-bold">
            بیش از{' '}
            <span className="text-red-500 text-xl"> {toNumberFa(4000)} </span>
            نفر مشتری فعال در سراسر کشور…
          </div>
          <div className="flex gap-5 justify-around">
            <Image
              src={MelatImg}
              alt="namad"
              width={100}
              className="rounded-xl bg-gray-600 p-2"
            />
            <Image
              src={ENamadImg}
              alt="namad"
              width={100}
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
