import { getFaqList } from '@/apis/faq';
import { FAQ_KEYS } from '@/constants/@queryKeys';
import { GetFaqParams } from '@/types/faq';
import { useQuery } from '@tanstack/react-query';

/**
 * FAQ 리스트를 가져오는 훅
 * - categoryId가 'ALL'인 경우 필터링에서 제외
 * - 항상 최신 데이터를 유지하도록 설정
 */

const useGetFaq = (params: GetFaqParams) => {
  const sanitizedParams = {
    ...params,
    categoryId: params.categoryId === 'ALL' ? undefined : params.categoryId,
  };

  return useQuery({
    queryKey: FAQ_KEYS.LIST(sanitizedParams),
    queryFn: () => getFaqList(sanitizedParams),
    refetchOnMount: 'always',
    staleTime: 0,
    gcTime: 1000,
  });
};

export default useGetFaq;
