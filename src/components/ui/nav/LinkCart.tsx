import React from 'react'
import styles from './nav.module.css'
import Link from 'next/link'
import { IoCartOutline } from 'react-icons/io5'
import { TopCartNumber } from './TopCartNumber'

export const LinkCart = () => {
  return (
    <Link className={`${styles['nav-end__link']}`} href={'/cart'}>
        <div className="relative">
            <TopCartNumber number={0}/>
            <IoCartOutline size={25}/>
        </div>
    </Link>
  )
}
