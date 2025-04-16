import { PaginationParams } from '../@common';

export interface FaqCategory {
  id: string;
  name: string;
  tabId: string;
}

export interface GetFaqParams extends PaginationParams {
  tabId: string;
  categoryId?: string;
  question?: string;
}

export interface FaqItem {
  id: number;
  tabId: string;
  categoryId: string;
  categoryName: string;
  subCategoryName: string;
  answer: string;
  question: string;
}

export interface FaqListResponse {
  data: FaqItem[];
  totalCount: number;
  hasNext: boolean;
}
