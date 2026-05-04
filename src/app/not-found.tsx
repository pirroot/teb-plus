import Image from 'next/image';
import image404 from '@/assets/images/404.png';
import PageRouter from '../components/PageRouter/PageRouter';
import { IPageRouterDto } from '../types/IPageRouterDto';
export default function NotFound() {
  const routes: IPageRouterDto[] = [{ link: '404', title: 'صفحه یافت نشد' }];

  return (
    <>
      <PageRouter routs={routes} />
      <section className="space-y-10 container mx-auto my-20 text-center items-center">
        <Image
          src={image404}
          alt="not found page - image"
          className="mx-auto"
        />
        <h1 className="text-3xl">صفحه مورد نظر یافت نشد.</h1>
        <p>ممکن است این صفحه وجود نداشته باشد یا حذف شده باشد.</p>
      </section>
    </>
  );
}
