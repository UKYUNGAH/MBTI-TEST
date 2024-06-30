import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mbtiResult } from '../data/mbtiResult';

const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const mbti = params.get('mbti');

    console.log('mbti:', mbti);
    const result = mbtiResult.find((result) => result.type.toUpperCase() === mbti.toUpperCase().trim());

    // const result = mbtiResult.find((result) => result.type === mbti);

    return (
        <div className="result">
            {result ? (
                <div className="container bg result_color">
                    <div className="title">
                        <h2>{result.title}</h2>
                        <span>{result.subTitle}</span>
                    </div>
                    <img src={result.imageUrl} alt="" />
                    <div className="text_box">
                        <p>{result.description}</p>
                    </div>

                    <div className="back_box">
                        <button
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            테스트 다시하기
                        </button>
                    </div>
                </div>
            ) : (
                <h1>결과를 찾을수 업습니다</h1>
            )}
        </div>
    );
};

export default Result;
