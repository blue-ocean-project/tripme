/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Server from '../../lib/Server';
import actions from '../../state/actions';

const SignupModal = () => {
  const viewModal = useSelector((state) => state.viewModal);
  const dispatch = useDispatch();
  const { closeModal, login } = bindActionCreators(actions, dispatch);

  const [step, setStep] = useState('step1');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const resetStep = () => {
    setStep('step1');
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setRetypePassword('');
    setStatusMessage('');
  };
  const nextStepEmail = () => setStep('step2email');
  const nextStepFacebook = () => setStep('step2facebook');
  const verification = () => setStep('verification');

  if (step === 'step1') {
    return (
      <Modal centered show={viewModal} onHide={closeModal}>
        <Modal.Body>
          <div className="login-step">How do you want to sign up?</div>
          <div className="signup-choices">
            <Button className="signup-choices" variant="outline-warning" onClick={nextStepEmail}>
              Email
            </Button>
            <div />
            <Button className="signup-choices" variant="outline-primary" onClick={nextStepFacebook}>
              Facebook
            </Button>
            <div />
            <Button className="signup-choices" variant="outline-success">
              Google
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  if (step === 'step2email') {
    return (
      <Modal
        centered
        show={viewModal}
        onHide={() => {
          resetStep();
          closeModal();
        }}
      >
        <Modal.Body>
          <div className="login-step">Step 2</div>
          <div className="signup-email">
            {/* <label> */}
            <input
              className="login-email"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <div />
            <input
              className="login-password"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div />
            <input
              className="login-password"
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div />
            <input
              className="login-email"
              type="email"
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
            <input
              className="login-password"
              type="password"
              placeholder="Retype Password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
            />
            <div className="signup-status">{statusMessage}</div>
            <Button
              className="login-button"
              variant="outline-info"
              onClick={() => {
                if (password === retypePassword) {
                  const newUser = {
                    first_name: firstName,
                    last_name: lastName,
                    phone: phoneNumber,
                    email: email,
                    password: password,
                  };
                  Server.post('/signup', newUser)
                    .then((result) => {
                      console.log(result);
                      return Server.get('/signup/verify/sendCode', {
                        params: { user_id: result.data.user_id, method: 'email' },
                      });
                    })
                    .then((result) => {
                      console.log(result);
                      resetStep();
                      verification();
                    })
                    .catch((err) => {
                      setStatusMessage(err.response.data);
                    });
                } else {
                  setStatusMessage('Passwords do not match');
                }
              }}
            >
              Sign up!
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  if (step === 'step2facebook') {
    return (
      <Modal
        centered
        show={viewModal}
        onHide={() => {
          resetStep();
          closeModal();
        }}
      >
        <Modal.Body>
          <div className="login-step">hi</div>
          <div className="signup-choices">
            <Button className="signup-choices" variant="outline-warning">
              Email
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    );
  }
  if (step === 'verification') {
    return (
      <Modal centered show={viewModal} onHide={closeModal}>
        <Modal.Body>
          <div className="login-step">Verification</div>
          <div className="signup-choices">
            <Button className="signup-choices" variant="outline-warning">
              Resend verification email
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    );
  }
};

export default SignupModal;
