import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ClientOnlyPortalProps {
  children: React.ReactNode;
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
