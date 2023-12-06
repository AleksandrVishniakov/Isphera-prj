import GeneralButton from "./GeneralButton"
import classes from "./GeneralQuestion.module.css"

const GeneralQuestion = (props) => {
    const id = props.item.id
    const question = id + ". " + props.item.question
    const answer = props.item.answer
    const values = [
        'Да',
        'Нет'
    ]

    return (
        <div className={classes.GeneralGroup}>
            <h4>{question}</h4>
            {
                values.map((value, index) => 
                    <GeneralButton item={{groupId:id, id:index, value: value}}/>
                )
            }
        </div>
    )
}

export default GeneralQuestion