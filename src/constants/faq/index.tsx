import AppStore from '@/components/@common/SVG/Icon/AppStore';
import Download from '@/components/@common/SVG/Icon/Download';
import GooglePlay from '@/components/@common/SVG/Icon/GooglePlay';
import Process01 from '@/components/@common/SVG/Icon/Process01';
import Process02 from '@/components/@common/SVG/Icon/Process02';
import Process03 from '@/components/@common/SVG/Icon/Process03';
import Process04 from '@/components/@common/SVG/Icon/Process04';
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

export const PROCESS_GUIDE = Object.freeze({
  TITLE: '이용 프로세스 안내',
  PROCESS: [
    {
      id: 'process-01',
      title: '1. 문의 등록',
      description:
        '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
      icon: (
        <Process01
          className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] mr-sm lg:mr-0 mb-0 lg:mb-xs"
          title="1. 문의등록"
          width="56"
          height="56"
        />
      ),
    },
    {
      id: 'process-02',
      title: '2. 관리자 설정',
      description: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
      icon: (
        <Process02
          className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] mr-sm lg:mr-0"
          title="1. 문의등록"
          width="56"
          height="56"
        />
      ),
    },
    {
      id: 'process-03',
      title: '3. 임직원 가입',
      description: '이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.',
      icon: (
        <Process03
          className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] mr-sm lg:mr-0"
          title="1. 문의등록"
          width="56"
          height="56"
        />
      ),
    },
    {
      id: 'process-04',
      title: '4. 서비스 이용',
      description: '이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!',
      icon: (
        <Process04
          className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] mr-sm lg:mr-0"
          title="1. 문의등록"
          width="56"
          height="56"
        />
      ),
    },
  ],
});

export const APP_DOWNLOAD = Object.freeze({
  TITLE: '기아 비즈 App 지금 만나보세요!',
  TYPE: [
    {
      id: 'google-play',
      title: 'Google Play',
      icon: (
        <GooglePlay
          title="구글 플레이 다운로드(안드로이드)"
          width="32"
          height="32"
          className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px] mr-xxs"
        />
      ),
      path: 'https://play.google.com/store/apps/details?id=kor.mop.user.app',
    },
    {
      id: 'app-store',
      title: 'App Store',
      icon: (
        <AppStore
          title="앱 스토어 다운로드(iOS)"
          width="32"
          height="32"
          className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px] mr-xxs"
        />
      ),
      path: 'https://apps.apple.com/kr/app/kia-biz-%EA%B8%B0%EC%95%84-%EB%B9%84%EC%A6%88/id1598065794',
    },
  ],
});
