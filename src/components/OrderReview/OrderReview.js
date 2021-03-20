import React, { useEffect, useState } from 'react'; import ProductReview from '../ProductReview/ProductReview';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import { useHistory } from 'react-router-dom';
import './OrderReview.css';
const OrderReview = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const productFromCart = getDatabaseCart();
    const productKeys = Object.keys(productFromCart);
    const product = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = productFromCart[key];
      return product;
    })
    setCarts(product);
  }, []);
  const removeProduct = productKey => {
    const product = carts.filter(pd => pd.key !== productKey);
    setCarts(product);
    removeFromDatabaseCart(productKey);
  }
  const history = useHistory();
  const handleProceedCheckOut = () => {
    history.push("/shipment");  
  }
  return (
    <div className="shop-container">
      <div>
        {
          carts.map(product => <ProductReview key={product.key} product={product} removeProduct={removeProduct}></ProductReview>)
        }
       
      </div>
      <div className="cart-container">
        <Cart product={carts}>
         
            <button onClick={handleProceedCheckOut} className="main-button">Proceed CheckOut</button>
         
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;