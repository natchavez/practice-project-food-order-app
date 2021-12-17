import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const overlays = document.getElementById('overlays');

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, overlays)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlays
      )}
    </Fragment>
  );
};

export default Modal;
