import useLockBodyScroll from '@/hooks/@common/useLockBodyScroll';
import ClientOnlyPortal from '@/components/@common/ClientOnlyPortal';
import { useEffect } from 'react';
import { useEscapeClose } from '@/hooks/@common/useEscapeClose';

/**
 * @Confirm
 *   @사용목적
 *     - 사용자의 확인 액션을 유도하는 모달 컴포넌트
 *
 *   @주요기능
 *     1) `isOpen`이 true일 경우 포털을 통해 모달 표시
 *     2) ESC 키 입력 시 모달 닫힘
 *     3) 모달 열릴 동안 body 스크롤 잠금
 *     4) 외부에서 닫기 핸들러(onClose)로 닫기 제어
 *
 */

interface ConfirmProps {
  /** 모달 표시 여부 */
  isOpen: boolean;
  /** 모달 닫기 핸들러 */
  onClose: () => void;
  /** 모달 내부에 표시할 텍스트 */
  confirmText: string;
}

const Confirm = ({ isOpen, onClose, confirmText }: ConfirmProps) => {
  useLockBodyScroll(isOpen);
  useEscapeClose({ isOpen, onClose });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ClientOnlyPortal>
      <div className="fixed inset-0 z-200 flex items-start justify-center bg-black/50 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-[380px] bg-white shadow-lg px-lg text-center pb-lg">
          <p className="mt-[35px] font-semibold text-sm md:text-base lg:text-lg">
            {confirmText}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="w-[120px] h-[48px] border border-midnight-900 text-midnight-900 font-bold mt-[20px] hover:bg-gray-50 text-sm md:text-base lg:text-lg  font-semibold"
          >
            확인
          </button>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Confirm;
