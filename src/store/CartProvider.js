import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartItems = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    return {
      items: state.items.concat(action.item),
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    };
  }
  return defaultCartItems;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartItems
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
