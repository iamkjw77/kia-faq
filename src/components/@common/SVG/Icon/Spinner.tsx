import SVG, { ISVG } from '..';

const Spinner = ({ width, height, color = '#b4b9bc', ...rest }: ISVG) => {
  return (
    <SVG
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width={width}
      height={height}
      style={{
        shapeRendering: 'auto',
        display: 'block',
      }}
      {...rest}
    >
      <g>
        <circle
          strokeDasharray="164.93361431346415 56.97787143782138"
          r="35"
          strokeWidth="10"
          stroke={color}
          fill="none"
          cy="50"
          cx="50"
        >
          <animateTransform
            keyTimes="0;1"
            values="0 50 50;360 50 50"
            dur="1s"
            repeatCount="indefinite"
            type="rotate"
            attributeName="transform"
          ></animateTransform>
        </circle>
      </g>
    </SVG>
  );
};

export default Spinner;
