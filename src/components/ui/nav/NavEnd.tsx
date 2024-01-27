import React from 'react'
import styles from './nav.module.css'
import { LinkSearch } from './LinkSearch'
import { ButtonMenu, LinkCart } from '.'
export const NavEnd = () => {
  return (
    <nav className={`${styles['nav-end']}`}>
        <LinkSearch/>
        <LinkCart/>
        <ButtonMenu/>
    </nav>
  )
}
