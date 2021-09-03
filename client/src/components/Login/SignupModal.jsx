/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Server from '../../lib/Server';
import actions from '../../state/actions';

const SignupModal = (props) => {
  const viewModal = useSelector((state) => state.viewModal);
  const dispatch = useDispatch();
  const { closeModal, openVerificationModal, login } = bindActionCreators(actions, dispatch);

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
          <div className="login-step">Create Account</div>
          <div className="signup-email">
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
            <div>
              <label>How would you like to verify your account?</label>
              <br />
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="email"
                  checked={props.verifyMethod === 'email'}
                  onChange={(e) => props.setVerifyMethod(e.target.value)}
                />
                <label className="form-check-label">Email</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="phone"
                  checked={props.verifyMethod === 'phone'}
                  onChange={(e) => props.setVerifyMethod(e.target.value)}
                  disabled={phoneNumber === ''}
                />
                <label className="form-check-label">Text Message</label>
              </div>
            </div>
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
                      login(result.data);

                      return Server.get('/signup/verify/sendCode', {
                        params: { user_id: result.data.user_id, method: props.verifyMethod },
                      });
                    })
                    .then(() => {
                      resetStep();
                      closeModal();
                      // if (props.trip && props.inviteCode) {
                      //   Server.post(`/invite/${props.trip}`, { params: { key: props.inviteCode } });
                      // }
                      openVerificationModal();
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
