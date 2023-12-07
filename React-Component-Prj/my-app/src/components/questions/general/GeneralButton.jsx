import classes from "./GeneralButton.module.css"
import { useState } from "react"

const GeneralButton = (props) => {
    const [isChecked, setChecked] = useState(false)

    const groupId = "general-group" + props.item.groupId
    const id = groupId + "-general" + props.item.id
    const value = props.item.value

    const handleChange = () => {
        if (!isChecked) {
            props.item.onChange(value === 'Да')
        }

        setChecked(!isChecked)
    }

    return (
        <div className={classes.GeneralGroup}>
            <input className={classes.GeneralInput} name={groupId} id={id} type="radio" onChange={handleChange}/>
            <label className={classes.GeneralLabel} htmlFor={id}>
                <span className={classes.GeneralInnerCircle}></span>
                {value}
            </label>
        </div>
    )
}

export default GeneralButton