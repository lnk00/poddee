import { rssParser } from '@/lib/rssParser';

export class RssService {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  private buildAppleLink() {
    const id = this.url.split('/id').pop();
    const sanitizedId = id?.split('?').shift();
    return `https://itunes.apple.com/lookup?id=${sanitizedId}&entity=podcast`;
  }

  async getParsedRSSFeed() {
    const appleUrl = this.buildAppleLink();
    const res = await fetch(appleUrl);
    const data = await res.json();
    return await rssParser.parseURL(data.results[0].feedUrl);
  }
}
