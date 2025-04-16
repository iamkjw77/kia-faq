import ClientOnlyPortal from '@/components/@common/ClientOnlyPortal';
import Select, { ISelectOption } from '@/components/@common/Select';
import Close from '@/components/@common/SVG/Icon/Close';
import useGetTerms from '@/hooks/terms/useGetTerms';
import useLockBodyScroll from '@/hooks/@common/useLockBodyScroll';
import { ITerms } from '@/types/terms';
import { formatDateRange } from '@/utils/date';
import { useEffect, useState } from 'react';

interface TermsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsDialog = ({ isOpen, onClose }: TermsDialogProps) => {
  const { data: allTerms = [] } = useGetTerms();

  const [selectedHistory, setSelectedHistory] = useState(
    allTerms[0]?.termsVersion,
  );
  const [selectedTerm, setSelectedTerm] = useState<ITerms | null>(null);

  useLockBodyScroll(isOpen);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setSelectedHistory(allTerms[0]?.termsVersion);
  }, [allTerms]);

  useEffect(() => {
    const selected = allTerms.find(
      (term) => term.termsVersion === selectedHistory,
    );

    if (selected) {
      setSelectedTerm(selected);
    }
  }, [selectedHistory]);

  if (!isOpen) return null;

  const termsHistory: ISelectOption[] = allTerms?.map((terms) => ({
    label: formatDateRange(terms.startDate, terms.endDate),
    value: terms.termsVersion + '',
  }));

  const handleHistoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHistory(Number(e.target.value));
  };

  return (
    <ClientOnlyPortal>
      <div className="fixed inset-0 z-200 flex items-start justify-center bg-black/50 overflow-hidden">
        <div className="w-full max-w-4xl mx-6 md:mx-12 bg-white shadow-lg px-lg my-10 max-h-[90vh] overflow-y-auto">
          {/* 헤더 영역 */}
          <header className="flex items-center justify-between border-b-2 border-midnight-900 pt-sm">
            <h4 className="responsive-heading-04 mt-[.4em] mb-[.4em] mr-[1em] ml-0">
              이용약관
            </h4>
            <button
              className="p-sm relative left-[16px]"
              onClick={onClose}
              aria-label="닫기"
            >
              <Close
                className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px] cursor-pointer"
                title="닫기"
                width="24"
                height="24"
              />
            </button>
          </header>

          {/* 드롭다운 영역 */}
          <div className="flex justify-end">
            <div className="w-full lg:w-[230px] xl:w-[289px] mb-[12px] pt-[12px] xl:pt-[16px]">
              <Select
                name="terms"
                options={termsHistory}
                onChange={handleHistoryChange}
                selectedValue={selectedHistory}
              />
            </div>
          </div>

          {/* 본문 콘텐츠 영역 */}
          <main className="pr-xs pb-lg">
            <p
              dangerouslySetInnerHTML={{
                __html: selectedTerm?.contents || '약관 내용이 없습니다.',
              }}
            ></p>
          </main>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default TermsDialog;
