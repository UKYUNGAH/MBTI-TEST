import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    let navigate = useNavigate();
    return (
        <div className="main">
            <div className="container">
                <div className="title">
                    <img src="/logo.png" alt="" />
                </div>
                <div className="box">
                    <img src="/entp.png" alt="" />
                    <h2>
                        <span className="y">나와 닮은</span>
                        <br /> <span className="p">짱구 등장인물</span> <span className="b">찾기!</span>
                    </h2>

                    {/* <h2>테스트에 오신 것을 환영합니다! 자신을 더 깊이 이해하는 기회, 당신의 유형을 찾아보세요</h2> */}
                </div>
                <button
                    type="button"
                    onClick={() => {
                        navigate('/test');
                    }}
                >
                    테스트 시작하기
                </button>
            </div>
        </div>
    );
};

export default Home;
