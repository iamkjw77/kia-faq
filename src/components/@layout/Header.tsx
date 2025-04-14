'use client';

import Link from 'next/link';
import Logo from '../@common/SVG/Icon/Logo';
import { useState } from 'react';
import { HEADER_NAVIGATION } from '@/constants/@common';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMenuOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className="fixed top-0 z-100 w-full side-padding">
      <div className="flex items-center justify-between h-[56px] lg:h-[80px]">
        {/* Logo */}
        <Link href="/">
          <Logo
            className="w-[110px] h-[40px] lg:w-[140px] lg:h-[80px]"
            title="기아 비즈"
            width="140"
            height="80"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-between">
          <ul className="flex gap-4">
            {HEADER_NAVIGATION.map((navItem) => (
              <li key={navItem.title}>
                <Link
                  href={navItem.path}
                  className="flex items-center text-lg font-semibold h-[80px] px-xxs"
                >
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
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
                  className="w-full flex justify-center text-2xl font-semibold leading-[56px] mb-xs"
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
    </header>
  );
};

export default Header;
