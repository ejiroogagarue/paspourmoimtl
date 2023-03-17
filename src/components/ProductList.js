import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    return (
        <div >
            <div>
                <h2>Products</h2>
            </div>
            <div>
                {
                    products.map(product => (
                        <ProductCard key={product.node.id} product={product}/>
                       
                    ))
                }
            </div>
        </div>
    );
};

export default ProductList;