import { ITerms } from '@/types/faq';

const API_BASE_URL = 'http://localhost:4000';

export const fetchAllTerms = async (): Promise<ITerms[]> => {
  const response = await fetch(`${API_BASE_URL}/terms`);
  if (!response.ok) throw new Error('Network response was not ok');

  return response.json();
};
