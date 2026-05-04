import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { IArticleDto } from '@/src/types/IArticleDto';

export default async function HomeArticles() {
  const article: IArticleDto[] = (
    await axios.get('http://localhost:3001/articles')
  ).data;

  return (
    <section className="container mx-auto my-10">
      <div className="flex justify-between max-md:justify-around pb-10">
        <h3 className="text-2xl">خواندنی‌ها</h3>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {article.map((article) => (
          <Link
            key={article.id}
            href={`/home/articles/${article.slug}`}
            className="col-span-1 border-gray-200 rounded-md border-2"
          >
            <Image
              src={article.image}
              alt={article.title}
              className="rounded-t-md"
              width={400}
              height={200}
            />
            <h3 className="text-sm py-5 text-center">{article.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
