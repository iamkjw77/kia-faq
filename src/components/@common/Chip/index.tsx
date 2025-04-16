interface ChipProps {
  label: string;
  isSelected?: boolean;
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
