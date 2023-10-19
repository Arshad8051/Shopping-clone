import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Linkto,Link, useNavigate } from 'react-router-dom';

import './Cart.css';

const Cart = () => {
  const location = useLocation();
  const cartItems = JSON.parse(localStorage.getItem("cartData"))

  const [cart, setCart] = useState(cartItems); // Use state to manage cart items

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
   setCart(updatedCart)
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
    // Update the cart state to reflect the removed item
  };

  const navigate = useNavigate();

  return (
    <div className="cartproducts">
      {cart.length === 0 ? (
        <p className="cartpar">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div>
                <img className="cartimg" src={item.image} alt={item.title} />
                <p>
                  {item.title} - ${item.price}
                </p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
                <button
                  className="button"
                  onClick={() => navigate('/payment')}
                >
                  Payment
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
