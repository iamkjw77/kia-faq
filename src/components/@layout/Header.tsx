'use client';

import Link from 'next/link';
import Logo from '../@common/SVG/Icon/Logo';
import { useCallback, useEffect, useState } from 'react';
import { HEADER_NAVIGATION } from '@/constants/@common';
import throttle from '@/utils/dom/throttle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // 스크롤 이벤트에 따라 헤더 그림자 스타일 설정
  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 0);
    }, 300);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-100 w-full side-padding bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-[0_4px_32px_0_rgba(0,0,0,0.08)]' : ''
      }`}
    >
      <div className="mx-auto max-w-[1660px]">
        <div className="flex items-center justify-between h-[56px] lg:h-[80px]">
          {/* 로고 */}
          <Link href="/">
            <Logo
              className="w-[110px] h-[40px] lg:w-[140px] lg:h-[80px]"
              title="기아 비즈"
              width="140"
              height="80"
            />
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden lg:flex items-center justify-between">
            <ul className="flex gap-[2rem]">
              {HEADER_NAVIGATION.map((navItem) => (
                <li key={navItem.title}>
                  <Link
                    href={navItem.path}
                    className="flex items-center text-lg font-bold h-[80px] px-xxs"
                  >
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 모바일 메뉴 버튼 (햄버거 버튼) */}
          <button
            type="button"
            onClick={handleMobileMenuToggle}
            className="w-[40px] h-[40px] border-10 border-transparent lg:hidden cursor-pointer flex items-center justify-center"
          >
            <div className="w-[20px] h-[20px] relative right-[-10px] overflow-hidden">
              <span
                className={`absolute left-[-2px] w-[24px] h-0.5 bg-black transform transition duration-600 ease-out ${
                  isMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
                }`}
              />
              <span
                className={`absolute left-[-2px] w-[24px] h-0.5 bg-black transform transition duration-600 ease-out ${
                  isMenuOpen ? 'translate-x-[120%] top-2.5' : 'top-2.5'
                }`}
              />
              <span
                className={`absolute left-[-2px] w-[24px] h-0.5 bg-black transform transition duration-600 ease-out ${
                  isMenuOpen ? '-rotate-45 top-2.5' : 'top-4'
                }`}
              />
            </div>
          </button>
        </div>

        {/* 모바일 메뉴 드로어 */}
        <div
          className={`fixed lg:hidden left-0 top-[56px] lg:top-[80px] w-full z-50 bg-white transition-transform duration-700 ease-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } h-[calc(100vh-56px)]`}
        >
          <nav className="px-xl mt-3xl">
            <ul className="w-full">
              {HEADER_NAVIGATION.map((navItem) => (
                <li key={navItem.title}>
                  <Link
                    className="w-full flex justify-center text-2xl font-bold leading-[56px] mb-xs"
                    href={navItem.path}
                    onClick={handleMobileMenuToggle}
                  >
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
