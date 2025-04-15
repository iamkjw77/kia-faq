interface PageHeaderProps {
  title: string;
  subTitle: string;
}

const PageHeader = ({ title, subTitle }: PageHeaderProps) => {
  return (
    <h1 className="responsive-heading-01">
      {title}
      <em className="block not-italic mt-[.4em] responsive-sub-title-default">
        {subTitle}
      </em>
    </h1>
  );
};

export default PageHeader;
