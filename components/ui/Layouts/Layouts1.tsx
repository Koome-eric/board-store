import React from 'react';
import Link from 'next/link';
import { Layout } from '@/types';
import LayoutCard from './LayoutCard/LayoutCard';
import classes from './Layouts.module.css';

const Layouts = ({ layouts }: { layouts: Layout[] }) => {
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        
      </div>

      <div className={classes.list}>
        {layouts.map(layout => (
          <LayoutCard key={layout.id} layout={layout} />
        ))}
      </div>
    </section>
  );
};

export default Layouts;
