import SVG, { ISVG } from '..';

const StepArrow = ({ width, height, color = '#B4B9BC', ...rest }: ISVG) => {
  return (
    <SVG
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M8 2L16 12L8 22" stroke={color} strokeWidth="2" />
    </SVG>
  );
};

export default StepArrow;
