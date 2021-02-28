import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10product = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10product);
    
    const [cart, setCart] = useState([]);

    const handleAddButton = (product) => {
      const newCart = [...cart,product];
      setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product handleAddButton={handleAddButton} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart product={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;