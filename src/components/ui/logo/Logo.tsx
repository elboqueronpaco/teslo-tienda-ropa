import Link from 'next/link'
import React from 'react'
import { TitleLogo } from '.'

export const Logo = () => {
  return (
    <div>
        <Link href='/'>
            <TitleLogo title='Teslo | '/>
            <span>tienda de ropa</span>
        </Link>
    </div>
  )
}
