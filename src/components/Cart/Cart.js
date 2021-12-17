import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const tempList = [{ id: 'c1', name: 'Sushi' }];
  const cartList = (
    <ul className={classes['cart-items']}>
      {tempList.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartList}
      <div className={classes.total}>
        <p>Total Amount</p>
        <p>35.62</p>
      </div>
      <div className={classes.actions}>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
