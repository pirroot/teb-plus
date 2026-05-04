import OfferCart from '@/src/components/Home/offers/OfferCart';
import { IProductDto } from '@/src/types/IProductDto';
import axios from 'axios';

export default async function Offers() {
  const products: IProductDto = await axios.get(
    'http://localhost:3001/products'
  );

  return (
    <section className="container mx-auto">
      <div className="embla_offers p-5 rounded-3xl bg-[#c83b3b] ">
        <div className="embla_container_offers">
          <div className="items-center px-10">
            <h2 className="text-center text-3xl">پیشنهاد شکفت انگیز</h2>
          </div>
          {products.data.map((product: IProductDto) => (
            <OfferCart key={product.id} {...(product as IProductDto)} />
          ))}
        </div>
      </div>
    </section>
  );
}
