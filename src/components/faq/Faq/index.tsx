import Tabs, { TabItem } from '@/components/@common/Tab';
import FaqContent from '../FaqContent';
import { FAQ } from '@/constants/faq';

const Faq = () => {
  return (
    <Tabs defaultValue={FAQ.CATEGORIES[0].value}>
      {FAQ.CATEGORIES.map((category) => (
        <TabItem
          key={category.value}
          label={category.label}
          value={category.value}
        >
          <FaqContent />
        </TabItem>
      ))}
    </Tabs>
  );
};

export default Faq;
