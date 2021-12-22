import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartList = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        // <li>{item.name}</li>
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addItemHandler.bind(null, item.id)}
          onRemove={removeItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onHideModal}>
      {cartList}
      <div className={classes.total}>
        <p>Total Amount</p>
        <p>{`$${totalAmount}`}</p>
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
