import Link from 'next/link';
import {
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTwitterX,
} from 'react-icons/bs';
import { FiHash } from 'react-icons/fi';

const socials = [
  { icon: BsLinkedin, href: 'https://linkedin.com', label: 'لینکدین' },
  { icon: BsInstagram, href: 'https://instagram.com', label: 'اینستاگرام' },
  { icon: BsTelegram, href: 'https://t.me', label: 'تلگرام' },
  { icon: BsTwitterX, href: 'https://x.com', label: 'توییتر' },
];

export default function FooterDown() {
  return (
    <div className="flex justify-between gap-5 items-center flex-wrap py-2">
      <p className="flex items-center gap-2 text-sm text-gray-600">
        <FiHash size={22} />
        تمام حقوق مادی و معنوی برای فروشگاه لباسینو محفوظ بوده و هرگونه کپی‌برداری پیگرد قانونی دارد.
      </p>
      <div className="flex gap-3">
        {socials.map(({ icon: Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-red-100 hover:bg-red-200 rounded-xl transition-colors"
          >
            <Icon size={22} className="text-red-600" />
          </Link>
        ))}
      </div>
    </div >
  );
}