// components/ui/Accordion.tsx
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import plus from '../../public/plus.svg';  // Ensure this path is correct
import minus from '../../public/minus.svg';  // Ensure this path is correct

interface Props {
  question: string;
  answer: string;
  turn: boolean[];
  setTurn: React.Dispatch<React.SetStateAction<boolean[]>>;
  idx: number;
}

const Accordion = ({ question, answer, turn, setTurn, idx }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = turn[idx] ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [turn, idx]);

  const toggleAccordion = () => {
    const newTurn = [...turn];
    newTurn[idx] = !newTurn[idx];
    setTurn(newTurn);
  };

  return (
    <div className='w-full px-2'>
      <button onClick={toggleAccordion} className='w-full text-left'>
        <div className='flex justify-between items-center py-3'>
          <span className='text-lg text-black bold-18'>{question}</span>
          <Image src={turn[idx] ? minus : plus} alt="" width={20} height={20} />
        </div>
        <div ref={contentRef} className='overflow-hidden transition-all duration-500'>
          <p className='py-1 text-justify text-sm'>{answer}</p>
        </div>
      </button>
    </div>
  );
};

export default Accordion;
