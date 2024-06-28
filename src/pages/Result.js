import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mbtiResult } from '../data/mbtiResult';

const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const mbti = params.get('mbti');

    const result = mbtiResult.find((result) => result.type === mbti);

    return (
        <div className="container">
            {result ? (
                <div className="result">
                    <div className="title">
                        <span>나와 비슷한 등장인물은?</span>
                        <h2>{result.title}!</h2>
                    </div>
                    <img src={result.imageUrl} alt="" />
                    <div className="text_box">
                        <p>{result.description}</p>
                    </div>

                    <button
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        처음으로 돌아가기
                    </button>
                </div>
            ) : (
                <h1>결과를 찾을수 업습니다</h1>
            )}
        </div>
    );
};

export default Result;
