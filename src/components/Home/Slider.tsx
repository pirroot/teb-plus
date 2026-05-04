'use client';
import { useEffect, useRef, useState } from 'react';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import Image from 'next/image';
import sliderImg from "@/assets/images/slider/40off-1.webp";
import sliderImg1 from "@/assets/images/slider/40off.webp";

const images = [
    { imgUrl: sliderImg1, alt: "image-1" },
    { imgUrl: sliderImg, alt: "image" },
];

export default function Slider() {
    const viewport = useRef<HTMLDivElement | null>(null);
    const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

    const nextSlide = () => embla?.scrollNext();
    const prevSlide = () => embla?.scrollPrev();

    useEffect(() => {
        if (!viewport.current) return;

        const instance = EmblaCarousel(viewport.current, {
            loop: false,
            align: 'center'
        });

        setEmbla(instance);

        return () => {
            instance.destroy();
            setEmbla(null);
        };
    }, []);


    return (
      <section className="embla my-10 container mx-auto" ref={viewport}>
        <div className="embla__container">
          {images.map((img) => (
            <div key={img.alt} className="embla__slide">
              <Image
                src={img.imgUrl}
                alt={img.alt}
                className="rounded-lg object-cover"
                quality={100}
              />
            </div>
          ))}
        </div>

        <div className="embla__controls">
          <button className="embla__prev" onClick={prevSlide} disabled={!embla}>
            &#10094;
          </button>
          <button className="embla__next" onClick={nextSlide} disabled={!embla}>
            &#10095;
          </button>
        </div>

        <div className="embla__dots">...</div>
      </section>
    );
}
