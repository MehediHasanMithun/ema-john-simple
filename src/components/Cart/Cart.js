import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const product = props.product;
    const item = props.product.length;
    let items = 0;
    for(let i=0;i<item;i++){
        const element = product[i].price;
        items=items+element;
    }
    //const total = product.reduce((total,product)=>total+product.price,0);
    //console.log(total);
    let shipping = 0;
    for(let i=0;i<item;i++){
        const element = product[i].shipping;
        shipping=shipping+element;
    }
    //const shipping = product.reduce((shipping,product)=>shipping+product.shipping,0);
    //console.log(shipping);
    const totalBeforeTax = shipping+items;
    const estimatedTax = totalBeforeTax*(0.1);
    const orderTotal = totalBeforeTax+estimatedTax;
    return (
        <div className="cart-summary">
            <div className="heading">
                <h3>Order Summary</h3>
                <p>Items ordered: {item}</p>
            </div>
            <div className="price-details">
                <table>
                    <tr>
                        <td>Items:</td>
                        <td>${items.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td> Shipping & Handling:</td>
                        <td>${shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td> Total before tax:</td>
                        <td>${totalBeforeTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${estimatedTax.toFixed(2)}</td>
                    </tr>
                    <tr className="order-total">
                        <td> Order Total:</td>
                        <td>${orderTotal.toFixed(2)}</td>
                    </tr>
                </table>
                <button className="main-button">Review your order</button>
            </div>
        </div>
    );
};

export default Cart;