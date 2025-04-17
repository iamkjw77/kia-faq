'use client';

import { FOOTER_INFO } from '@/constants/@common';
import FooterLogo from '../@common/SVG/Icon/FooterLogo';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import TermsDialog from '../faq/TermsDialog';
import Top from '../@common/SVG/Icon/Top';
import useInView from '@/hooks/@common/useInView';
import { throttle } from '@/utils/dom/throttle';

const Footer = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isShowGoTop, setIsShowGoTop] = useState(false);

  const { ref, isIntersecting } = useInView();

  const handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTermsDialog = () => {
    setIsTermsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsShowGoTop(window.scrollY > 100);
    }, 300);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer
        ref={ref}
        className="relative bg-primary flex items-center py-[34px] px-md md:px-xl lg:h-[176px]"
      >
        <TermsDialog
          isOpen={isTermsOpen}
          onClose={() => setIsTermsOpen(false)}
        />
        <div className="lg:w-full flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-md h-full">
          {/* logo */}
          <div>
            <FooterLogo
              className="block w-fit h-[32px] md:h-[48px] lg:h-[56px]"
              title="기아"
              width="64"
              height="32"
            />
            <small className="responsive-sub-small">
              {FOOTER_INFO.COPYRIGHT}
            </small>
          </div>

          <div>
            {/* policy links */}
            <ul className="responsive-body-default flex lg:justify-end mb-[10px] text-white">
              <li>
                <Link
                  href="https://privacy.kia.com/overview/full-policy"
                  target="_blank"
                  className="hover:underline"
                >
                  <b>개인정보 처리방침</b>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="cursor-pointer ml-md hover:underline"
                  onClick={handleOpenTermsDialog}
                >
                  <b>이용약관</b>
                </button>
              </li>
            </ul>

            {/* business info */}
            <ul className="responsive-body-default grid md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-end text-gray-400">
              {FOOTER_INFO.COMPANY_DETAILS.map((info) => (
                <li
                  key={info.id}
                  className="leading-normal lg:w-auto lg:ml-[12px] lg:mr-0 mr-[12px]"
                >
                  {info.id === 'email' ? (
                    <>
                      제휴문의:{' '}
                      <a className="underline" href={`mailto:${info.value}`}>
                        {info.value}
                      </a>
                    </>
                  ) : (
                    info.value
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* go top button */}
        <button
          type="button"
          onClick={handleGoTop}
          className={`
            group ${isIntersecting ? 'absolute' : 'fixed'} flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px]
            right-[24px] md:right-[30px] lg:right-[36px] ${isIntersecting ? 'top-[-60px] md:top-[-72px] lg:top-[-86px]' : 'bottom-[16px] md:bottom-[24px] lg:bottom-[32px]'} 
            z-[200] rounded-full bg-white text-black shadow-[0_4px_12px_0_rgba(0,0,0,0.12)]
            transition-all transition-opacity duration-300 ease-out cursor-pointer
            ${isShowGoTop ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}
          `}
        >
          <Top
            title="맨 위로 이동"
            className={`relative w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] group-active:translate-y-[6px] 
              transition-all duration-300 ease-out ${isShowGoTop ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
            width="28"
            height="28"
          />
        </button>
      </footer>
    </>
  );
};

export default Footer;
