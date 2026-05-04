import PageRouter from '@/src/components/PageRouter/PageRouter';
import { IPageRouterDto } from '@/src/types/IPageRouterDto';

export default function page() {
  const routes: IPageRouterDto[] = [{ link: 'about', title: 'درباره ما' }];

  return (
    <>
      <PageRouter routs={routes} />
      <section className="container mx-auto"></section>;
    </>
  );
}
