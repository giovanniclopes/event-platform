import React, { useState } from 'react';
import { CaretUp, CaretDown } from 'phosphor-react';
import 'tailwindcss/tailwind.css';

interface AccordionProps {
  title: string;
  description: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border-b border-gray-500 rounded-ss-md mb-4">
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer 1rounded-t-md"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-normal cursor-pointer">{title}</h2>
        {isOpen ? (
          <CaretUp className="text-gray-500" size={24} />
        ) : (
          <CaretDown className="text-gray-500" size={24} />
        )}
      </div>
      {isOpen && <div className="px-4 py-3 font-light"><p>{description}</p></div>}
    </div>
  );
};

export default Accordion;
