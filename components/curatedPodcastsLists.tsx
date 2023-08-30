import * as React from 'react';
import { PodcastThumbnail } from './podcastThumbnail';
import { CuratedList } from '@/types/curatedList';
import { Button } from './ui/button';
import { LayoutList } from 'lucide-react';

export interface CuratedPodcastsListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  curatedPodcastsLists: CuratedList[];
}

const CuratedPodcastsLists = React.forwardRef<
  HTMLDivElement,
  CuratedPodcastsListProps
>(({ className, curatedPodcastsLists, ...props }, _ref) => {
  return (
    <div className={className} {...props}>
      {curatedPodcastsLists.map((list, idx) => (
        <div key={idx} className='mb-16'>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight hover:text-primary cursor-pointer transition duration-300'>
            {list.title}
          </h3>
          <Button variant={'link'} className='p-0 h-auto'>
            {list.source_domain}
          </Button>
          <div className='flex gap-4 mt-4'>
            {list.podcasts.map((p) => (
              <PodcastThumbnail
                src={p.thumbnail}
                alt=''
                width={100}
                height={100}
              />
            ))}
          </div>
          <Button variant={'secondary'} className='mt-4'>
            See complete list
            <LayoutList className='ml-2 h-4 w-4' />
          </Button>
        </div>
      ))}
    </div>
  );
});
CuratedPodcastsLists.displayName = 'CuratedPodcastsLists';

export { CuratedPodcastsLists };
