import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log("props",props);
    const { img, name, seller, price, stock, features, star, key } = props.product;
    return (
        <div className="product-details">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="without-img-details">
                <h4 className="name"><Link className="link-style" to={"/shop/product/" + key}>{name}</Link></h4>
                <div className="other-details">
                    <div>
                        <p><small>by: {seller}</small></p>
                        <p>${price}</p>
                        <p><small>only {stock} left in stock - order soon</small></p>
                        <button onClick={() => props.handleAddButton(props.product)} className="main-btn">{element} add to cart</button>
                    </div>
                    <div className="feature">
                        <p>star:{star}</p>
                        <h4>Features</h4>
                        <ul>
                            {
                                features.map(feature => <li><small>{feature.description}: {feature.value}</small></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;