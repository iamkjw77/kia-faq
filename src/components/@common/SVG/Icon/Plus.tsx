import SVG, { ISVG } from '..';

const Plus = ({ width, height, color = '#05141f', ...rest }: ISVG) => {
  return (
    <SVG
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12 5V12M12 12V19M12 12H5M12 12H19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
      />
    </SVG>
  );
};

export default Plus;
