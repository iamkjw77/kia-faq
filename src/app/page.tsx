import PageHeader from '@/components/@layout/page/Header';
import ServiceInquiry from '@/components/faq/ServiceInquiry';

export default function Home() {
  return (
    <>
      <PageHeader
        title="자주 묻는 질문"
        subTitle="궁금하신 내용을 빠르게 찾아보세요."
      />
      <ServiceInquiry />
    </>
  );
}
