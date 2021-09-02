import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../state/actions';
import Server from '../../lib/Server';

const EmailVerification = (props) => {
  const viewVerificationModal = useSelector((state) => state.viewVerificationModal);
  const currentUser = useSelector((state) => state.user);

  const [statusMessage, setStatusMessage] = useState('');
  const [verifyMethod, setVerifyMethod] = useState('email');

  const dispatch = useDispatch();
  const { closeVerificationModal } = bindActionCreators(actions, dispatch);

  return (
    <Modal centered show={viewVerificationModal} onHide={closeVerificationModal}>
      <Modal.Body>
        {props.verifyType === 'login' && (
          <div className="login-step">A verification link has already been sent to your email</div>
        )}
        {props.verifyType === 'signup' && (
          <div className="login-step">A verification email has been sent!</div>
        )}
        <div className="login-verification-subtext">
          Please click the link in your email to activate your account
        </div>
        <div className="signup-choices">
          <Button
            className="signup-resend-button"
            variant="outline-info"
            onClick={() => {
              setStatusMessage('Email has been sent!');
              Server.get('/signup/verify/sendCode', {
                params: { user_id: currentUser.user_id, method: verifyMethod },
              });
            }}
          >
            Resend email
          </Button>
        </div>
        <div className="signup-resend-email">{statusMessage}</div>
      </Modal.Body>
    </Modal>
  );
};
export default EmailVerification;
