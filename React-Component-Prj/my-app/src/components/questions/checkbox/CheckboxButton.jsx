import { useState } from "react"
import classes from "./CheckboxButton.module.css"

const CheckboxButton = (props) => {
    const [isChecked, setChecked] = useState(false)

    const groupId = "checkbox-group" + props.item.groupId
    const id = groupId+"-checkbox" + props.item.id
    const value = props.item.value

    const handleCheckboxChange = () => {
        props.item.onChange(value, !isChecked)

        setChecked(!isChecked)
    }

    return (
        <div className={classes.CheckboxGroup}>
            <input onChange={handleCheckboxChange} className={classes.CheckboxInput} name={groupId} id={id} type="checkbox" checked={isChecked}/>
            <label className={classes.CheckboxLabel} htmlFor={id}>
                <span className={classes.CheckboxInnerCircle}></span>
                {value}
            </label>
        </div>
    )
}

export default CheckboxButton