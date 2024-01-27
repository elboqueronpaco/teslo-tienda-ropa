import Link from 'next/link'
import React from 'react'
import {IoSearchOutline} from 'react-icons/io5'
import styles from './nav.module.css'
export const LinkSearch = () => {
  return (
    <Link className={`${styles['nav-end__link']}`} href={'/search'}>
        <IoSearchOutline size={25}/>
    </Link>
  )
}
