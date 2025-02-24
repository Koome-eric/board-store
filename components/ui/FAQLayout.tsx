import React, { Dispatch, SetStateAction } from 'react';
import Accordion from './Accordion';  // Ensure this path is correct
import Image from 'next/image';
import down from '../../public/down.svg';  // Ensure this path is correct
import classes from './../Product/product.module.css'

interface FAQData {
  question: string;
  answer: string;
  idx: number;
}

interface LayoutProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  isSomeActive: boolean;
  turn: boolean[];
  setTurn: Dispatch<SetStateAction<boolean[]>>;
  data: FAQData[];
}

const Layout = ({ handleClick, isSomeActive, data, turn, setTurn }: LayoutProps) => {
  return (
    <section className="w-full max-w-none px-4 lg:px-20 mb-10 mt-2">
      <div className="flex flex-col items-center w-full">
      <div className={classes.titleWrapper}>
        <h3 className="text-3xl font-bold md:text-2xl sm:text-xl my-8 lg:my-10">Frequently <span className="text-custom-red">Asked Questions</span></h3>
        </div>
        <button
          className="flex items-center justify-between mb-6 px-6 py-2 text-sm lg:text-base font-bold bg-slate-50 rounded-full"
          onClick={handleClick}
        >
          <span className="text-black">{!isSomeActive ? "Open All" : "Close All"}</span>
          <Image src={down} alt="toggle" width={40} height={40} className={isSomeActive ? "rotate-180" : ""}/>
        </button>
        {data.map((el, i) => (
          <Accordion
            key={"faq-" + i}
            question={el.question}
            answer={el.answer}
            turn={turn}
            setTurn={setTurn}
            idx={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Layout;
