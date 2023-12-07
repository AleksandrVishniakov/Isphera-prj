import classes from "./TextInput.module.css"

const TextInput = (props) => {
    const id = "text" + props.item.id

    const handleChange = () => {
        props.item.onChange(document.getElementById(id).value)
    }

    return (
        <input id={id} name={id} className={classes.TextInput} type="text" placeholder="Your answer here..." onChange={handleChange}/>
    )
}

export default TextInput