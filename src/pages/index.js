import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import { getProductsInCollection } from '../../lib/shopify'
import ProductList from '@/components/ProductList/ProductList'

import HomePage from './home'


export default function Home({ products}) {

 
  return (
    <>
      
       
        <HomePage/>
     
    </>
  )
}


export async function getStaticProps() {

  const products = await getProductsInCollection();

  return {
    props: { products}, // will be passed to the page component as props
  }
}
