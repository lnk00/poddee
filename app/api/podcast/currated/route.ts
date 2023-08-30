import { SearchEngineService } from '@/services/searchEngineService';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const searchEngineService = new SearchEngineService();

  const data = await searchEngineService.getCurratedPodcast();

  return NextResponse.json(data);
}
