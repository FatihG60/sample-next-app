'use client';

import { Tabs } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';

const items = [
  { key: 'web', label: 'Web' },
  { key: 'images', label: 'Görseller' },
  { key: 'news', label: 'Haberler' },
];

export default function SearchTabs({ activeTab }: { activeTab: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const onChange = (key: string) => {
    router.push(`/search/${key}?q=${encodeURIComponent(query)}`);
  };

  return <Tabs items={items} activeKey={activeTab} onChange={onChange} />;
}
