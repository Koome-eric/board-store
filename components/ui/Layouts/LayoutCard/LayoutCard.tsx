import React from 'react';
import Link from 'next/link';
import { Layout } from '@/types';
import classes from './LayoutCard.module.css';

type LayoutCardProps = {
  layout: Layout;
};

const LayoutCard: React.FC<LayoutCardProps> = ({ layout }) => {
  return (
    <Link
      href={`/layout/${layout.id}`}
      className={classes.card}
      style={{ backgroundImage: `url(${layout.imageUrl})` }}
    >
      <p className={classes.title}>{layout.mainCategoryName}</p>
      
    </Link>
  );
};

export default LayoutCard;
