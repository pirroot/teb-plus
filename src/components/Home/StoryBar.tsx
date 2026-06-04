'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const InstaStory = dynamic(() => import('react-insta-stories'), { ssr: false });

const storyData = [
  { img: require('@/public/images/storiesBar/1.jpg'), label: 'بار بچگانه' },
  { img: require('@/public/images/storiesBar/2.png'), label: 'پوشاک' },
  { img: require('@/public/images/storiesBar/3.png'), label: 'کفش' },
  { img: require('@/public/images/storiesBar/4.png'), label: 'اسباب‌بازی' },
  { img: require('@/public/images/storiesBar/5.jpg'), label: 'تخفیف‌ها' },
];

const stories = storyData.map(({ img }) => ({
  type: 'image' as const,
  url: img.default?.src ?? img,
}));

export default function StoryBar() {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [seen, setSeen] = useState<Set<number>>(new Set());

  const openStoryAt = (idx: number) => {
    setStartIndex(idx);
    setSeen((prev) => new Set(prev).add(idx));
    setOpen(true);
  };

  const closeStory = () => setOpen(false);

  return (
    <section className="my-6 container mx-auto">
      {/* Story avatars row */}
      <div className="flex items-center gap-10 overflow-x-auto pb-3 scrollbar-hide px-1">
        {storyData.map((story, idx) => {
          const hasSeen = seen.has(idx);
          return (
            <div key={idx} className="flex flex-col items-center gap-1.5 shrink-0">
              <button
                onClick={() => openStoryAt(idx)}
                aria-label={`باز کردن استوری ${story.label}`}
                className="p-[2px] rounded-full"
                style={{
                  background: hasSeen
                    ? '#d1d5db' /* gray-300 */
                    : 'linear-gradient(135deg, #f97316, #ec4899, #8b5cf6)',
                }}
              >
                <div className="p-[2px] bg-white rounded-full">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={story.img.default?.src ?? story.img}
                      alt={story.label}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              </button>
              <p className="text-xs text-gray-600 text-center max-w-[72px] truncate">
                {story.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Story viewer modal */}
      {open && (
        <div
          dir="ltr"
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center"
          onClick={closeStory}
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              width: 'min(390px, 100vw)',
              height: 'min(700px, 100vh)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <InstaStory
              stories={stories}
              defaultInterval={5000}
              width="100%"
              height="100%"
              currentIndex={startIndex}
              onAllStoriesEnd={closeStory}
              storyStyles={{
                objectFit: 'cover',
                backgroundColor: '#000',
              }}
            />

            {/* Close button */}
            <button
              onClick={closeStory}
              aria-label="بستن استوری"
              className="absolute top-4 left-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}