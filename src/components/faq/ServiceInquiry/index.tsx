import { SERVICE_INQUIRY } from '@/constants/faq';
import SectionContainer from '../@layout/SectionContainer';

const ServiceInquiry = () => {
  return (
    <SectionContainer title={SERVICE_INQUIRY.TITLE}>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] md:gap-[24px]">
        {SERVICE_INQUIRY.TYPES.map((type, index) => (
          <li
            key={type.id}
            className={`
            h-[72px] md:h-[80px]
            ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
          `}
          >
            <a
              className="h-full flex items-center justify-start md:justify-center border border-midnight-900 px-[1.4em] hover:bg-gray-50"
              href={type.href}
            >
              <span className="mr-xs">{type.icon}</span>
              <div>
                <span className="responsive-btn-xxlg text-midnight-900">
                  {type.title}
                </span>
                {type.description && (
                  <div className="text-[14px] text-gray-500">
                    {type.description}
                  </div>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default ServiceInquiry;
