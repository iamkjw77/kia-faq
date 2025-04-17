import { fetchAllTerms } from '@/apis/terms';
import { COMMON_KEYS } from '@/constants/@queryKeys';
import { useQuery } from '@tanstack/react-query';

const useGetTerms = () => {
  return useQuery({
    queryKey: COMMON_KEYS.TERMS,
    queryFn: fetchAllTerms,
  });
};

export default useGetTerms;
