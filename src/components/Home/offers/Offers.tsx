import { IProductDto } from '@/src/types/IProductDto';
import OffersCarousel from './OffersCarousel';

export default async function Offers() {
  const res = await fetch('http://localhost:3001/products', {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  const data: IProductDto[] = await res.json();
  const offerProducts = data.filter((p) => p.is_offer);

  return (
    <section className="container mx-auto my-8">
      <div className="p-5 rounded-3xl bg-[#c83b3b]">
        <h2 className="text-center text-3xl text-white font-bold mb-6">
          پیشنهاد شگفت‌انگیز
        </h2>
        <OffersCarousel products={offerProducts} />
      </div>
    </section>
  );
}