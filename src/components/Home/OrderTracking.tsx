import { AiOutlineHistory } from 'react-icons/ai';
import { FiShield } from 'react-icons/fi';
import { BsTruck } from 'react-icons/bs';
import { HiOutlineCreditCard } from 'react-icons/hi2';

export default function OrderTracking() {
  return (
    <section className="container mx-auto text-center my-20">
      <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
        <div className="bg-white col-span-1 shadow group p-7 border border-gray-100 rounded-xl flex gap-5 items-center">
          <span className="p-5 rounded-xl bg-[#C83B3B1A] group-hover:scale-110 transition-transform duration-300">
            <HiOutlineCreditCard size={35} className="text-red-700" />
          </span>
          <div className="text-right space-y-2">
            <h5 className="text-xl font-bold text-gray-600">پرداخت آنلاین</h5>
            <p className="text-sm text-gray-400">
              پرداخت امن توسط درگاه به پرداخت ملت، زرین پال و آسان پرداخت
            </p>
          </div>
        </div>

        <div className="bg-white col-span-1 shadow group p-7 border border-gray-100 rounded-xl flex gap-5 items-center">
          <span className="p-5 rounded-xl bg-[#C83B3B1A] group-hover:scale-110 transition-transform duration-300">
            <BsTruck size={35} className="text-red-700" />
          </span>
          <div className="text-right space-y-2">
            <h5 className="text-xl font-bold text-gray-600">
              ارسال سریع و رایگان
            </h5>
            <p className="text-sm text-gray-400">
              ارسال رایگان توسط پست در سریعترین زمان ممکن به سراسر ایران
            </p>
          </div>
        </div>

        <div className="bg-white col-span-1 shadow group p-7 border border-gray-100 rounded-xl flex gap-5 items-center">
          <span className="p-5 rounded-xl bg-[#C83B3B1A] group-hover:scale-110 transition-transform duration-300">
            <FiShield size={35} className="text-red-700" />
          </span>
          <div className="text-right space-y-2">
            <h5 className="text-xl font-bold text-gray-600">
              تضمین کیفیت محصول
            </h5>
            <p className="text-sm text-gray-400">
              با افتخار ساخته شده با هنر دست بچه‌های ایران
            </p>
          </div>
        </div>

        <div className="bg-white col-span-1 shadow group p-7 border border-gray-100 rounded-xl flex gap-5 items-center">
          <span className="p-5 rounded-xl bg-[#C83B3B1A] group-hover:scale-110 transition-transform duration-300">
            <AiOutlineHistory size={35} className="text-red-700" />
          </span>
          <div className="text-right space-y-2">
            <h5 className="text-xl font-bold text-gray-600">
              ضمانت بازگشت وجه
            </h5>
            <p className="text-sm text-gray-400">
              در صورت عدم رضایت از محصول تا 24 ساعت پس از تحویل
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
