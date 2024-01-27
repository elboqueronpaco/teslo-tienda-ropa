import { Menu } from '@/interfaces'
import React from 'react'
import { NavLink } from './NavLink'
interface Props {
  menu: Menu[]
}
export const Nav = ({menu}: Props) => {
  return (
    <nav className='hidden sm:block'>
      {
        menu.map( link => (
          <NavLink key={link.label} menu={link}/>
        ))
      }
    </nav>
  )
}
