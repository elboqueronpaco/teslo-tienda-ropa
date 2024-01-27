import { Product } from '@/interfaces'
import React from 'react'
import { CardProduct } from './CardProduct'
interface Props {
    products: Product[]
}

export const ListProducts = ({products}: Props) => {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10`}>
        {
            products.map(product => (
                <CardProduct
                    key={product.slug}
                    product={product}
                />
            ))
        }
    </div>
  )
}
