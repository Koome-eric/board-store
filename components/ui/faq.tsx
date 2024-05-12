"use client";

import { FAQ_DATA } from '@/constants';
import FAQLayout from './FAQLayout';  // Ensure this path is correct
import React, { useState } from 'react';

const FAQ = () => {
  const [active, setActive] = useState(new Array(FAQ_DATA.length).fill(false));

  const handleClick = () => {
    const isSomeActive = active.some(a => a);
    setActive(active.map(() => !isSomeActive));
  };

  return (
    <FAQLayout
      handleClick={handleClick}
      isSomeActive={active.some(a => a)}
      data={FAQ_DATA}
      turn={active}
      setTurn={setActive}
    />
  );
};

export default FAQ;
