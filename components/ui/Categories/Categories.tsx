import React from 'react'
import Link from 'next/link'
import { Category } from '@/types'
import CategoryCard from './CategoryCard/CategoryCard'
import classes from './Categories.module.css'

const Categories = ({ categories }: { categories: Category[] }) => {
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
      <h3 className="font-bold text-3xl mb-2 text-center mt-10">Shop by categories</h3>
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
