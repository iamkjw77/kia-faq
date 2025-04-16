import PageHeader from '@/components/@layout/page/Header';
import AppDownload from '@/components/faq/AppDownload';
import Faq from '@/components/faq/Faq';
import ProcessGuide from '@/components/faq/ProcessGuide';
import ServiceInquiry from '@/components/faq/ServiceInquiry';
import { FAQ } from '@/constants/faq';

export default function Home() {
  return (
    <>
      <PageHeader title={FAQ.TITLE} subTitle={FAQ.SUB_TITLE} />
      <Faq />
      <ServiceInquiry />
      <ProcessGuide />
      <AppDownload />
    </>
  );
}
