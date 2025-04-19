import { useEffect } from 'react';

/**
 * 모달 등의 UI가 열렸을 때, 배경 스크롤을 잠그는 커스텀 훅
 *
 * @param isLocked - true일 경우 body 스크롤을 잠금, false일 경우 해제
 */

const useLockBodyScroll = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) return;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLocked]);
};

export default useLockBodyScroll;
