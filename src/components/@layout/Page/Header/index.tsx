interface PageHeaderProps {
  title: string;
  subTitle: string;
}

const PageHeader = ({ title, subTitle }: PageHeaderProps) => {
  return (
    <h1 className="responsive-heading-01 flex flex-col justify-center h-[124px] md:h-[160px] lg:h-[192px] xl:h-[222px]">
      {title}
      <em className="block not-italic mt-[.4em] responsive-sub-title-default">
        {subTitle}
      </em>
    </h1>
  );
};

export default PageHeader;
