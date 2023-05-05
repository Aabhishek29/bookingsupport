import React from "react";

const QuestionView = ({question, answer}) => {
    return (
        <div className={'question-frame'}>
            <div>
                <header>{question}</header>
            </div>
            <div>
                <p>{answer}</p>
            </div>
        </div>
    )
}


export default QuestionView;