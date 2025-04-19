import { useEffect, useRef, useState } from 'react';

/**
 * 요소가 뷰포트에 진입했는지 여부를 감지하는 커스텀 훅
 * IntersectionObserver를 활용하며, 특정 조건(enabled)이 true일 때만 동작
 *
 * @param enabled - 관찰 기능을 활성화할지 여부 (기본값: true)
 * @returns ref - 관찰할 요소에 연결할 ref
 * @returns isIntersecting - 요소가 현재 뷰포트 안에 있는지 여부
 */

const useInView = (enabled: boolean = true) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current || !enabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [enabled]);

  return { ref, isIntersecting };
};

export default useInView;
