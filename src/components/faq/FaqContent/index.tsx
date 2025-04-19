'use client';

import { AccordionItem } from '@/components/@common/Accordion';
import AccordionList from '@/components/faq/AccordionList';
import Chip from '@/components/@common/Chip';
import SearchInput from '@/components/@common/Form/SearchInput';
import Confirm from '@/components/@common/Modal/Confirm';
import NoData from '@/components/@common/SVG/Icon/NoData';
import Refresh from '@/components/@common/SVG/Icon/Refresh';
import { useTabsContext } from '@/components/@common/Tab';
import { PAGINATION } from '@/constants/@common';
import { FAQ } from '@/constants/faq';
import useGetCategories from '@/hooks/faq/useGetCategories';
import useGetFaq from '@/hooks/faq/useGetFaq';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Plus from '@/components/@common/SVG/Icon/Plus';
import Spinner from '@/components/@common/SVG/Icon/Spinner';
import { FaqItem } from '@/types/faq';
import { ALERT_MESSAGE } from '@/constants/message';

const FaqContent = () => {
  // 현재 선택된 탭 아이디
  const { selected: tabId } = useTabsContext();
  // 검색 입력값
  const [inputKeyword, setInputKeyword] = useState('');
  // 실제 검색어 (검색 입력값이 2글자 이상일 때만)
  const [searchKeyword, setSearchKeyword] = useState('');

  // 선택된 서브 카테고리
  const [selectedSub, setSelectedSub] = useState<string>('');
  // FAQ 리스트
  const [faqList, setFaqList] = useState<AccordionItem[]>([]);
  // 페이지 번호
  const [page, setPage] = useState<number>(PAGINATION.DEFAULT_PAGE);
  // 모달 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: categories } = useGetCategories(tabId);
  const { data: faq, isLoading } = useGetFaq({
    tabId,
    categoryId: selectedSub,
    question: searchKeyword,
    page,
  });

  // 카테고리 데이터 + '전체' 추가
  const subCategories = useMemo(() => {
    if (!categories) return [];
    return [FAQ.DEFAULT_SUBCATEGORY, ...categories];
  }, [categories]);

  // tabId가 변경될 때마다 상태 초기화
  useEffect(() => {
    handleReset();
  }, [tabId]);

  // 카테고리 로딩 완료 후 selectedSub 초기화
  useEffect(() => {
    if (subCategories.length > 0 && !selectedSub) {
      setSelectedSub(FAQ.DEFAULT_SUBCATEGORY.id);
    }
  }, [subCategories, selectedSub]);

  // FAQ 데이터를 AccordionItem 형태로 변환
  const mapFaqToAccordionItems = (faqList: FaqItem[]) => {
    return faqList.map((item) => ({
      id: item.id,
      title: item.question,
      categoryName: item.categoryName,
      subCategoryName:
        item.tabId === FAQ.CATEGORIES[1].value
          ? item.subCategoryName
          : undefined,
      content: item.answer,
    }));
  };

  // FAQ상태 업데이트 함수
  const updateFaqList = useCallback(() => {
    if (faq?.data) {
      const newItems: AccordionItem[] = mapFaqToAccordionItems(faq.data);

      setFaqList((prevFagList) =>
        page === PAGINATION.DEFAULT_PAGE
          ? newItems
          : [...prevFagList, ...newItems],
      );
    }
  }, [faq, page]);

  // faq가 업데이트 될 때마다 상태 업데이트 호출
  useEffect(() => {
    updateFaqList();
  }, [faq, page]);

  // '더보기' 버튼 클릭 시 페이지 번호 증가
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // 검색어 초기화 및 상태 리셋
  const handleReset = () => {
    setInputKeyword('');
    setSearchKeyword('');
    setSelectedSub('');
    setPage(PAGINATION.DEFAULT_PAGE);
    setFaqList([]);
  };

  // 검색어 입력 처리
  const handleSearch = (keyword: string) => {
    if (keyword.trim().length <= 1) {
      setIsModalOpen(true);
      return;
    }

    setSearchKeyword(keyword);
  };

  return (
    <div>
      {/* 검색어 입력이 2글자 이하일 경우 표시되는 모달 */}
      <Confirm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        confirmText={ALERT_MESSAGE.SEARCH_INPUT_TOO_SHORT}
      />

      {/* 검색 입력 필드 */}
      <SearchInput
        keyword={inputKeyword}
        onKeywordChange={setInputKeyword}
        onSearch={handleSearch}
      />
      {isLoading && page === 1 ? (
        <div className="w-full flex items-center justify-center min-h-[358px] md:-min-h-[298px] lg:min-h-[472px] xl:min-h-[352]">
          <Spinner title="로딩중" width="56" height="56" />
        </div>
      ) : (
        <>
          {/* 총 검색 결과 개수, 검색 초기화 버튼 */}
          {searchKeyword && (
            <div className="flex items-center justify-between my-sm md:my-[20px] lg:my-md">
              <div className="text-midnight-900 text-base md:text-lg lg:text-[20px] xl:text-2xl font-bold">{`검색결과 총 ${faq?.totalCount}건`}</div>
              <button
                className="cursor-pointer flex items-center gap-0.5 px-[xxs] text-sm md:text-base"
                type="button"
                onClick={handleReset}
              >
                <Refresh title="검색 초기화" width="24" height="24" />
                검색초기화
              </button>
            </div>
          )}

          {/* 서브 카테고리 목록 */}
          <div className="flex flex-wrap pb-sm md:pb-[20px] lg:pb-md border-b-2 border-midnight-900">
            {subCategories?.map((sub) => (
              <Chip
                key={sub.id}
                label={sub.name}
                isSelected={sub.id === selectedSub}
                onClick={() => setSelectedSub(sub.id)}
              />
            ))}
          </div>

          {faqList.length > 0 ? (
            <AccordionList items={faqList} />
          ) : (
            <div className="py-[120px] lg:py-[160px] flex flex-col justify-center items-center border-b border-gray-200">
              <NoData
                className="w-[32px] h-[32px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] xl:w-[64px] xl:h-[64px]"
                title="검색 결과가 없습니다."
                width="32"
                height="32"
              />
              <p className="text-gray-500 mt-xs md:mt-[12px] lg:mt-sm text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                검색결과가 없습니다.
              </p>
            </div>
          )}

          {/* 더보기 버튼 */}
          {faq?.hasNext && (
            <div className="text-center flex items-center justify-center">
              <button
                onClick={handleLoadMore}
                className="text-midnight-900 flex items-center gap-1 text-sm md:text-base lg:text-lg text-blue-500 mt-sm md:mt-lg lg:mt-[40px] font-semibold cursor-pointer h-[40px] md:h-xl lg:h-[56px]"
              >
                <Plus title="더보기" width="16" height="16" />
                더보기
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FaqContent;
