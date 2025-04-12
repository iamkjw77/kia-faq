import SVG, { ISVG } from '..';

const Close = ({ width, height, color = '#000', ...rest }: ISVG) => {
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
        d="M6 6L12 12M12 12L18 18M12 12L18 6M12 12L6 18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </SVG>
  );
};

export default Close;
