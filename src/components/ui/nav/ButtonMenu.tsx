import React from 'react'
import styles from './nav.module.css'

export const ButtonMenu = () => {
  return (
    <button className={`${styles['nav-end__link']} ${styles['nav-button']}`}>menu</button>
  )
}
