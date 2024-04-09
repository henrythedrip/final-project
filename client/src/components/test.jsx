import { QUERY_SINGLE_CATEGORY } from "../utils/querires";
import {useMutation, useLazyQuery} from "@apollo/client";
//click submit query questions and display first questions


const quizQuestions = (category)=> {
setTime();
const questions = useLazyQuery(QUERY_SINGLE_CATEGORY,{
variables: {name: category}
})



if(!questions){
    return console.log('no questions')
}
return questions

}

quizRun(questions)

//on click and iterate through all questions
  const quizRun = (questions) => {
    const i = 0

    if(!questions.setOfQuestions[i]){
        return console.log('finished quiz')//finished quiz
    }
    const question = questions.setOfQuestions[i]
    return
    <div>
        <p>{ question.question}</p>
    </div>
    i++
  }
