import React from 'react'
import Link from 'next/link'
import { Category } from '@/types'
import classes from './CategoryCard.module.css'

type CategoryCardProps = {
    category: Category
  }
  
  const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
      <Link
        href={`/category/${category.id}`}
        className={classes.card}
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      >
        <p className={classes.title}>{category.name}</p>
      </Link>
    )
  }
  
  export default CategoryCard
