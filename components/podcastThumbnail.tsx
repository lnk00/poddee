import { LayoutList } from 'lucide-react';
import * as React from 'react';

export interface PodcastThumbnailProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

const PodcastThumbnail = React.forwardRef<
  HTMLImageElement,
  PodcastThumbnailProps
>(({ className, ...props }) => {
  return (
    <div className='rounded-md overflow-hidden relative cursor-pointer w-fit'>
      <img {...props} />
      <div className='flex items-center justify-center bg-foreground opacity-0 hover:opacity-80 absolute top-0 left-0 h-full w-full transition duration-300'>
        <LayoutList className='h-6 w-6 z-10' color='#ffffff' />
      </div>
    </div>
  );
});
PodcastThumbnail.displayName = 'PodcastThumbnail';

export { PodcastThumbnail };
