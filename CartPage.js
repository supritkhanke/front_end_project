import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    // Implement checkout logic here
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go back</Link></p>
      ) : (
        <div className="cart">
          {cartItems.map((item) => (
            <div key={item.product}>
              <img src={item.imageUrl} alt={item.name} />
              <Link to={`/products/${item.product}`}>{item.name}</Link>
              <p>${item.price}</p>
              <button onClick={() => removeFromCartHandler(item.product)}>Remove</button>
            </div>
          ))}
          <button onClick={checkoutHandler}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
