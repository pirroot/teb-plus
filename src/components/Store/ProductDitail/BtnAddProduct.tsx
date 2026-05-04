'use client';
import { toNumberFa } from '@/src/utility/toNumberFa';
import { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';

export default function BtnAddProduct() {
  const [count, setCount] = useState<number>(1);
  const [isLessBtn, setIsLessBtn] = useState<boolean>(true);

  return (
    <div className="flex  items-center justify-between">
      <div className="bg-white border border-gray-200 shadow flex gap-3 rounded items-center justify-between px-3 py-2">
        <button
          onClick={() => setCount(count + 1)}
          className="text-xl px-1 cursor-pointer"
        >
          +
        </button>
        <span className="text-md px-2">{toNumberFa(count)}</span>

        {/* <button
          disabled={() => (count => 2 ? false : true)}
          onClick={() => setCount(count - 1)}
          className="text-xl px-1 cursor-pointer disabled:text-gray-400"
        >
          -
        </button> */}
      </div>
      <button className="bg-[#c83b3b] text-white hover:drop-shadow-lg transition-shadow text-sm duration-300 hover:cursor-pointer p-3 px-4 rounded-xl flex gap-2">
        <BsCart3 size={22} />
        افزودن به سبد خرید
      </button>
    </div>
  );
}
