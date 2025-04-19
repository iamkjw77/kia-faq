import { APP_DOWNLOAD } from '@/constants/faq';

const AppDownload = () => {
  return (
    <section className="flex flex-col items-center mt-[40px] lg:mt-2xl bg-gray-10 rounded-2xl p-md lg:p-lg">
      <h2 className="mb-md text-base md:text-2xl lg:text-[32px] font-semibold">
        {APP_DOWNLOAD.TITLE}
      </h2>
      <ul className="flex flex-col md:flex-row gap-[12px] md:gap-sm">
        {APP_DOWNLOAD.TYPE.map(({ id, path, icon, title }) => (
          <li key={id}>
            <a
              href={path}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center bg-white w-[264px] lg:w-[296px] h-[56px] lg:h-[60px] rounded-[8px]"
            >
              {icon}
              <span className="text-sm md:text-base lg:lg font-semibold">
                {title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AppDownload;
