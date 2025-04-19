import { fetchAllTerms } from '@/apis/terms';
import { COMMON_KEYS } from '@/constants/@queryKeys';
import { useQuery } from '@tanstack/react-query';

/**
 * 전체 이용약관 목록을 가져오는 훅
 */
const useGetTerms = () => {
  return useQuery({
    queryKey: COMMON_KEYS.TERMS,
    queryFn: fetchAllTerms,
    refetchOnMount: 'always',
    staleTime: 0,
    gcTime: 1000,
  });
};

export default useGetTerms;
