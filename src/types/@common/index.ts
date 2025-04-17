export interface PaginationParams {
  page?: number;
  per_page?: number;
}

export interface PaginationResponse {
  totalCount: number;
  hasNext: boolean;
}
