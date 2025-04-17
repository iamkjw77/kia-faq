import SVG, { ISVG } from '..';

const Arrow = ({ width, height, color = '#05141F', ...rest }: ISVG) => {
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
        d="M19.0711 8.41421L17.6569 7L12 12.6569L6.34317 7L4.92896 8.41421L12 15.4853L19.0711 8.41421Z"
        fill={color}
      />
    </SVG>
  );
};

export default Arrow;
