import PageRouter from '@/src/components/PageRouter/PageRouter';
import { IPageRouterDto } from '@/src/types/IPageRouterDto';

export default function page() {
  const routes: IPageRouterDto[] = [{ link: 'login', title: 'ورود به سایت' }];

  return (
    <>
      <PageRouter routs={routes} />
      <div className="container mx-auto flex justify-center">
        <div className=" w-1/3 p-7 bg-white shadow rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          voluptate perspiciatis earum illo repellat tempore inventore aliquid
          quibusdam libero iste, excepturi saepe porro, eveniet vel aut quis
          accusamus eligendi ipsum.
        </div>
      </div>
    </>
  );
}
