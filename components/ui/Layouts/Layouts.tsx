import React from 'react';
import Link from 'next/link';
import { Layout } from '@/types';
import LayoutCard from './LayoutCard/LayoutCard';
import classes from './Layouts.module.css';

const Layouts = ({ layouts }: { layouts: Layout[] }) => {
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3 className="text-xl font-bold mt-6">
          Shop by <span className="text-custom-red">Main Categories</span>
        </h3>
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
