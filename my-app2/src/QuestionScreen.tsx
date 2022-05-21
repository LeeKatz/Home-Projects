interface Answer {
    id: string;
    text: string;
}
interface QuestionScreenProps {
    index: number;
    question: string;
    answers: Array<Answer>;
    correctAnswerID: string;
    onNextClick: () => void;
    onPrevClick: () => void;
    onSubmitClick: () => void;
    onAnswerClick: (selectedAnswerID:string, index:number) => () => void;
    isFirstQuestion:boolean;
    isLastQuestion:boolean;
    selectedAnswerID: string | null;
}
export const QuestionScreen = (props:QuestionScreenProps) => {
    const {
        question,
        isFirstQuestion,
        isLastQuestion,
        answers,
        onAnswerClick,
        correctAnswerID,
        onSubmitClick,
        onPrevClick,
        onNextClick,
        selectedAnswerID,
        index,
    } = props;

    const getAnswerBackgroundColor = (currentAnswerID:string) => {
        if(selectedAnswerID === correctAnswerID && selectedAnswerID===currentAnswerID){
            return 'green';
        }
        if(selectedAnswerID !== correctAnswerID && selectedAnswerID===currentAnswerID){
            return 'red';
        }
        return 'inherit'
    }
    return (
        <div>
            <div>{question}</div>
            {answers.map(answer => <button style={{backgroundColor: getAnswerBackgroundColor(answer.id)}} key={answer.id} disabled={selectedAnswerID!==null} onClick={onAnswerClick(answer.id, index)}>{answer.text}</button>)}
            {isFirstQuestion ? null : <button onClick={onPrevClick}>Prev</button>}
            {isLastQuestion ? <button onClick={onSubmitClick}>Submit</button> : <button onClick={onNextClick}>Next</button>}
        </div>
    )
}