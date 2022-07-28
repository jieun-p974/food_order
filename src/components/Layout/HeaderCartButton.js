import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItem = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    // 300ms가 지나면 bump 클래스를 삭제함
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
