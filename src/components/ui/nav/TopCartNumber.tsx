import React from 'react'
import styles from './nav.module.css'
interface Props {
    number: number
}
export const TopCartNumber = ({number=0}: Props) => {
  return (
    <span className={`${styles['top-cart__number']}`}>
        {number}
    </span>
  )
}
