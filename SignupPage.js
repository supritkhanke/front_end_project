import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

const SignupPage = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, error } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
    if (userInfo) {
      history.push('/');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {error && <p>{error}</p>}
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
