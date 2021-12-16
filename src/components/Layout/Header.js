import React, { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import foodPicture from '../../assets/meals.jpg';
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={foodPicture} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
