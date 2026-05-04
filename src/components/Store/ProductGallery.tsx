'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductGallery({
  images = [],
  alt_title,
}: {
  images?: string[];
  alt_title: string;
}) {
  const [active, setActive] = useState<string>(images[0]);

  return (
    <div className="w-[400] h-auto flex gap-10">
      <div className="grid w-1/4 gap-5">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={alt_title}
            onClick={() => setActive(img)}
            width={70}
            height={70}
            className={`rounded-md cursor-pointer ${
              active === img
                ? 'border-2 border-[#c83b3b]'
                : 'border border-[#ccc]'
            }`}
          />
        ))}
      </div>
      <div className=" w-3/4 items-center">
        <Image
          src={active}
          alt={alt_title}
          width={400}
          height={200}
          className="rounded-md h-auto w-full"
        />
      </div>
    </div>
  );
}
