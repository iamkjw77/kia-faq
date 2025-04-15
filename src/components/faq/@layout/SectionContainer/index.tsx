interface SectionContainerProps {
  title: string;
  children: React.ReactNode;
}

const SectionContainer = ({ title, children }: SectionContainerProps) => {
  return (
    <section>
      <h2 className="responsive-heading-02 mt-[101px] mb-[16px] md:mt-[48px] md:mt-[24px]">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default SectionContainer;
