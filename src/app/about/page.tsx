import PageRouter from '@/src/components/PageRouter/PageRouter';
import { IPageRouterDto } from '@/src/types/IPageRouterDto';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiUsers, FiAward, FiTarget, FiHeart, FiTrendingUp, FiShield } from 'react-icons/fi';

const routes: IPageRouterDto[] = [
  { link: 'about', title: 'درباره ما' },
];

export default function AboutPage() {
  const stats = [
    { number: '۲۵+', label: 'سال تجربه', icon: FiAward },
    { number: '۴۰۰۰+', label: 'مشتری فعال', icon: FiUsers },
    { number: '۹۸٪', label: 'رضایت مشتری', icon: FiHeart },
    { number: '۵۰+', label: 'برند همکار', icon: FiTarget },
  ];

  const values = [
    { title: 'کیفیت بالا', desc: 'استفاده از بهترین مواد اولیه و برندهای معتبر', icon: FiTrendingUp },
    { title: 'اصالت ایرانی', desc: 'حمایت از تولیدکنندگان و هنرمندان داخلی', icon: FiShield },
    { title: 'رضایت مشتری', desc: 'اولویت اول ما لبخند رضایت شماست', icon: FiHeart },
  ];

  return (
    <>
      <PageRouter routs={routes} />
      <section className="container mx-auto px-4 py-10 space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            درباره ما
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            لباسینو، جایی که مد ایرانی با کیفیت جهانی رو به هم می‌رسونه
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">داستان لباسینو</h2>
            <p className="text-gray-600 leading-8">
              لباسینو در سال ۱۳۷۸ با هدف ارائه محصولات باکیفیت و برندهای خلاق ایرانی شروع به کار کرد.
              امروز با بیش از دو دهه تجربه، به یکی از معتبرترین فروشگاه‌های آنلاین کشور تبدیل شده‌ایم.
            </p>
            <p className="text-gray-600 leading-8">
              ما به هنر و خلاقیت طراحان ایرانی ایمان داریم و سعی می‌کنیم بهترین‌ها رو به شما ارائه بدیم.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 text-center">
            <span className="text-8xl">👕</span>
            <p className="text-sm text-gray-500 mt-2">هر لباس، یک داستان</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <stat.icon size={28} className="mx-auto text-purple-500 mb-2" />
              <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">ارزش‌های ما</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 transition-all hover:shadow-lg">
                <item.icon size={24} className="text-purple-500 mb-3" />
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}