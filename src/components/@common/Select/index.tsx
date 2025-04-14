import Dropdown from '../SVG/Icon/Dropdown';

export interface ISelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface ISelect extends React.HTMLAttributes<HTMLSelectElement> {
  /** Select Options */
  options: ISelectOption[];
  /** Select 이름 */
  name: string;
  /** select value */
  selectedValue: string | number;
  /** select onChange */
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({
  options,
  name,
  selectedValue,
  onChange,
  ...rest
}: ISelect) => {
  return (
    <div className="relative w-full">
      <select
        className="w-full h-[40px] md:h-[48px] xl:h-[56px] appearance-none border border-gray-200 px-4 text-base lg:text-sm xl:text-lg outline-none focus:border-midnight-900"
        name={name}
        value={selectedValue}
        onChange={onChange}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
        <Dropdown title="드롭다운 열기" width="24" height="24" />
      </div>
    </div>
  );
};

export default Select;
