import AmountSelector from "./AmountSelector"
import classes from "./CartItem.module.css"

const CartItem = (props) => {
    return (
        <div className={classes.CartItem}>
            <p>{props.item.title}</p>
            <AmountSelector item={{value: props.item.value}}/>
        </div>
    )
}

export default CartItem;