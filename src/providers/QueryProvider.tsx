'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1, // 실패 시 몇 번 재시도할지 (기본값: 3)
            refetchOnWindowFocus: false, // 브라우저 포커스 시 자동 refetch 막기 (false로 해야 UX가 깔끔)
            // 새로 고침 없이도 일정 시간 동안은 캐시된 데이터를 사용함 (ms)
            staleTime: 1000 * 60 * 5, // 5분 동안은 fresh 상태로 간주
            // 백그라운드에서도 refetch 안 하도록 (캐시 유지 목적)
            refetchOnReconnect: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
