'use client';

import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useState,
} from 'react';

interface TabsProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

interface TabItemProps {
  label: string;
  value: string;
  children?: React.ReactNode;
}

export const TabItem = ({ children }: TabItemProps) => {
  return <>{children}</>;
};

interface TabsContextType {
  selected: string;
  setSelected: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('useTabsContext must be used within a <Tabs /> component');
  }

  return context;
};

const Tabs = ({ defaultValue, onChange, children }: TabsProps) => {
  const tabItems = Children.toArray(children).filter(
    isValidElement<TabItemProps>,
  );
  const firstTab = (tabItems[0] as React.ReactElement<TabItemProps>).props
    .value;
  const [selected, setSelected] = useState(defaultValue || firstTab);

  const handleClick = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <TabsContext.Provider value={{ selected, setSelected }}>
      <ul className="flex">
        {tabItems.map((child) => {
          if (!isValidElement<TabItemProps>(child)) return null;
          const { label, value } = child.props;
          const isActive = value === selected;

          return (
            <li
              key={value}
              className={`flex-1 text-sm md:text-lg lg:text-xl h-[40px] md:h-[46px] lg:h-[54px] ${
                isActive
                  ? 'border-1 border-midnight-900 font-bold bg-midnight-900 text-white'
                  : 'border-1 border-midnight-100 text-midnight-900 border-midnight-100 bg-white font-semibold'
              }`}
            >
              <button
                className="flex items-center justify-center p-xs w-full h-full cursor-pointer"
                type="button"
                onClick={() => handleClick(value)}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-md md:mt-lg lg:mt-[40px] xl:mt-xl">
        {tabItems.map((child) => {
          if (!isValidElement<TabItemProps>(child)) return null;
          return child.props.value === selected ? child : null;
        })}
      </div>
    </TabsContext.Provider>
  );
};

export default Tabs;
