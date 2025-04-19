import { getFaqCategoriesByTab } from '@/apis/faq';
import { FAQ_KEYS } from '@/constants/@queryKeys';
import { useQuery } from '@tanstack/react-query';

/**
 * 선택한 탭 ID에 해당하는 FAQ 카테고리 목록을 가져오는 훅
 */
const useGetCategories = (tabId: string) => {
  return useQuery({
    queryKey: FAQ_KEYS.CATEGORIES(tabId),
    queryFn: () => getFaqCategoriesByTab(tabId),
    enabled: !!tabId,
    refetchOnMount: 'always',
    staleTime: 0,
    gcTime: 1000,
  });
};

export default useGetCategories;
