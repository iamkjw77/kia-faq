import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 *  @ClientOnlyPortal
 *    @사용목적
 *      1) 클라이언트 사이드에서만 포털(Portal)을 렌더링하기 위한 컴포넌트
 *      2) 서버 사이드 렌더링 환경(SSR)에서 발생할 수 있는 hydration 오류 방지
 *
 *    @주요기능
 *      1) 클라이언트가 마운트된 이후에만 Portal 렌더링
 *      2) `createPortal`을 사용하여 자식 컴포넌트를 지정된 DOM 요소로 렌더링
 */

interface ClientOnlyPortalProps {
  /** 포털로 렌더링할 React 요소 */
  children: React.ReactNode;
  /** 포털을 렌더링할 대상 DOM 요소 (기본값: document.body) */
  container?: HTMLElement;
}

const ClientOnlyPortal = ({
  children,
  container = document.body,
}: ClientOnlyPortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(children, container);
};

export default ClientOnlyPortal;
