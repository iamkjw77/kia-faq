import { getFaqCategoriesByTab } from '@/apis/faq';
import { FAQ_KEYS } from '@/constants/@queryKeys';
import { useQuery } from '@tanstack/react-query';

const useGetCategories = (tabId: string) => {
  return useQuery({
    queryKey: FAQ_KEYS.CATEGORIES(tabId),
    queryFn: () => getFaqCategoriesByTab(tabId),
    enabled: !!tabId,
  });
};

export default useGetCategories;
