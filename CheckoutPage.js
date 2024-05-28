import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress, createOrder } from '../actions/orderActions';

const CheckoutPage = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    dispatch(createOrder({
      orderItems: cartItems,
      shippingAddress: { address, city, postalCode, country },
      paymentMethod,
      itemsPrice: cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
      taxPrice: 0,
      shippingPrice: 0,
      totalPrice: cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
    }));
    history.push('/order');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <label>City</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div>
          <label>Postal Code</label>
          <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
        </div>
        <div>
          <label>Country</label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
        </div>
        <div>
          <label>Payment Method</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="PayPal">PayPal</option>
            <option value="Stripe">Stripe</option>
          </select>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
