import classes from './Header.module.css';
import tableOfFood from '../../assets/meals.jpg';
import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton onClick={props.onShowModal} />
      </header>
      <div className={classes['main-image']}>
        <img src={tableOfFood} alt='table of delicious food' />
      </div>
    </Fragment>
  );
};
export default Header;
