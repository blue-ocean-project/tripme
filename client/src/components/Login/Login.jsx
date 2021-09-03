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
import config from '../../../config/config';
import { GoogleLogin } from 'react-google-login';

const Login = (props) => {
  const dispatch = useDispatch();
  const { openModal, openVerificationModal, login } = bindActionCreators(actions, dispatch);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [verifyType, setVerifyType] = useState('');
  const [verifyMethod, setVerifyMethod] = useState('email');

  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
  };

  const onFailure = (res) => {
    console.log('[Login failed] res:', res);
  };

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
        <GoogleLogin
          className="google-login-button"
          clientId={config.GOOGLE_CLIENT_ID}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        />
        <div />
        <div className="login-status">{statusMessage}</div>
        <Button
          className="login-button"
          variant="outline-info"
          onClick={() => {
            setVerifyType('login');
            const verifyUser = {
              email: email,
              password: password,
            };
            Server.post('/auth/login', verifyUser)
              .then((result) => {
                login(result.data);
                Server.post(`/invite/${trip}`, {
                  params: {
                    key: key,
                  },
                  user_id: result.data.user_id,
                });
                if (result.data.verified === 'pending') {
                  openVerificationModal();
                } else {
                  // window.location.reload();
                }
              })
              .catch((err) => {
                // console.log('err: ', err, 'err.response.data: ', err.response.data);
                setStatusMessage(err.response.data);
              });
          }}
        >
          Login
        </Button>
        <div />
        <Button
          className="login-button"
          variant="outline-danger"
          onClick={() => {
            setVerifyType('signup');
            openModal();
          }}
        >
          Signup
        </Button>
      </form>
      <SignupModal verifyMethod={verifyMethod} setVerifyMethod={setVerifyMethod} />
      <EmailVerification
        verifyType={verifyType}
        verifyMethod={verifyMethod}
        setVerifyMethod={setVerifyMethod}
      />
    </div>
  );
};

export default Login;
