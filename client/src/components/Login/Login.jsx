/* eslint-disable object-shorthand */
import './Login.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import SignupModal from './SignupModal.jsx';
import actions from '../../state/actions';
import Server from '../../lib/Server';

const Login = () => {
  const dispatch = useDispatch();
  const { openModal } = bindActionCreators(actions, dispatch);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalidStatus] = useState(true);
  const [hasError, setError] = useState(false);

  return (
    <>
      <div className="login-welcome">Welcome to Trip.Me!</div>
      {hasError ? (
        <div className="login-errors">
          {invalid ? <span>Invalid Username/Password</span> : <span>Please verify your email</span>}
        </div>
      ) : null}
      <form className="login-field">
        <input
          className="login-email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div />
        <input
          className="login-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div />
        <Button
          className="login-button"
          variant="outline-info"
          onClick={() => {
            const verifyUser = {
              email: email,
              password: password,
            };
            Server.post('/auth/login', verifyUser)
              .then(() => {
                window.location.reload();
              })
              .catch((err) => {
                if (err.response.data === 'Login Failed: Invalid Syntax.') {
                  setError(true);
                } else {
                  setInvalidStatus(false);
                }
              });
          }}
        >
          Login
        </Button>
        <div />
        <Button className="login-button" variant="outline-danger" onClick={() => openModal()}>
          Signup
        </Button>
      </form>
      <SignupModal />
    </>
  );
};

export default Login;
