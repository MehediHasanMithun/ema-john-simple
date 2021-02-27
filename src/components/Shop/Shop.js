import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
const Shop = () => {
    const first10product = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10product);
    return (
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product product={product}></Product>)
                    }
                </div>
                <div className="cart-container">
                        <h1>This is cart Container</h1>
                </div>
            </div>
    );
};

export default Shop;