import { CuratedPodcastsLists } from '@/components/curatedPodcastsLists';
import { TopPodcastsList } from '@/components/topPodcastsList';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SearchEngineService } from '@/services/searchEngineService';
import { Sparkles, Wand2 } from 'lucide-react';

const fetchData = async () => {
  const searchEngineService = new SearchEngineService();
  const topPodcasts = await searchEngineService.getTopPodcasts();
  const curatedPodcastsLists =
    await searchEngineService.getCuratedPodcastsLists();
  return {
    topPodcasts,
    curatedPodcastsLists,
  };
};

export default async function Home() {
  const data = await fetchData();

  return (
    <main className='flex'>
      <ScrollArea className='h-content pr-6'>
        <div className='flex gap-4 mt-12'>
          <Wand2 className='h-10 w-10' />
          <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl'>
            Curated
          </h1>
        </div>
        <CuratedPodcastsLists
          className='mt-12'
          curatedPodcastsLists={data.curatedPodcastsLists}
        />
      </ScrollArea>
      <ScrollArea className='w-72 h-content pl-6'>
        <div className='flex gap-4 mt-12'>
          <Sparkles className='h-10 w-10' />
          <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl'>
            Top 3
          </h1>
        </div>
        <TopPodcastsList className='mt-12' podcasts={data.topPodcasts} />
      </ScrollArea>
    </main>
  );
}
