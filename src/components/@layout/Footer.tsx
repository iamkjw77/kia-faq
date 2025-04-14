'use client';

import { COPYRIGHT, FOOTER_INFO } from '@/constants/@common';
import FooterLogo from '../@common/SVG/Icon/FooterLogo';
import Link from 'next/link';
import { useState } from 'react';
import TermsDialog from '../faq/TermsDialog';

const Footer = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const handleOpenTermsDialog = () => {
    setIsTermsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <footer className="bg-primary flex items-center py-[34px] px-md md:px-xl lg:h-[176px]">
      <TermsDialog isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <div className="lg:w-full flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-md h-full">
        {/* logo */}
        <div>
          <FooterLogo
            className="block w-fit h-[32px] md:h-[48px] lg:h-[56px]"
            title="기아"
            width="64"
            height="32"
          />
          <small className="responsive-sub-small">{COPYRIGHT}</small>
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
            {FOOTER_INFO.map((info) => (
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
    </footer>
  );
};

export default Footer;
