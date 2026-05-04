import Link from 'next/link';
import { toNumberFa } from '@/src/utility/toNumberFa';

export default function Pagination() {
  return (
    <div className="flex justify-center my-10 mb-20">
      <Link
        href={'/'}
        className="border-2 border-gray-400 hover:bg-red-700 hover:text-white hover:border-red-700 text-xl rounded-lg p-2 px-5 text-gray-400 transition-colors"
      >
        {toNumberFa(1)}
      </Link>
    </div>
  );
}
