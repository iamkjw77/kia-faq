import axiosInstance from '@/apis/@core';
import { PAGINATION } from '@/constants/@common';
import { FaqCategory, FaqListResponse, GetFaqParams } from '@/types/faq';

// 탭 카테고리 목록 조회
export const getFaqCategoriesByTab = async (tabId: string) => {
  const response = await axiosInstance.get<FaqCategory[]>('/categories', {
    params: {
      tabId,
    },
  });
  return response.data;
};

// FAQ 목록 조회
export const getFaqList = async ({
  page = PAGINATION.DEFAULT_PAGE,
  per_page = PAGINATION.DEFAULT_PER_PAGE,
  tabId,
  categoryId,
  question,
}: GetFaqParams): Promise<FaqListResponse> => {
  const params: Record<string, string | number> = {
    _page: page,
    _limit: per_page,
    tabId,
  };

  if (categoryId) {
    params.categoryId = categoryId;
  }

  if (question && question.trim().length > 0) {
    params.q = question;
  }

  const response = await axiosInstance.get('/faq', {
    params,
  });

  const data = response.data;
  const totalCount = parseInt(response.headers['x-total-count'], 10);
  const hasNext = page * per_page < totalCount;

  return {
    data,
    totalCount,
    hasNext,
  };
};
