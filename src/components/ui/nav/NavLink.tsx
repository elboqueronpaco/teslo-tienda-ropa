'use client'
import { Menu } from '@/interfaces'
import Link from 'next/link'
import React from 'react'
import styles from './nav.module.css'
import { usePathname } from 'next/navigation'
interface Props {
    menu: Menu
}
export const NavLink = ({ menu }: Props) => {
    const pathname = usePathname()
  return (
    <Link className={`${styles['nav-link']} ${pathname === menu.url ? styles.active : ''}`} href={`/gender/${menu.url}`}>{menu.label}</Link>
  )
}
