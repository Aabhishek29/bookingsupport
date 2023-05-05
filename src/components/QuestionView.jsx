import React from "react";
import './style/questionView.css';
import { FaHandPointRight, FaPlus } from 'react-icons/fa';

const QuestionView = ({question, answer}) => {
    return (
        <div className={'question-frame'}>
            <div className={'question-section'}>
                <FaHandPointRight className={'question-point'} />
                <header className={'question-asked'}>{question}</header>
                <FaPlus className={'question-plus'} />
            </div>
            {/*<div className={'answer-section'}>*/}
            {/*    <p className={'answer-value'}>{answer}</p>*/}
            {/*</div>*/}
        </div>
    )
}


export default QuestionView;