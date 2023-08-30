import * as React from 'react';
import Image from 'next/image';
import { PodcastThumbnail } from './podcastThumbnail';
import { Podcast } from '@/types/podcast';

export interface TopPodcastsListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  podcasts: Podcast[];
}

const TopPodcastsList = React.forwardRef<HTMLDivElement, TopPodcastsListProps>(
  ({ className, podcasts, ...props }, _ref) => {
    return (
      <div className={className} {...props}>
        {podcasts.slice(0, 3).map((p, idx) => (
          <div key={idx} className='mb-8' {...props}>
            <div className='relative w-fit'>
              <Image
                src={`/${idx + 1}.png`}
                alt=''
                width={50}
                height={50}
                className='absolute z-10 top-0 right-0'
              />
              <PodcastThumbnail src={p.thumbnail} alt='' width={'100%'} />
            </div>
            <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mt-2'>
              {p.title}
            </h4>
          </div>
        ))}
      </div>
    );
  }
);
TopPodcastsList.displayName = 'TopPodcastsList';

export { TopPodcastsList };
