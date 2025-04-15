import Download from '@/components/@common/SVG/Icon/Download';
import Talk from '@/components/@common/SVG/Icon/Talk';
import Write from '@/components/@common/SVG/Icon/Write';

export const SERVICE_INQUIRY = Object.freeze({
  TITLE: '서비스 문의',
  TYPES: [
    {
      id: 'download-proposal',
      title: '서비스 제안서 다운로드',
      icon: (
        <Download
          title="서비스 제안서 다운로드"
          width="48"
          height="48"
          className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
        />
      ),
      href: '#',
      target: '_self',
    },
    {
      id: 'submit-inquiry',
      title: '상담문의 등록하기',
      icon: (
        <Write
          title="상품문의 등록하기"
          width="48"
          height="48"
          className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
        />
      ),
      href: 'https://wiblebiz.kia.com/Counsel',
      target: '_blank',
    },
    {
      id: 'contact-kakao',
      title: '카톡으로 문의하기',
      description: 'ID : 기아 비즈',
      icon: (
        <Talk
          title="카톡으로 문의하기"
          width="48"
          height="48"
          className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
        />
      ),
      href: 'https://pf.kakao.com/_xfLxjdb',
      target: '_blank',
    },
  ],
});
