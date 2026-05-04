import PageRouter from '@/src/components/PageRouter/PageRouter';
import StoreFilters from '@/src/components/Store/StoreFilters';
import StoreStore from '@/src/components/Store/StoreSort';
import { IPageRouterDto } from '@/src/types/IPageRouterDto';
import { IProductDto } from '@/src/types/IProductDto';
import ProductCart from '@/src/components/Store/ProductCart';
import Pagination from '@/src/components/Store/Pagination';
import axios from 'axios';

export default async function Store() {
  const routes: IPageRouterDto[] = [{ link: 'store', title: 'فروشگاه' }];
  const result = await axios('http://localhost:3001/products');
  const products: IProductDto[] = result.data;

  return (
    <>
      <PageRouter routs={routes} />
      <section className="container mx-auto my-10">
        <div className="flex gap-10 justify-between items-center">
          <h1 className="text-3xl">فروشگاه</h1>
        </div>

        <div className="grid grid-cols-12 gap-10 pt-10">
          <StoreFilters />
          <div className="col-span-9">
            <StoreStore />
            <div className="grid grid-cols-4 gap-5 pt-3">
              {products.map((product: IProductDto) => (
                <ProductCart key={product.id} {...(product as IProductDto)} />
              ))}
            </div>
          </div>
        </div>
        <Pagination />
      </section>
    </>
  );
}
