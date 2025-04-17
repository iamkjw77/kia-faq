import SVG, { ISVG } from '..';

const Search = ({ width, height, color = '#05141F', ...rest }: ISVG) => {
  return (
    <SVG
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle
        cx="10.5882"
        cy="10.5882"
        r="6.58824"
        stroke={color}
        strokeWidth="2"
      />
      <path d="M15.2942 15.2941L20.0001 20" stroke={color} strokeWidth="2" />
    </SVG>
  );
};

export default Search;
