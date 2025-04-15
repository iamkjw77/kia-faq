import { PROCESS_GUIDE } from '@/constants/faq';
import SectionContainer from '../@layout/SectionContainer';
import StepArrow from '@/components/@common/SVG/Icon/StepArrow';
import React from 'react';

const ProcessGuide = () => {
  return (
    <SectionContainer title={PROCESS_GUIDE.TITLE}>
      <ol className="flex flex-col gap-md lg:gap-0 lg:flex-row items-start lg:items-center">
        {PROCESS_GUIDE.PROCESS.map((process, index) => (
          <React.Fragment key={process.id}>
            <li className="flex lg:block flex-1 lg:mx-[12px] lg:pl-md">
              {process.icon}
              <div>
                <strong className="text-base md:text-lg">
                  {process.title}
                </strong>
                <p className="mt-xs text-sm md:text-base">
                  {process.description}
                </p>
              </div>
            </li>
            {index !== PROCESS_GUIDE.PROCESS.length - 1 && (
              <StepArrow
                className="hidden lg:inline-block"
                title="다음 단계"
                width="24"
                height="24"
              />
            )}
          </React.Fragment>
        ))}
      </ol>
    </SectionContainer>
  );
};

export default ProcessGuide;
