import PageRouter from '@/src/components/PageRouter/PageRouter';
import { IPageRouterDto } from '@/src/types/IPageRouterDto';

const routes: IPageRouterDto[] = [
  { link: 'about', title: 'درباره ما' },
];

export default function AboutPage() {
  return (
    <>
      <PageRouter routs={routes} />
      <section className="container mx-auto">
        {/* محتوای درباره ما */}
      </section>
    </>
  );
}