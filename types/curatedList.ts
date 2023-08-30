import { PodcastPreview } from './podcastPreview';

export type CuratedList = {
  id: string;
  title: string;
  description: string;
  podcasts: PodcastPreview[];
  source_domain: string;
  source_url: string;
};
