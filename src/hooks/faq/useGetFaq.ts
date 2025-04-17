import { getFaqList } from '@/apis/faq';
import { FAQ_KEYS } from '@/constants/@queryKeys';
import { GetFaqParams } from '@/types/faq';
import { useQuery } from '@tanstack/react-query';

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
