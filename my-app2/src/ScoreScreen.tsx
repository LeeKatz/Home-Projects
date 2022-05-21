import {mockQuizData} from "./app.mocks";

interface ScoreScreenProps{
    selectedAnswerIDs: Array<string|null>;
    quiz: typeof mockQuizData;
}
export const ScoreScreen = (props:ScoreScreenProps) => {
    const {quiz, selectedAnswerIDs} = props;
    const numberOfCorrectAnswers = selectedAnswerIDs.reduce((acc, curr, index) => {
        if(quiz[index].correctAnswerID === curr){
            return acc + 1;
        }
        return acc;
    }, 0)
    const numberOfQuestions = quiz.length;
    return (
        <div>{`Your Score Is : ${numberOfCorrectAnswers / numberOfQuestions * 100}`}</div>
    )
}