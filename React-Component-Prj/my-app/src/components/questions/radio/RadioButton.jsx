import classes from "./RadioButton.module.css"
import { useState } from "react"

const RadioButton = (props) => {
    const [isChecked, setChecked] = useState(false)

    const groupId = "radio-group" + props.item.groupId
    const id = groupId + "-radio" + props.item.id
    const value = props.item.value

    const handleChange = () => {
        if (!isChecked) {
            props.item.onChange(value)
        }

        setChecked(!isChecked)
    }

    return (
        <div className={classes.RadioGroup}>
            <input className={classes.RadioInput} name={groupId} id={id} type="radio" onChange={handleChange}/>
            <label className={classes.RadioLabel} htmlFor={id}>
                <span className={classes.RadioInnerCircle}></span>
                {value}
            </label>
        </div>
    )
}

export default RadioButton