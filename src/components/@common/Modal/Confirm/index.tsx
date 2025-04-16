import useLockBodyScroll from '@/hooks/@common/useLockBodyScroll';
import ClientOnlyPortal from '../../ClientOnlyPortal';
import { useEffect } from 'react';

interface ConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  confirmText: string;
}

const Confirm = ({ isOpen, onClose, confirmText }: ConfirmProps) => {
  useLockBodyScroll(isOpen);

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
