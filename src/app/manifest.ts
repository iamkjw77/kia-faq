import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '기아 비즈(Kia Biz) - 친환경 모빌리티 서비스',
    short_name: '기아 비즈(Kia Biz)',
    start_url: 'https://kiabiz.kia.com/FAQ',
    display: 'standalone',
    background_color: '#ffffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '144x144',
        type: 'image/png',
      },
    ],
  };
}
