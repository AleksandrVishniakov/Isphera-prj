import TextInput from "./TextInput"
import classes from "./TextInput.module.css"

const TextQuestion = (props) => {
    const id = props.item.id
    const question = id + ". " + props.item.question
    const answer = props.item.answer

    return (
        <div className={classes.TextQuestion}>
            <h4>{question}</h4>
            <TextInput item={{
                id: id,
                onChange: props.item.onAnswerChange
            }}/>
        </div>
    )
}

export default TextQuestion