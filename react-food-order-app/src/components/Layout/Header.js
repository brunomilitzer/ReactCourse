import {Fragment, useContext} from "react";

import mealsImage from '../../assets/meals.jpg';
import HeaderCardButton from "./HeaderCardButton";
import CartContext from "../../store/cart-context";

import classes from './Header.module.css';

const Header = () => {
    const cartCtx = useContext(CartContext);

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCardButton onClick={cartCtx.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food!"/>
            </div>
        </Fragment>
    );
}

export default Header;
