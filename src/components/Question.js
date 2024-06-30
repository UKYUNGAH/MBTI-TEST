import React from 'react';

const Question = ({ id, question, options, onAnswer }) => {
    return (
        <div className="question">
            <div className="title_box">
                <p>Q{id}</p>
                <h2>{question}</h2>
                <h3>자신과 맞는 항목을 선택해주세요</h3>
            </div>
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
