import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const tempList = [
    { id: 'c1', name: 'Sushi' },
    { id: 'c1', name: 'Sashimi' },
  ];
  const cartList = (
    <ul className={classes['cart-items']}>
      {tempList.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onHideModal}>
      {cartList}
      <div className={classes.total}>
        <p>Total Amount</p>
        <p>35.62</p>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideModal}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
