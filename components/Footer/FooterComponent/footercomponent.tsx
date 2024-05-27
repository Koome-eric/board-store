'use client'

import React from 'react'
import Image from 'next/image'

import { inclusions } from '../../../constants'

import classes from './footercomponent.module.css'

const FooterComponent = () => {
   return (
    <footer className="-mt-10">
        <div className="padding-container flexCenter">
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={40}
                height={40}
                className={classes.icon}
              />

              <h3 className={classes.title}>{inclusion.title}</h3>
              <p className={classes.description}>{inclusion.description}</p>
            </li>
          ))}
        </ul>
        </div>  
      
    </footer>
  )
}

export default FooterComponent