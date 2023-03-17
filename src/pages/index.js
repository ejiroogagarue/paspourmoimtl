import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getProductsInCollection } from '../../lib/shopify'
import ProductList from '@/components/ProductList'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products}) {

  console.log(products)
  return (
    <>
      <div>
        Hello form Shopify Next.js
        <ProductList products={products}/>
      </div>
    </>
  )
}


export async function getStaticProps() {

  const products = await getProductsInCollection();

  return {
    props: { products}, // will be passed to the page component as props
  }
}
