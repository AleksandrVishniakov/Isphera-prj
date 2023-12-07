import { useState } from "react"
import RadioButton from "./RadioButton"
import classes from "./RadioQuestion.module.css"

const RadioQuestion = (props) => {
    const [currentAnswer, setCurrentAnswer] = useState("")

    const id = props.item.id
    const question = id + ". " + props.item.question
    const values = props.item.values

    const handleAnswerChange = (value) => {
        setCurrentAnswer(value)

        props.item.onAnswerChange(value)
    }

    return (
        <div className={classes.RadioGroup}>
            <h4>{question}</h4>
            {
                values.map((value, index) => 
                    <RadioButton item={{
                        groupId:id, id:index, value: value,
                        onChange: handleAnswerChange
                }}/>
                )
            }
        </div>
    )
}

export default RadioQuestion