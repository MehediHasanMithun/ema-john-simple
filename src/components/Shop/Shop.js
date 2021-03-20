import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
const Shop = () => {
    const first10product = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10product);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const productFromCart = getDatabaseCart();
        const productKeys = Object.keys(productFromCart);
        const product = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = productFromCart[key];
            return product;
        })
        setCart(product);
    }, []);

    const handleAddButton = (product) => {
        let count = 1;
        let newCart;
        const sameProduct = cart.find(pd => pd.key === product.key);
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const othersProduct = cart.filter(pd => pd.key !== product.key);
            newCart = [...othersProduct, sameProduct];
        }
        else {
            product.quantity = count;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product handleAddButton={handleAddButton} key={product.key} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart product={cart}>
                    <Link to="/order review">
                        <button className="main-button">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;