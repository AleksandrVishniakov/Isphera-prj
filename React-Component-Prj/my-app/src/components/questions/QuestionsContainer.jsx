import classes from "./QuestionsContainer.module.css"
import RadioQuestion from "./radio/RadioQuestion"
import CheckboxQuestion from "./checkbox/CheckboxQuestion"
import GeneralQuestion from "./general/GeneralQuestion"
import TextQuestion from "./text/TextQuestion"
import QuestionsTypes from "./QuestionsTypes"
import QuestionsManager from "./QuestionsManager"

const QuestionsContainer = (props) => {
    const questions = props.item.questions
    const questionManager = new QuestionsManager(questions)

    const handleCheckboxQuestionChange = (id, answers) => {
        const answer = answers.toString()
        questionManager.updateAnswer(id, answer)
    }

    const handleRadioQuestionChange = (id, answer) => {
        questionManager.updateAnswer(id, answer)
    }

    const handleTextQuestionChange = (id, answer) => {
        questionManager.updateAnswer(id, answer)
    }

    const handleGeneralQuestionChange = (id, answer) => {
        questionManager.updateAnswer(id, answer ? 'yes' : 'no')
    }

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
                                values: quest.data,
                                onAnswerChange: (value) => {handleRadioQuestionChange(index, value)}
                            }} />;

                        case QuestionsTypes.Checkbox:
                            return <CheckboxQuestion item={{
                                id: index + 1,
                                question: quest.question,
                                answer: quest.answer,
                                values: quest.data,
                                onAnswerChange: (value) => {handleCheckboxQuestionChange(index, value)}
                            }} />;

                        case QuestionsTypes.General:
                            return <GeneralQuestion item={{
                                id: index + 1,
                                question: quest.question,
                                answer: quest.answer,
                                onAnswerChange: (value) => {handleGeneralQuestionChange(index, value)}
                            }} />;

                        case QuestionsTypes.Text:
                            return <TextQuestion item={{
                                id: index + 1,
                                question: quest.question,
                                answer: quest.answer,
                                onAnswerChange: (value) => {handleTextQuestionChange(index, value)}
                            }} />;
                    }
                })
            }

            <button onClick={() => {questionManager.getIncorrectAnswersCount()}}>Check</button>
        </section>
    )
}

export default QuestionsContainer