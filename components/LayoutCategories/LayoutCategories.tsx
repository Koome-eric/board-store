import React from 'react';
import { Layout, Category } from '@/types';
import CategoryCard from './../ui/Categories/CategoryCard/CategoryCard'; // Adjust the path as needed
import classes from './LayoutCategories.module.css';

interface LayoutCategoriesProps {
  layout: Layout;
  categories: Category[];
}

const LayoutCategories: React.FC<LayoutCategoriesProps> = ({ layout, categories }) => {
  const filteredCategories = categories.filter(category => category.layoutId === layout.id);

  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3 className="text-3xl font-bold text-center mt-4">
          {layout.mainCategoryName}
        </h3>
      </div>
      <div className={classes.list}>
        {filteredCategories.length > 0 ? (
          filteredCategories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </section>
  );
};

export default LayoutCategories;
