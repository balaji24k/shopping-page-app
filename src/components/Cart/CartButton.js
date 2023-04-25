import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import {cartActions} from "../store/store";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(cartActions.toggle())
  }

  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
