import classes from "./QuestionsContainer.module.css"
import RadioQuestion from "./radio/RadioQuestion"
import CheckboxQuestion from "./checkbox/CheckboxQuestion"
import GeneralQuestion from "./general/GeneralQuestion"
import TextQuestion from "./text/TextQuestion"

const QuestionsTypes = {
    Radio: "radio",
    Checkbox: "checkbox",
    Text: "text",
    General: "general"
}

const QuestionsContainer = (props) => {
    const questions = props.item.questions

    return (
        <section className={classes.QuestionsContainer}>
            {
                questions.map((quest, index) => {
                    switch (quest.type) {
                        case QuestionsTypes.Radio:
                            return <RadioQuestion item={{
                                id: index + 1,
                                question: quest.question,
                                answer: quest.answer,
                                values: quest.data
                            }} />;

                        case QuestionsTypes.Checkbox:
                            return <CheckboxQuestion item={{
                                id: index + 1,
                                question: quest.question,
                                answer: quest.answer,
                                values: quest.data
                            }} />;

                        case QuestionsTypes.General:
                            return <GeneralQuestion item={{
                                id: index + 1,
                                question: quest.question,
                                answer: quest.answer
                            }} />;

                        case QuestionsTypes.Text:
                            return <TextQuestion item={{
                                id: index + 1,
                                question: quest.question,
                                answer: quest.answer
                            }} />;
                    }
                })
            }
        </section>
    )
}

export default QuestionsContainer