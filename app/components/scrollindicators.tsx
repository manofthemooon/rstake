import React from 'react';

interface ScrollIndicatorsProps {
  activeBlock: number;
  onClick: (index: number) => void;
  blockCount: number;
}

const ScrollIndicators: React.FC<ScrollIndicatorsProps> = ({ activeBlock, onClick, blockCount }) => {
  return (
    <div className="fixed top-1/2 right-4 flex flex-col space-y-2 transform -translate-y-1/2">
      {Array.from({ length: blockCount }).map((_, index) => (
        <div
          key={index}
          onClick={() => onClick(index)}
          className={`w-1 h-8 rounded-md cursor-pointer transition-all duration-300 ${activeBlock === index ? 'bg-white' : 'bg-gray-600'}`}
        />
      ))}
    </div>
  );
};

export default ScrollIndicators;