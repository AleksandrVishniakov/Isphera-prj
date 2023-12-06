import classes from "./RadioButton.module.css"

const RadioButton = (props) => {
    const groupId = "radio-group" + props.item.groupId
    const id = groupId + "-radio" + props.item.id
    const value = props.item.value

    return (
        <div className={classes.RadioGroup}>
            <input className={classes.RadioInput} name={groupId} id={id} type="radio" />
            <label className={classes.RadioLabel} htmlFor={id}>
                <span className={classes.RadioInnerCircle}></span>
                {value}
            </label>
        </div>
    )
}

export default RadioButton