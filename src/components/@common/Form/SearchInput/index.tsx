import Clear from '../../SVG/Icon/Clear';
import Search from '../../SVG/Icon/Search';

interface SearchInputProps {
  keyword: string;
  onKeywordChange: (keyword: string) => void;
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
