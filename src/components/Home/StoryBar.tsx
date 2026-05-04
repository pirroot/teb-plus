'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const storyImages = [
  require('@/assets/images/storiesBar/1.jpg'),
  require('@/assets/images/storiesBar/2.png'),
  require('@/assets/images/storiesBar/3.png'),
  require('@/assets/images/storiesBar/4.png'),
  require('@/assets/images/storiesBar/5.jpg'),
];

const InstaStory = dynamic(() => import('react-insta-stories'), { ssr: false });

const stories = storyImages.map((img) => ({
  type: 'image' as const,
  url: img.default?.src || img,
}));

const allStories = [...stories, ...stories.slice(0, 4)];

export default function StoryBar() {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openStoryAt = (idx: number) => {
    setStartIndex(idx);
    setOpen(true);
  };

  const closeStory = () => setOpen(false);

  return (
    <section className="my-6 container mx-auto">
      <div className="flex items-center gap-20 overflow-x-auto pb-4 scrollbar-hide">
        {allStories.slice(0, 9).map((story, idx) => (
          <div key={idx} className=" flex flex-col items-center gap-2">
            <button
              onClick={() => openStoryAt(idx)}
              className="border-2 border-red-500  p-1 rounded-full cursor-pointer"
              aria-label={`باز کردن استوری ${idx + 1}`}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Image
                  src={story.url}
                  alt={`استوری ${idx + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </button>
            <p className="text-sm text-gray-700">بار بچه گانه</p>
          </div>
        ))}
      </div>

      {open && (
        <div
          dir="ltr"
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={closeStory}
        >
          <div
            className="relative"
            style={{
              width: 'min(420px, 100%)',
              height: 'min(720px, 100vh - 2rem)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <InstaStory
              stories={allStories}
              defaultInterval={5000}
              width="100%"
              height="100%"
              currentIndex={startIndex}
              onAllStoriesEnd={closeStory}
              storyStyles={{
                objectFit: 'contain',
                backgroundColor: '#000',
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
