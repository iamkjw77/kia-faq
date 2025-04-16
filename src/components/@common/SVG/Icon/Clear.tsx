import SVG, { ISVG } from '..';

const Clear = ({ width, height, ...rest }: ISVG) => {
  return (
    <SVG
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_1234_11089)">
        <rect width="20" height="20" rx="10" fill="#F8F8F8" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5775 14.756L5.24414 6.42265L6.42265 5.24414L14.756 13.5775L13.5775 14.756Z"
          fill="#CDD0D2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.24426 13.5775L13.5776 5.24414L14.7561 6.42265L6.42277 14.756L5.24426 13.5775Z"
          fill="#CDD0D2"
        />
      </g>
      <defs>
        <clipPath id="clip0_1234_11089">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </SVG>
  );
};

export default Clear;
