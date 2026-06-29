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
      <div className="grid grid-cols-12 gap-8 bg-gradient-to-br from-[#1a1f2e] via-[#242b3d] to-[#2a3247] p-10 rounded-3xl mb-3 text-white shadow-2xl shadow-purple-900/20 border border-white/5">
        <FooterAbout />

        <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-4">
          <div className="p-4 bg-white/5 backdrop-blur-sm rounded-2xl text-justify font-bold leading-7 border border-white/5 transition-all duration-300 hover:bg-white/10 shadow-lg shadow-black/20">
            بیش از <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500 text-xl">{toNumberFa(25)}</span> سال در کنار شما هستیم…
          </div>
          <div className="p-4 bg-white/5 backdrop-blur-sm rounded-2xl text-justify font-bold leading-7 border border-white/5 transition-all duration-300 hover:bg-white/10 shadow-lg shadow-black/20">
            بیش از{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-2xl">{toNumberFa(4000)}</span>{' '}
            نفر مشتری فعال در سراسر کشور…
          </div>
          <div className="flex gap-4 justify-around pt-1">
            <div className="rounded-2xl bg-white/10 p-2.5 backdrop-blur-sm border border-white/10 shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:bg-white/15">
              <Image
                src={MelatImg}
                alt="درگاه بانک ملت"
                width={90}
                className="rounded-xl"
              />
            </div>
            <div className="rounded-2xl bg-white/10 p-2.5 backdrop-blur-sm border border-white/10 shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:bg-white/15">
              <Image
                src={ENamadImg}
                alt="نماد اعتماد الکترونیکی"
                width={90}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        <FooterLink />
      </div>
      <FooterDown />
    </footer>
  );
}