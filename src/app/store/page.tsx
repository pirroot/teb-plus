import PageRouter from '@/src/components/PageRouter/PageRouter';
import StoreFilters from '@/src/components/Store/StoreFilters';
import StoreSort from '@/src/components/Store/StoreSort';
import Pagination from '@/src/components/Store/Pagination';
import ProductCart from '@/src/components/Store/ProductCart';
import { IPageRouterDto } from '@/src/types/IPageRouterDto';
import { IProductDto } from '@/src/types/IProductDto';

export default async function Store() {
  const routes: IPageRouterDto[] = [{ link: 'store', title: 'فروشگاه' }];

  const res = await fetch('http://localhost:3001/products', {
    next: { revalidate: 60 },
  });
  const products: IProductDto[] = await res.json();

  return (
    <>
      <PageRouter routs={routes} />
      <section className="container mx-auto my-8 px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">فروشگاه</h1>
            <p className="text-sm text-gray-500 mt-1">
              {toFa(products.length)} محصول یافت شد
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <StoreFilters />

          <div className="col-span-9 flex flex-col gap-5">
            <StoreSort />
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCart key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>

        <Pagination totalPages={Math.ceil(products.length / 12)} />
      </section>
    </>
  );
}

function toFa(n: number) {
  return n.toLocaleString('fa-IR');
}