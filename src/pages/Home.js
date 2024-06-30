import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    let navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    return (
        <main className="main">
            <div className="container bg main_color">
                <header className="title" data-aos="zoom-in" data-aos-delay="100">
                    <h1>짱구는못말려</h1>
                    <h2>나와 같은 등장인물은?</h2>
                </header>
                <section className="box" data-aos="zoom-in" data-aos-delay="200">
                    <div className="main_img">
                        <img src="/main.png" alt="메인 이미지" />
                    </div>
                    <div className="inner">
                        <h3>지금 바로 테스트 해보기</h3>
                    </div>
                </section>
                <button
                    type="button"
                    onClick={() => {
                        navigate('/test');
                    }}
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-offset="0"
                >
                    테스트 시작하기
                </button>
            </div>
        </main>
    );
};

export default Home;
