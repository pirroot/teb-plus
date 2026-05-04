import { AiOutlineHistory } from 'react-icons/ai';
import { FiShield } from 'react-icons/fi';
import { BsTruck } from 'react-icons/bs';
import { HiOutlineCreditCard } from 'react-icons/hi2';

export default function ProductOrderTracking() {
  return (
    <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
      <div className="bg-white col-span-1 shadow group p-7 border border-gray-100 rounded-xl flex gap-5 items-center hover:border-red-500 cursor-pointer transition-colors duration-300">
        <span className="p-5 rounded-xl bg-[#C83B3B1A]">
          <HiOutlineCreditCard size={35} className="text-red-700" />
        </span>
        <div className="text-right space-y-2">
          <h5 className="text-lg text-gray-800">پرداخت آنلاین</h5>
          <p className="text-sm text-gray-500">
            پرداخت امن توسط درگاه به پرداخت ملت، زرین پال و آسان پرداخت
          </p>
        </div>
      </div>

      <div className="bg-white col-span-1 shadow group p-7 border border-gray-100 rounded-xl flex gap-5 items-center hover:border-red-500 cursor-pointer transition-colors duration-300">
        <span className="p-5 rounded-xl bg-[#C83B3B1A]">
          <BsTruck size={35} className="text-red-700" />
        </span>
        <div className="text-right space-y-2">
          <h5 className="text-lg text-gray-800">ارسال سریع و رایگان</h5>
          <p className="text-sm text-gray-500">
            ارسال رایگان توسط پست در سریعترین زمان ممکن به سراسر ایران
          </p>
        </div>
      </div>

      <div className="bg-white col-span-1 shadow group p-7 border border-gray-100 rounded-xl flex gap-5 items-center hover:border-red-500 cursor-pointer transition-colors duration-300">
        <span className="p-5 rounded-xl bg-[#C83B3B1A]">
          <FiShield size={35} className="text-red-700" />
        </span>
        <div className="text-right space-y-2">
          <h5 className="text-lg text-gray-800">تضمین کیفیت محصول</h5>
          <p className="text-sm text-gray-500">
            با افتخار ساخته شده با هنر دست بچه‌های ایران
          </p>
        </div>
      </div>

      <div className="bg-white col-span-1 shadow group p-7 border border-gray-100 rounded-xl flex gap-5 items-center hover:border-red-500 cursor-pointer transition-colors duration-300">
        <span className="p-5 rounded-xl bg-[#C83B3B1A]">
          <AiOutlineHistory size={35} className="text-red-700" />
        </span>
        <div className="text-right space-y-2">
          <h5 className="text-lg text-gray-800">ضمانت بازگشت وجه</h5>
          <p className="text-sm text-gray-500">
            در صورت عدم رضایت از محصول تا 24 ساعت پس از تحویل
          </p>
        </div>
      </div>
    </div>
  );
}
