import classes from "./TextInput.module.css"

const TextInput = (props) => {
    const id = "text" + props.item.id

    return (
        <input id={id} name={id} className={classes.TextInput} type="text" placeholder="Your answer here..."/>
    )
}

export default TextInput