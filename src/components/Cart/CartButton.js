import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {cartActions} from "../store/store";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.totalQuantity)

  const clickHandler = () => {
    dispatch(cartActions.toggle())
  }

  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
