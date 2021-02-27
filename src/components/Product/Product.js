import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props.Name);
    const {img,name,seller,price,stock,features,star} = props.product;

    return (
        <div className="product-details">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="without-img-details">
                <h4 className="name">{name}</h4>
               <div className="other-details">
                   <div>
                        <p><small>by: {seller}</small></p>
                        <p>${price}</p>
                        <p><small>only {stock} left in stock - order soon</small></p>
                        <button className="main-btn">add to cart</button>
                   </div>
                   <div className="feature">
                        <p>star:{star}</p>
                        <h4>Features</h4>
                        <ul>
                        {
                            features.map(feature =><li><small>{feature.description}: {feature.value}</small></li>)
                        }
                        </ul>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default Product;