import Dropdown from '../SVG/Icon/Dropdown';

/**
 * @Select
 *   @사용목적
 *     - 옵션을 선택할 수 있는 커스텀 셀렉트 박스
 *     - 기본 HTML <select> 요소를 커스터마이징하여 사용
 *
 */

export interface ISelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface ISelect extends React.HTMLAttributes<HTMLSelectElement> {
  /** 드롭다운에 표시할 옵션 목록 */
  options: ISelectOption[];
  /** 셀렉트 input의 name 속성 */
  name: string;
  /** 현재 선택된 값 */
  selectedValue: string | number;
  /** 값 변경 핸들러 */
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
