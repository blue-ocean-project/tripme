/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable object-shorthand */
import './Login.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import SignupModal from './SignupModal.jsx';
import actions from '../../state/actions';
import Server from '../../lib/Server';
import EmailVerification from './EmailVerification.jsx';
import config from '../../../config/config';

const Login = () => {
  const dispatch = useDispatch();
  const { openModal, openVerificationModal, login } = bindActionCreators(actions, dispatch);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [verifyType, setVerifyType] = useState('');
  const [verifyMethod, setVerifyMethod] = useState('email');
  const history = useHistory();

  const onSuccess = (res) => {
    Server.post('/auth/login', {
      email: res.profileObj.email,
      password: res.profileObj.googleId,
    })
      .then((result) => {
        login(result.data);
        if (window.localStorage.getItem('tripId') && window.localStorage.getItem('key')) {
          Server.post(
            `/invite/${window.localStorage.getItem('tripId')}?key=${window.localStorage.getItem(
              'key',
            )}`,
            {
              user_id: result.data.user_id,
            },
          );
          window.localStorage.removeItem('tripId');
          window.localStorage.removeItem('key');
        }
      })
      .catch(() => {
        const newUser = {
          first_name: res.profileObj.givenName,
          last_name: res.profileObj.familyName,
          email: res.profileObj.email,
          password: res.profileObj.googleId,
          verified: 'verified',
        };
        return Server.post('/signup', newUser);
      })
      .then((result) => {
        login(result.data);
        if (window.localStorage.getItem('tripId') && window.localStorage.getItem('key')) {
          Server.post(
            `/invite/${window.localStorage.getItem('tripId')}?key=${window.localStorage.getItem(
              'key',
            )}`,
            {
              user_id: result.data.user_id,
            },
          );
          window.localStorage.removeItem('tripId');
          window.localStorage.removeItem('key');
        }
      })
      .finally(() => history.push('/'));
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
        <br />
        <GoogleLogin
          className="google-login-button"
          clientId={config.GOOGLE_CLIENT_ID}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
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
                if (window.localStorage.getItem('tripId') && window.localStorage.getItem('key')) {
                  Server.post(
                    `/invite/${window.localStorage.getItem(
                      'tripId',
                    )}?key=${window.localStorage.getItem('key')}`,
                    {
                      user_id: result.data.user_id,
                    },
                  );
                  window.localStorage.removeItem('tripId');
                  window.localStorage.removeItem('key');
                }
                if (result.data.verified === 'pending') {
                  openVerificationModal();
                } else {
                  history.push('/');
                }
              })
              .catch((err) => {
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
      <SignupModal
        verifyMethod={verifyMethod}
        setVerifyMethod={(method) => setVerifyMethod(method)}
      />
      <EmailVerification
        verifyType={verifyType}
        verifyMethod={verifyMethod}
        setVerifyMethod={setVerifyMethod}
      />
    </div>
  );
};

export default Login;
