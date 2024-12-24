import React from 'react';
import Link from 'next/link';
import { Layout } from '@/types';
import classes from './LayoutCard.module.css';

type LayoutCardProps = {
  layout: Layout;
};

const LayoutCard: React.FC<LayoutCardProps> = ({ layout }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
      <Link
        href={`/layout/${layout.id}`}
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md relative"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${layout.imageUrl})` }}
      >
        <h3 className="absolute bottom-4 left-4 py-2 px-4 font-bold text-white uppercase bg-black/50 rounded-lg flex items-center">
          {layout.mainCategoryName}
          <Link href={`/maincategory/${layout.mainCategoryName}`} className="ml-2 text-white">
            →
          </Link>
        </h3>
      </Link>

      <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"></div>
    </div>
  );
};

export default LayoutCard;
