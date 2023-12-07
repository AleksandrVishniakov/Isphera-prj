import { useState } from "react";
import QuestionsTypes from "./QuestionsTypes"

class QuestionsManager {
    constructor(q) {
        this.answers = new Array()
        this.userAnswers = new Array()

        q.forEach(element => {
            this.answers.push(
                mapQuestionAnswer(element)
            )

            this.userAnswers.push(useState(""))
        });
    }

    updateAnswer(id, newAnswer) {
        this.userAnswers[id][1](newAnswer)
    }

    getIncorrectAnswersCount() {
        let count = 0

        this.userAnswers.forEach((element, index) => {
            if (element[0] !== this.answers[index]) {
                console.log("Incorrect " + (index+1) + ":", element[0], "expected:", this.answers[index])
                count++;
            }
        })

        console.log("Your result:", this.answers.length - count, "/", 10)

        return count
    }
}

const mapQuestionAnswer = (question) => {
    let answer = ""

    switch(question.type) {
    case QuestionsTypes.Checkbox:
        const ans = question.answer.sort()
        answer = ans.toString();
        break;
    case QuestionsTypes.General:
        answer = question.answer ? 'yes' : 'no';
        break;
    case QuestionsTypes.Radio:
        answer = question.answer;
        break;
    case QuestionsTypes.Text:
        answer = question.answer;
        break;
    }

    return answer
}



export default QuestionsManager