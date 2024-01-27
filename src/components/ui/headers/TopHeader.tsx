import React from 'react'
import styles from './top-header.module.css'
import { Logo, Nav, NavEnd } from '..'
import { initialDataMenu } from '@/seed'
const menu = initialDataMenu.menuGender
export const TopHeader = () => {
  return (
    <header className={`${styles['top-header']}`}>
        <Logo/>
        <Nav menu={menu}/>
        <NavEnd/>
    </header>
  )
}
