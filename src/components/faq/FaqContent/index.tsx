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

const FaqContent = () => {
  const { selected: tabId } = useTabsContext();

  const [inputKeyword, setInputKeyword] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const [selectedSub, setSelectedSub] = useState<string>('');
  const [faqList, setFaqList] = useState<AccordionItem[]>([]);
  const [page, setPage] = useState<number>(PAGINATION.DEFAULT_PAGE);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: categories } = useGetCategories(tabId);

  const { data: faq, isFetching } = useGetFaq({
    tabId,
    categoryId: selectedSub,
    question: searchKeyword,
    page,
  });

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
        subTitle: item.subCategoryName,
        title: item.question,
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
      {searchKeyword && (
        <div>
          <div>{`검색결과 총 ${faq?.totalCount}건`}</div>
          <button type="button" onClick={handleReset}>
            <Refresh title="검색 초기화" width="24" height="24" />
            검색초기화
          </button>
        </div>
      )}
      <div className="flex flex-wrap pb-md md:pb-lg lg:pb-[40px] xl:pb-xl border-b-2 border-midnight-900">
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
        <div>
          <NoData title="검색 결과가 없습니다." width="32" height="32" />
          검색결과가 없습니다.
        </div>
      )}

      {faq?.hasNext && (
        <div className="text-center mt-4">
          <button
            onClick={handleLoadMore}
            className="text-sm text-blue-500 hover:underline"
          >
            더보기
          </button>
        </div>
      )}
    </div>
  );
};

export default FaqContent;
