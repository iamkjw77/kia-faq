'use client';

import { useRef, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const footerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Header />
      <main className="side-padding pb-3xl mt-[56px] lg:mt-3xl m">
        <div className="max-w-[1240px] mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Container;
