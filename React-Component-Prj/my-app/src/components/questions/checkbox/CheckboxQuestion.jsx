import CheckboxButton from "./CheckboxButton"
import classes from "./CheckboxQuestion.module.css"
import { useState } from "react"

const CheckboxQuestion = (props) => {
    const [currentAnswers, setCurrentAnswers] = useState([])

    const id = props.item.id
    const question = id + ". " + props.item.question
    const values = props.item.values

    const handleAnswersChange = (value, isChecked) => {
        let ans = [...currentAnswers]
        if (isChecked) {
            ans.push(value)
        } else {
            ans = ans.filter((val) => val !== value)
        }

        ans.sort()
        setCurrentAnswers(ans)
        props.item.onAnswerChange(ans)
    }

    return (
        <div className={classes.CheckboxGroup}>
            <h4>{question}</h4>
            {
                values.map((value, index) => 
                    <CheckboxButton item={{
                        groupId:id, id:index, value: value,
                        onChange: handleAnswersChange,
                    }}/>
                )
            }
        </div>
    )
}

export default CheckboxQuestion