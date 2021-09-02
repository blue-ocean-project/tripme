/* eslint-disable object-shorthand */
import './Login.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import SignupModal from './SignupModal.jsx';
import actions from '../../state/actions';
import Server from '../../lib/Server';
import EmailVerification from './EmailVerification.jsx';
// import Form from 'react-bootstrap/Form';

const Login = () => {
  const dispatch = useDispatch();
  const { openModal, openVerificationModal, login } = bindActionCreators(actions, dispatch);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  return (
    <div>
      <div className="login-welcome">Welcome to Trip.Me!</div>
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
        <div className="login-status">{statusMessage}</div>
        <Button
          className="login-button"
          variant="outline-info"
          onClick={() => {
            const verifyUser = {
              email: email,
              password: password,
            };
            Server.post('/auth/login', verifyUser)
              .then((result) => {
                console.log('result.data: ', result.data);
                login('testing if state changes');
              })
              .then(() => openVerificationModal())
              .catch((err) => {
                console.log('err: ', err, 'err.response.data: ', err.response.data);
                setStatusMessage(err.response.data);
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
      <EmailVerification />
    </div>
  );
};

export default Login;
