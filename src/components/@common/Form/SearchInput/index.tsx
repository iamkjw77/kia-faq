import Clear from '@/components/@common/SVG/Icon/Clear';
import Search from '@/components/@common/SVG/Icon/Search';

/**
 *  @SearchInput
 *    @사용목적
 *      - 키워드 입력을 받아 검색을 수행하는 입력창 UI 컴포넌트
 *
 *    @주요기능
 *      1) 사용자가 키워드를 입력할 수 있는 인풋 필드 제공
 *      2) 입력값이 있을 경우 삭제 버튼(Clear) 노출
 *      3) 검색 버튼(Search) 클릭 또는 엔터 입력 시 검색 요청 수행
 *
 */

interface SearchInputProps {
  /** 현재 입력된 키워드 상태 */
  keyword: string;
  /** 키워드 변경 핸들러 */
  onKeywordChange: (keyword: string) => void;
  /** 검색 요청 핸들러 */
  onSearch: (keyword: string) => void;
}

const SearchInput = ({
  keyword,
  onKeywordChange,
  onSearch,
}: SearchInputProps) => {
  const handleDeleteKeyword = () => {
    onKeywordChange('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mb-4 bg-gray-10 p-0 md:p-sm lg:p-[20px] xl:p-md"
    >
      <div className="relative">
        <input
          type="text"
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
          placeholder="찾으시는 내용을 입력해주세요"
          className="w-full border border-midnight-900 text-sm md:text-base lg:text-lg bg-white outline-none placeholder-gray-300 placeholder:font-semibold h-[40px] md:h-[46px] lg:h-[56px] pl-sm pr-[66px] md:pr-[86px] lg:pr-[94px]"
        />
        {keyword && (
          <button
            type="button"
            onClick={handleDeleteKeyword}
            className="absolute flex items-center justify-center cursor-pointer top-[1px] right-[39px] md:right-[47px] lg:right-[55px] w-[28px] h-[38px] md:w-[40px] md:h-[46px] lg:h-[54px]"
          >
            <Clear
              title="검색어 삭제"
              width="24"
              height="24"
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            />
          </button>
        )}
        <button
          type="submit"
          className="absolute flex items-center justify-center cursor-pointer right-[1px] top-[1px] w-[38px] h-[38px] md:w-[46px] md:h-[46px] lg:w-[54px] lg:h-[54px]"
        >
          <Search
            title="찾기"
            width="32"
            height="32"
            className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]"
          />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
