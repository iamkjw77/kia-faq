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
import { useEffect, useMemo, useState } from 'react';
import Plus from '@/components/@common/SVG/Icon/Plus';
import Spinner from '@/components/@common/SVG/Icon/Spinner';

const FaqContent = () => {
  const { selected: tabId } = useTabsContext();

  const [inputKeyword, setInputKeyword] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const [selectedSub, setSelectedSub] = useState<string>('');
  const [faqList, setFaqList] = useState<AccordionItem[]>([]);
  const [page, setPage] = useState<number>(PAGINATION.DEFAULT_PAGE);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: categories } = useGetCategories(tabId);

  const { data: faq, isLoading } = useGetFaq({
    tabId,
    categoryId: selectedSub,
    question: searchKeyword,
    page,
  });

  console.log(isLoading);

  // ✅ 카테고리 데이터 + '전체' 추가
  const subCategories = useMemo(() => {
    if (!categories) return [];

    return [FAQ.DEFAULT_SUBCATEGORY, ...categories];
  }, [categories]);

  // ✅ tabId 변경되면 초기화
  useEffect(() => {
    handleReset();
  }, [tabId]);

  // ✅ 카테고리 로딩 완료 후 selectedSub 초기화
  useEffect(() => {
    if (subCategories.length > 0 && !selectedSub) {
      setSelectedSub(FAQ.DEFAULT_SUBCATEGORY.id);
    }
  }, [subCategories, selectedSub]);

  useEffect(() => {
    if (faq?.data) {
      const newItems: AccordionItem[] = faq.data.map((item) => ({
        id: item.id,
        title: item.question,
        categoryName: item.categoryName,
        subCategoryName:
          item.tabId === FAQ.CATEGORIES[1].value
            ? item.subCategoryName
            : undefined,
        content: item.answer,
      }));

      setFaqList((prevFagList) =>
        page === PAGINATION.DEFAULT_PAGE
          ? newItems
          : [...prevFagList, ...newItems],
      );
    }
  }, [faq, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleReset = () => {
    setInputKeyword('');
    setSearchKeyword('');
    setSelectedSub('');
    setPage(PAGINATION.DEFAULT_PAGE);
    setFaqList([]);
  };

  const handleSearch = (keyword: string) => {
    if (keyword.trim().length <= 1) {
      setIsModalOpen(true);
      return;
    }

    setSearchKeyword(keyword);
  };

  if (!faq) return null;

  return (
    <div>
      <Confirm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        confirmText="검색어는 2글자 이상 입력해주세요."
      />

      <SearchInput
        keyword={inputKeyword}
        onKeywordChange={setInputKeyword}
        onSearch={handleSearch}
      />
      {isLoading ? (
        <div className="w-full flex items-center justify-center min-h-[358px] md:-min-h-[298px] lg:min-h-[472px] xl:min-h-[352]">
          <Spinner title="로딩중" width="56" height="56" />
        </div>
      ) : (
        <>
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
