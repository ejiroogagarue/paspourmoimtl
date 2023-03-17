import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '@/utils/helpers';
const ProductCard = ({product}) => {

    const { handle , title } = product.node
    const {altText, url} = product.node.images.edges[0].node 
    const price = product.node.priceRange.minVariantPrice.amount
    return (
        <Link href={`/products/${handle}`}>
            <div>
                <div>
                    <Image src={url} alt={altText} width={500}
      height={500}/>
                </div>
            </div>
            <h3>{title}</h3>
            <p>{formatter.format(price)}</p>
        </Link>
    );
};

export default ProductCard;