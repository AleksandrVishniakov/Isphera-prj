import RadioButton from "./RadioButton"
import classes from "./RadioQuestion.module.css"

const RadioQuestion = (props) => {
    const id = props.item.id
    const question = id + ". " + props.item.question
    const answer = props.item.answer
    const values = props.item.values

    return (
        <div className={classes.RadioGroup}>
            <h4>{question}</h4>
            {
                values.map((value, index) => 
                    <RadioButton item={{groupId:id, id:index, value: value}}/>
                )
            }
        </div>
    )
}

export default RadioQuestion