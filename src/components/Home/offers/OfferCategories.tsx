import Link from "next/link";
import CategoryImage1 from '@/assets/images/categories/1.png'
import CategoryImage2 from '@/assets/images/categories/2.png';
import CategoryImage3 from '@/assets/images/categories/3.png';
import Image from "next/image";

export default function OfferCategories() {
  return (
    <section className="container mx-auto grid grid-cols-12 gap-10 mt-40">
      <div className="col-span-4 bg-[#242B3D] rounded-3xl shadow-2xl flex justify-between items-center gap-1 pr-5 relative overflow-visible h-[75%]">
        <div className="text-white space-y-5 -mt-10">
          <button className="bg-red-500 p-2 rounded-lg text-lg">
            تا ۳۵٪ تخفیف
          </button>
          <h4 className="text-3xl font-bold">پوشاک بچه گانه</h4>
          <Link href="/" className="text-md">
            مشاهده محصولات
          </Link>
        </div>

        <Image
          src={CategoryImage1}
          alt="s"
          width={200}
          height={274}
          className="absolute  -top-10 img-category"
        />
      </div>

      <div className="col-span-4 bg-[#242B3D] rounded-3xl shadow-2xl flex justify-between items-center gap-1 pr-5 relative overflow-visible h-[75%]">
        <div className="text-white space-y-5 -mt-10">
          <button className="bg-red-500 p-2 rounded-lg text-lg">
            تا ۳۵٪ تخفیف
          </button>
          <h4 className="text-3xl font-bold">پوشاک مردانه</h4>
          <Link href="/" className="text-md">
            مشاهده محصولات
          </Link>
        </div>

        <Image
          src={CategoryImage2}
          alt="s"
          width={280}
          height={274}
          className="absolute  -top-10 img-category"
        />
      </div>
      <div className="col-span-4 bg-[#242B3D] rounded-3xl shadow-2xl flex justify-between items-center gap-1 pr-5 relative overflow-visible h-[75%]">
        <div className="text-white space-y-5 -mt-10">
          <button className="bg-red-500 p-2 rounded-lg text-lg">
            تا ۳۵٪ تخفیف
          </button>
          <h4 className="text-3xl font-bold">پوشاک زنانه</h4>
          <Link href="/" className="text-md">
            مشاهده محصولات
          </Link>
        </div>

        <Image
          src={CategoryImage3}
          alt="s"
          width={280}
          height={274}
          className="absolute  -top-10 img-category"
        />
      </div>
    </section>
  );
}
