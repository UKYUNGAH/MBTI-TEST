import React, { useState, useEffect } from 'react';
import { mbtiData } from '../data/data';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';

const Test = () => {
    const navigate = useNavigate();

    // 현재 질문 번호, 질문 번호 변경
    const [qIndex, setQIndex] = useState(0);
    // 답변, 답변 변경
    const [answers, setAnswers] = useState({
        E: 0,
        I: 0,
        N: 0,
        S: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0,
    });

    // 질문 목록 배열 만들기
    const questions = mbtiData.reduce((acc, group) => [...acc, ...group.questions], []);

    // 답변 선택 호출 함수
    const handleAnswer = (type) => {
        // 이전 답변을 복사해서 선택한 답변 유형의 개수 1 증가 시킴
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [type]: prevAnswers[type] + 1,
        }));

        // 다음 질문으로 넘어가기
        setQIndex((prevIndex) => prevIndex + 1);
    };

    useEffect(() => {
        // 모든 질문이 완료된 경우 결과 페이지로 이동
        if (qIndex >= questions.length) {
            const result = calculateResult();
            navigate(`/result?mbti=${result}`);
        }
    }, [qIndex, questions.length, navigate]);

    const calculateResult = () => {
        return (
            (answers.E >= answers.I ? 'E' : 'I') +
            (answers.N >= answers.S ? 'N' : 'S') +
            (answers.T >= answers.F ? 'T' : 'F') +
            (answers.J >= answers.P ? 'J' : 'P')
        );
    };

    return (
        <div className="test">
            <div className="container">
                {qIndex < questions.length ? (
                    <Question
                        question={questions[qIndex].question}
                        options={questions[qIndex].options}
                        onAnswer={handleAnswer}
                        id={qIndex + 1}
                    />
                ) : (
                    <h1>완료</h1>
                )}
            </div>
        </div>
    );
};

export default Test;
