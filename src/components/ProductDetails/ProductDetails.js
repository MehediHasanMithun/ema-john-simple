import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../fakeData';
import './ProductDetails.css';
const ProductDetails = () => {
    const {productKey} = useParams();
    const product = data.find(pd=>pd.key===productKey);
    const {img,name,seller,price,stock,features,star} = product;
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

export default ProductDetails;