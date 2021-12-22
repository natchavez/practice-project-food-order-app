import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const getItemAmountHandler = (amount) => {
    cartCtx.addItem({
      key: props.id,
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    console.log(cartCtx.items);
  };

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm onGetAmount={getItemAmountHandler} />
    </li>
  );
};

export default MealItem;
