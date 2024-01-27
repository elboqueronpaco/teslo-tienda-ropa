import { titleFont } from '@/config'
import { initialData } from '@/seed'
import { notFound } from 'next/navigation'
import React from 'react'
interface Props{
    params: {
        slug: string
    }
}
export default function ({params}: Props) {
    const { slug} = params
    const product = initialData.products.find( product => product.slug === slug )
    if(!product) {
        notFound()
    }
  return (
    <div className='mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3"'>
        {/* Slideshow */}
        <section className='col-span-1 md:col-span-2'>
            Slideshow
        </section>
        {/* Detalles */}
        <aside className='col-span-1 px-5'>
            <h1 className={`${ titleFont.className } antialiased font-bold text-xl`}>{product.title}</h1>
            <p className="text-lg mb-5">{product.price} €</p>
            {/** TODO: Selector de Tallas SizeSelector */}
            {/** TODO: Selector de Cantidad QuantitySelector */}
            {/** Button de Carito de comprar */}
            <button className="btn-primary my-5">
                Agregar al carrito
            </button>
            {/** Descripcion */}
            <h3 className="font-bold text-sm">Descripción</h3>
            <p className="font-light">{product.description}</p>
        </aside>
    </div>
  )
}
