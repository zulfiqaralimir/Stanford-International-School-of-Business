"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const ShopCartArea = () => {

    const [quantity, setQuantity] = useState(1);
    const [quantity2, setQuantity2] = useState(1);

    const increment = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };
  
    const decrement = () => {
      setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };


    const increment2 = () => {
      setQuantity2((prevQuantity2) => prevQuantity2 + 1);
    };
  
    const decrement2 = () => {
      setQuantity2((prevQuantity2) => (prevQuantity2 > 1 ? prevQuantity2 - 1 : 1));
    };




  return (
    <>
      <div className="cart-section section-padding">
            <div className="container">
                <div className="cart-list-area">
                    <div className="table-responsive">
                        <table className="table common-table">
                            <thead data-aos="fade-down">
                                <tr>
                                    <th className="text-center">Product</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-center">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="align-items-center py-3">
                                    <td>
                                        <div className="cart-item-thumb d-flex align-items-center gap-4">
                                            <i className="fas fa-times"></i>
                                            <img className="w-100" src="assets/img/shop/cart/01.jpg" alt="product" />
                                            <span className="head text-nowrap">A Prayer for Meany</span>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <span className="price-usd">
                                            $12.40 USD
                                        </span>
                                    </td>
                                    <td className="price-quantity text-center">
                                        <div className="quantity d-inline-flex align-items-center justify-content-center gap-1 py-2 px-4 border n50-border_20 text-sm">
                                        
                                         


                                        <button className="quantityDecrement" onClick={decrement2}>
                                                <i className="fal fa-minus"></i>
                                            </button>
                                            <input
                                                type="text"
                                                value={quantity2}
                                                className="quantityValue"
                                                readOnly
                                            />
                                            <button className="quantityIncrement" onClick={increment2}>
                                                <i className="fal fa-plus"></i>
                                            </button>

                                    </div>
                                    </td>
                                    <td className="text-center">
                                        <span className="price-usd">
                                            $12.40 USD
                                        </span>
                                    </td>
                                </tr>
                                <tr className="align-items-center py-3">
                                    <td>
                                        <div className="cart-item-thumb d-flex align-items-center gap-4">
                                            <i className="fas fa-times"></i>
                                            <img className="w-100" src="assets/img/shop/cart/02.jpg" alt="product" />
                                            <span className="head text-nowrap">Don Quixote</span>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <span className="price-usd">
                                            $25.50 USD
                                        </span>
                                    </td>
                                    <td className="price-quantity text-center">
                                        <div className="quantity d-inline-flex align-items-center justify-content-center gap-1 py-2 px-4 border n50-border_20 text-sm">
 

                                            <button className="quantityDecrement" onClick={decrement}>
                                                <i className="fal fa-minus"></i>
                                            </button>
                                            <input
                                                type="text"
                                                value={quantity}
                                                className="quantityValue"
                                                readOnly
                                            />
                                            <button className="quantityIncrement" onClick={increment}>
                                                <i className="fal fa-plus"></i>
                                            </button>

                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <span className="price-usd">
                                            $25.50 USD
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="coupon-items d-flex flex-md-nowrap flex-wrap justify-content-between align-items-center gap-4 pt-4">
                        <form onSubmit={e => e.preventDefault()} className="d-flex flex-sm-nowrap flex-wrap align-items-center gap-3">
                            <input type="text" placeholder="Enter coupon code" />
                            <button type="submit" className="theme-btn alt-color radius-xs">Apply</button>
                        </form>
                        <button type="button" className="theme-btn alt-color radius-xs">Update Cart</button>
                    </div>
                </div>
            </div>
        </div>

         
        <div className="cart-total-area section-padding pt-0">
            <div className="container">
                <div className="cart-total-items">
                    <h3>Cart totals</h3>
                    <ul>
                        <li>
                            Subtotal <span className="subtotal">$37.90 USD</span>
                        </li>
                        <li>
                            Total <span className="price">$37.90 USD</span>
                        </li>
                    </ul>
                    <Link href="/checkout" className="theme-btn">Proceed to Checkout</Link>
                </div>
            </div>
        </div>
    </>
  );
};

export default ShopCartArea;