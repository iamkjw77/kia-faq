import { GetFaqParams } from '@/types/faq';

export const COMMON_KEYS = Object.freeze({
  TERMS: ['terms'],
});

export const FAQ_KEYS = Object.freeze({
  CATEGORIES: (tabId: string) => ['categories', tabId],
  LIST: (params: GetFaqParams) => ['list', params],
});
