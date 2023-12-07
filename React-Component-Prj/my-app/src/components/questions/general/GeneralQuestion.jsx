import GeneralButton from "./GeneralButton"
import classes from "./GeneralQuestion.module.css"
import { useState } from "react"

const GeneralQuestion = (props) => {
    const [currentAnswer, setCurrentAnswer] = useState()

    const id = props.item.id
    const question = id + ". " + props.item.question
    const values = [
        'Да',
        'Нет'
    ]

    const handleAnswerChange = (value) => {
        setCurrentAnswer(value)

        props.item.onAnswerChange(value)
    }

    return (
        <div className={classes.GeneralGroup}>
            <h4>{question}</h4>
            {
                values.map((value, index) => 
                    <GeneralButton item={{
                        groupId:id, id:index, value: value,
                        onChange: handleAnswerChange
                    }}/>
                )
            }
        </div>
    )
}

export default GeneralQuestion