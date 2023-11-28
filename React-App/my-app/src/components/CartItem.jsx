import AmountSelector from "./AmountSelector"

const CartItem = (props) => {
    return (
        <div>
            <p>{props.item.title}</p>
            <AmountSelector/>
        </div>
    )
}

export default CartItem;