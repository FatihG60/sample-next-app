"use client";
import { useSearchParams } from 'next/navigation';
import SearchTabs from '@/components/SearchTabs';


const TAB_LABELS: Record<string, string> = {
  web: 'Web Sonuçları',
  images: 'Görsel Sonuçlar',
  news: 'Haberler',
};

export default function SearchTabPage({ params }: { params: { tab: string } }) {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const tab = params.tab;

  const tabTitle = TAB_LABELS[tab] || 'Bilinmeyen Sekme';

  return (
    <SearchTabs activeTab={tab} />
  );
}
