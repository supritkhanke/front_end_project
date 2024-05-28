import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    if (userInfo) {
      history.push('/');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={submitHandler}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
