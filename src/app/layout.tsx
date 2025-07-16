import 'antd/dist/reset.css';
import './globals.css';

import { ConfigProvider } from 'antd';
import trTR from 'antd/locale/tr_TR'; // Türkçe yerelleştirme
import type { Metadata } from 'next';
import { Providers } from '@/store/provider';

export const metadata: Metadata = {
  title: 'Arama Uygulaması',
  description: 'Next.js + Ant Design arama deneyimi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Providers>
          <ConfigProvider locale={trTR} theme={{ token: { colorPrimary: '#1677ff' } }}>
            {children}
          </ConfigProvider>
        </Providers>
      </body>
    </html>
  );
}
