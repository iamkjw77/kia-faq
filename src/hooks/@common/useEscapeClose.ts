import { useEffect } from 'react';

/** ESC 키를 눌렀을 때 모달을 닫기 위한 커스텀 훅 */

interface UseEscapeCloseProps {
  /** 모달 또는 팝업 오픈 상태 */
  isOpen: boolean;
  /** 모달을 닫는 함수 */
  onClose: () => void;
}

export const useEscapeClose = ({ isOpen, onClose }: UseEscapeCloseProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
};
