import { titleFont } from '@/config'
import React from 'react'
import styles from './logo.module.css'
interface Props {
    title: string
}

export const TitleLogo = ({title}: Props) => {
  return (
    <span className={`${ titleFont.className} ${styles['title-logo']}`}>{title}</span>
  )
}
