interface SectionContainerProps {
  /** 섹션 제목 */
  title: string;
  children: React.ReactNode;
}

const SectionContainer = ({ title, children }: SectionContainerProps) => {
  return (
    <section>
      <h2 className="responsive-heading-02 mt-[48px] mb-[16px] md:mt-[48px] md:mt-[24px] lg:mt-[64px] lg:mb-[24px]">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default SectionContainer;
