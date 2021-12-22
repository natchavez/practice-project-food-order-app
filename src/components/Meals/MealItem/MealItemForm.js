import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { useRef, useState, useContext } from 'react';

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const amountInput = inputRef.current.value;
    const amountInputNumber = +amountInput;

    if (
      amountInput.trim().length === 0 ||
      amountInputNumber < 1 ||
      amountInputNumber > 5
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onGetAmount(amountInputNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label='Amount'
        input={{
          defaultValue: 1,
          type: 'number',
          step: '1',
          min: '1',
          max: '5',
          id: 'amount',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
