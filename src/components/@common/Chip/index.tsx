/**
 *  @Chip
 *    @사용목적
 *      1) 필터, 태그 등 선택 가능한 항목을 버튼 형태로 표시
 *      2) 선택 여부에 따라 시각적으로 상태를 구분할 수 있는 UI 제공
 *
 *    @주요기능
 *      1) 클릭 시 선택 상태 토글 또는 외부 상태 변경 가능
 *
 */

interface ChipProps {
  /** Chip에 표시될 텍스트 */
  label: string;
  /** 선택 상태 여부 (기본값: false) */
  isSelected?: boolean;
  /** Chip 클릭 시 호출되는 함수 */
  onClick?: () => void;
}

const Chip = ({ label, isSelected = false, onClick }: ChipProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full text-sm md:text-base lg:text-lg font-bold px-sm h-[36px] md:h-[44px] lg:h-[48px] 
        ${isSelected ? 'bg-midnight-900 text-white' : 'text-midnight-900'}`}
    >
      {label}
    </button>
  );
};

export default Chip;
