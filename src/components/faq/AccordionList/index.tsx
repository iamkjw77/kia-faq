import { useState } from 'react';
import Accordion, { AccordionItem } from '../../@common/Accordion';

interface AccordionListProps {
  items: AccordionItem[];
}

const AccordionList = ({ items }: AccordionListProps) => {
  const [openId, setOpenId] = useState<string | number | null>(null);

  return (
    <>
      {items.map((item) => (
        <Accordion
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onClick={() => setOpenId(openId === item.id ? null : item.id)}
          isHtml
        />
      ))}
    </>
  );
};

export default AccordionList;
