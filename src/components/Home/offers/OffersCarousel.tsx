'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import OfferCart from './OfferCart';
import { IProductDto } from '@/src/types/IProductDto';

interface Props {
  products: IProductDto[];
}

export default function OffersCarousel({ products }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!viewportRef.current) return;

    const autoplay = Autoplay({ delay: 3500, stopOnInteraction: true });

    const instance = EmblaCarousel(
      viewportRef.current,
      {
        align: 'start',
        direction: 'rtl',
        slidesToScroll: 1,
      },
      [autoplay]
    );

    instance.on('select', () => onSelect(instance));
    instance.on('init', () => onSelect(instance));
    setEmbla(instance);

    return () => {
      instance.destroy();
      setEmbla(null);
    };
  }, [onSelect]);

  if (!products.length) return null;

  return (
    <div className="relative">
      {/* Viewport */}
      <div ref={viewportRef} className="overflow-hidden">
        <div className="flex gap-10" style={{ direction: 'rtl' }}>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none"
              style={{ width: 'clamp(200px, 25%, 260px)' }}
            >
              <OfferCart {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Prev arrow (راست) */}
      <button
        onClick={() => embla?.scrollPrev()}
        disabled={!embla}
        aria-label="قبلی"
        className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-[#c83b3b] shadow-md hover:bg-white transition disabled:opacity-30"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Next arrow (چپ) */}
      <button
        onClick={() => embla?.scrollNext()}
        disabled={!embla}
        aria-label="بعدی"
        className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-[#c83b3b] shadow-md hover:bg-white transition disabled:opacity-30"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* {products.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-4">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => embla?.scrollTo(i)}
              aria-label={`اسلاید ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === selectedIndex
                ? 'bg-white w-5'
                : 'bg-white/40 w-2 hover:bg-white/70'
                }`}
            />
          ))}
        </div>
      )} */}
    </div>
  );
}