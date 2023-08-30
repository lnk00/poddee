import { CuratedList } from '@/types/curatedList';
import { Podcast } from '@/types/podcast';

export class SearchEngineService {
  private baseUrl = 'https://listen-api-test.listennotes.com/api/v2';
  constructor() {}

  async getCuratedPodcastsLists(): Promise<CuratedList[]> {
    const res = await fetch(`${this.baseUrl}/curated_podcasts`);
    const data = await res.json();
    return data.curated_lists;
  }

  async getTopPodcasts(): Promise<Podcast[]> {
    const res = await fetch(`${this.baseUrl}/best_podcasts`);
    const data = await res.json();
    return data.podcasts;
  }
}
