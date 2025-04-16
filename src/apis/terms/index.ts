import axiosInstance from '@/apis/@core';
import { ITerms } from '@/types/terms';

// 이용약관 조회
export const fetchAllTerms = async () => {
  const response = await axiosInstance.get<ITerms[]>('/terms');

  return response.data;
};
