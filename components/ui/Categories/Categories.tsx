import React from 'react'
import Link from 'next/link'
import { Category } from '@/types'
import CategoryCard from './CategoryCard/CategoryCard'
import classes from './Categories.module.css'

const Categories = ({ categories }: { categories: Category[] }) => {
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
      <h3 className="text-3xl font-bold text-center mt-4">Shop by <span className="text-custom-red">Categories</span></h3>
      </div>

      <div className={classes.list}>
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}

export default Categories
