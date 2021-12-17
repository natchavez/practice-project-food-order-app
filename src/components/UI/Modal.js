import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};
const Modal = (props) => {
  const overlayPortal = document.getElementById('overlays');
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        overlayPortal
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayPortal
      )}
    </Fragment>
  );
};

export default Modal;
