export interface AccordionItem {
  id: string | number;
  title: string;
  subTitle: string;
  content: string;
}

interface AccordionProps {
  item: AccordionItem;
  isOpen: boolean;
  onClick: () => void;
  isHtml?: boolean;
}

const Accordion = ({ item, isOpen, onClick, isHtml }: AccordionProps) => {
  const { title, content } = item;

  return (
    <div className="border-b">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left cursor-pointer"
      >
        <span className="text-sm font-medium">{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen &&
        (isHtml ? (
          <div
            className="pb-4 text-sm text-gray-600 whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <div className="pb-4 text-sm text-gray-600 whitespace-pre-line">
            {content}
          </div>
        ))}
    </div>
  );
};

export default Accordion;
