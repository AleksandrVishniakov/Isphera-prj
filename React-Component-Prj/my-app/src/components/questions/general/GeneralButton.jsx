import classes from "./GeneralButton.module.css"

const GeneralButton = (props) => {
    const groupId = "general-group" + props.item.groupId
    const id = groupId + "-general" + props.item.id
    const value = props.item.value

    return (
        <div className={classes.GeneralGroup}>
            <input className={classes.GeneralInput} name={groupId} id={id} type="radio" />
            <label className={classes.GeneralLabel} htmlFor={id}>
                <span className={classes.GeneralInnerCircle}></span>
                {value}
            </label>
        </div>
    )
}

export default GeneralButton