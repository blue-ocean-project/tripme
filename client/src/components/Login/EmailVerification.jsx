import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../state/actions';

const EmailVerification = () => {
  const viewVerificationModal = useSelector((state) => state.viewVerificationModal);
  const currentUser = useSelector((state) => state.user);

  const [statusMessage, setStatusMessage] = useState('');

  const dispatch = useDispatch();
  const { closeVerificationModal } = bindActionCreators(actions, dispatch);

  return (
    <Modal centered show={viewVerificationModal} onHide={closeVerificationModal}>
      <Modal.Body>
        <div className="login-step">A verification email has been sent!</div>
        <div className="login-verification-subtext">
          Please click the link in your email to activate your account
        </div>
        <div className="signup-choices">
          <Button
            className="signup-resend-button"
            variant="outline-info"
            onClick={() => {
              setStatusMessage('Email has been sent!');
              console.log(currentUser);
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
