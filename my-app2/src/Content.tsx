import React, {useEffect, useState} from "react";
import {mockQuizData} from "./app.mocks";
import {ScoreScreen} from "./ScoreScreen";
import {QuestionScreen} from "./QuestionScreen";

const LOADING_MESSAGE = 'Loading...';
const ERROR_MESSAGE = 'We got an error, please check the console for details';
const NO_DATA_MESSAGE = 'No data';

export const Content = () => {
    const [quiz, setQuiz] = useState< typeof mockQuizData>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, seIstError] = useState(false);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isQuizOver, setIsQuizOver] = useState(false);
    const [selectedAnswerIDs, setSelectedAnswerIDs] = useState<Array<string | null>>([]);

    // This function would be async if we had a server from which we could fetch the data.
    const getQuizData = () => {
        setIsLoading(true);
        try {
            setQuiz(mockQuizData);
            setIsLoading(false);
            setSelectedAnswerIDs(new Array(mockQuizData.length).fill(null))
        } catch (error){
            setIsLoading(false);
            seIstError(true);
            console.error(error);
        }
    }

    useEffect(() => {
        getQuizData();
    }, [])

    const onNextQuestionClick = () => {
        setCurrentQuestionIndex(prev => prev +1);
    }

    const onPrevQuestionClick =  () => {
        setCurrentQuestionIndex(prev => prev -1);

    }

    const onSubmitClick = () => {
        setIsQuizOver(true);
    }

    const onAnswerClick = (selectedAnswerID:string, questionIndex:number) => () => {
        setSelectedAnswerIDs(prev => prev.map((_, index) => {
            if(index === questionIndex ) {
                return selectedAnswerID;
            }
            return prev[index];
        }))
    }

    if(isLoading){
        return <div>{LOADING_MESSAGE}</div>
    }
    if(isError){
        return <div>{ERROR_MESSAGE}</div>
    }
    if(quiz.length === 0){
        return <div>{NO_DATA_MESSAGE}</div>
    }

    return (
        <div>
            { isQuizOver ?
                <ScoreScreen selectedAnswerIDs={selectedAnswerIDs} quiz={quiz}/> :
                <QuestionScreen
                    {...quiz[currentQuestionIndex]}
                    onNextClick={onNextQuestionClick}
                    onPrevClick={onPrevQuestionClick}
                    onSubmitClick={onSubmitClick}
                    onAnswerClick={onAnswerClick}
                    isFirstQuestion={currentQuestionIndex === 0}
                    isLastQuestion={currentQuestionIndex === quiz.length-1}
                    selectedAnswerID={selectedAnswerIDs[currentQuestionIndex]}
                    index={currentQuestionIndex}
                />
            }
        </div>
    );
}