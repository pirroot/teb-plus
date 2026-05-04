import {
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTwitterX,
} from 'react-icons/bs';
import { FiHash } from 'react-icons/fi';

export default function FooterDown() {
  return (
    <div className="flex justify-between gap-5 items-center ">
      <p className="flex  items-center gap-2">
        <FiHash size={25} />
        تمام حقوق مادی و معنوی برای فروشگاه تاپ لباس محفوظ بوده و هرگونه کپی
        برداری از محتوا یا قالب پیگرد قانونی دارد.
      </p>
      <div className="flex gap-3">
        <div className="p-3 bg-red-200 rounded-xl ">
          <BsLinkedin size={25} className="text-red-600" />
        </div>
        <div className="p-3 bg-red-200 rounded-xl ">
          <BsInstagram size={25} className="text-red-600" />
        </div>
        <div className="p-3 bg-red-200 rounded-xl ">
          <BsTelegram size={25} className="text-red-600" />
        </div>
        <div className="p-3 bg-red-200 rounded-xl ">
          <BsTwitterX size={25} className="text-red-600" />
        </div>
      </div>
    </div>
  );
}
