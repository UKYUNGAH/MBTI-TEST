import React from 'react';

const Question = ({ id, question, options, onAnswer }) => {
    return (
        <div className="question">
            <div className="top">
                <img src="/logo.png" alt="" />
                <p>Q{id}</p>
            </div>
            <h2>{question}</h2>
            {options.map((option) => (
                <div className="select_box">
                    <button key={option.id} onClick={() => onAnswer(option.type)}>
                        {option.label}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Question;
