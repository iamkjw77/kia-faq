import { useEffect, useRef, useState } from 'react';
import Arrow from '../SVG/Icon/Arrow';

export interface AccordionItem {
  id: string | number;
  title: string;
  categoryName: string;
  subCategoryName?: string;
  content: string;
}

interface AccordionProps {
  item: AccordionItem;
  isOpen: boolean;
  onClick: () => void;
  isHtml?: boolean;
}

const Accordion = ({ item, isOpen, onClick, isHtml }: AccordionProps) => {
  const { title, categoryName, subCategoryName, content } = item;
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onClick}
        className={`w-full text-left cursor-pointer transition-colors lg:py-[18px] xl:py-md ${
          isOpen ? 'bg-gray-10' : 'bg-transparent'
        }`}
      >
        <div className="flex lg:flex-row justify-between items-center lg:items-center gap-2 lg:gap-0 pr-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-5 flex-1 py-5 lg:py-0">
            <div className="flex">
              <span className="hidden lg:inline-block w-[8em] font-semibold text-xs md:text-base lg:text-lg xl:text-xl text-gray-500 text-center">
                {categoryName}
              </span>

              {subCategoryName && (
                <span className="hidden lg:inline-block w-[8em] font-semibold text-xs md:text-base lg:text-lg xl:text-xl text-gray-500 text-center">
                  {subCategoryName}
                </span>
              )}

              <span className="lg:hidden font-semibold text-xs md:text-base lg:text-lg xl:text-xl text-gray-500 text-left flex items-center gap-1">
                {categoryName}
                {subCategoryName && (
                  <>
                    <Arrow
                      title="카테고리 구분"
                      width="12"
                      height="12"
                      className="rotate-270 inline-block"
                      color="#697278"
                    />
                    {subCategoryName}
                  </>
                )}
              </span>
            </div>

            <h4 className="flex-1 mr-30">
              <strong className="text-base md:text-[20px] lg:text-lg xl:text-[20px] font-midnight-900">
                {title}
              </strong>
            </h4>
          </div>
          <div className="lg:mb-0 lg:self-auto lg:pr-3">
            <Arrow
              className={`w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] 
                transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
              title="열기"
              width="32"
              height="32"
            />
          </div>
        </div>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          transition: 'max-height 0.5s cubic-bezier(0.7, 0, 1, 1)',
          overflow: 'hidden',
        }}
        className="text-sm text-gray-600"
      >
        <div className="pb-4 px-sm py-0 md:px-md md:py-md lg:py-lg xl:px-lg xl:py-[40px]">
          {isHtml ? (
            <p
              className="pb-4 text-sm text-gray-600 !text-sm md:!text-base lg:!text-lg xl:!text-xl !text-midnight-900 font-medium"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <p className="pb-4 text-sm text-gray-600 !text-sm md:!text-base lg:!text-lg xl:!text-xl !text-midnight-900 font-medium">
              {content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
