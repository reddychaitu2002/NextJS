import ProductsHero from '@/containers/products-page/products-hero';
import PromiseItems from '@/containers/products-page/items-section';
import ProductsSearch from '@/containers/products-page/search-section';
import React, { FC } from 'react'

interface ProductsProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

const Products: FC<ProductsProps> = async({ searchParams }) => {
  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  console.log(page)
  return (
    <main>
        <ProductsHero />
        <ProductsSearch />
        <PromiseItems />
    </main>
  )
}

export default Products;