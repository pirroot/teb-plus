'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import './index.css';
import Image from 'next/image';
import sliderImg from '@/public/images/slider/40off-1.webp';
import sliderImg1 from '@/public/images/slider/40off.webp';

const slides = [
  {
    imgUrl: sliderImg1,
    alt: 'تصویر اول',
    title: 'تخفیف ۴۰ درصدی',
    subtitle: 'بهترین قیمت‌ها برای خرید آنلاین',
    ctaLabel: 'مشاهده محصولات',
    ctaHref: '#',
  },
  {
    imgUrl: sliderImg,
    alt: 'تصویر دوم',
    title: 'پیشنهاد ویژه',
    subtitle: 'تا پایان این هفته فرصت دارید',
    ctaLabel: 'همین حالا بخرید',
    ctaHref: '#',
  },
];

export default function Slider() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!viewportRef.current) return;

    const autoplay = Autoplay({ delay: 4000, stopOnInteraction: true });

    const instance = EmblaCarousel(
      viewportRef.current,
      { loop: true, align: 'center', direction: 'rtl' },
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

  const scrollTo = (index: number) => embla?.scrollTo(index);
  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  return (
    <section className="hero-slider my-10 container mx-auto">
      {/* Viewport — Embla binds to this element */}
      <div className="hero-slider__viewport" ref={viewportRef}>
        <div className="hero-slider__container">
          {slides.map((slide, i) => (
            <div key={i} className="hero-slider__slide">
              {/* Image */}
              <div className="hero-slider__image-wrapper">
                <Image
                  src={slide.imgUrl}
                  alt={slide.alt}
                  fill
                  className="hero-slider__image"
                  quality={100}
                  priority={i === 0}
                />
              </div>

              {/* Overlay */}
              <div className="hero-slider__overlay" />

              {/* Text content */}
              <div className="hero-slider__content">
                <h2 className="hero-slider__title">{slide.title}</h2>
                <p className="hero-slider__subtitle">{slide.subtitle}</p>
                <a href={slide.ctaHref} className="hero-slider__cta">
                  {slide.ctaLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow — prev (راست در RTL) */}
      <button
        className="hero-slider__arrow hero-slider__arrow--prev"
        onClick={scrollPrev}
        disabled={!embla}
        aria-label="اسلاید قبلی"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Arrow — next (چپ در RTL) */}
      <button
        className="hero-slider__arrow hero-slider__arrow--next"
        onClick={scrollNext}
        disabled={!embla}
        aria-label="اسلاید بعدی"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="hero-slider__dots" role="tablist" aria-label="اسلایدها">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === selectedIndex}
            aria-label={`اسلاید ${i + 1}`}
            className={`hero-slider__dot${i === selectedIndex ? ' hero-slider__dot--active' : ''}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </section>
  );
}