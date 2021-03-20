import React from 'react';
import './ProductReview.css';

const ProductReview = (props) => {
   
    const {name,price,quantity,seller,key} = props.product;
    //console.log(props.product);
    return (
        <div className="product-review">
                <h3 className="name">{name}</h3>
                <br/>
                <p className="price">${price}</p>
                <p><small>sold by: {seller}</small></p>
                <p>Quantity: {quantity}</p>
                <button onClick={()=>props.removeProduct(key)} className="main-btn">Remove</button>
        </div>
    );
};

export default ProductReview;