import React from 'react';
import { Layout, Category } from '@/types';
import CategoryCard from '@/components/ui/Categories/CategoryCard/CategoryCard'; // Adjust the path as needed
import classes from './LayoutCategories.module.css';

interface LayoutCategoriesProps {
  layout: Layout;
  categories: Category[];
}

const LayoutCategories: React.FC<LayoutCategoriesProps> = ({ layout, categories }) => {
  const filteredCategories = categories.filter(category => category.layoutId === layout.id);

  return (
    <section className={classes.container}>
      
      <div className={classes.list}>
        {filteredCategories.length > 0 ? (
          filteredCategories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))
        ) : (
          <p className="text-center text-gray-600">No categories found.</p>
        )}
      </div>
    </section>
  );
};

export default LayoutCategories;
