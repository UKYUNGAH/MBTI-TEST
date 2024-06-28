import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';
import AOS from 'aos';
import 'aos/dist/aos';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="wrap">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/test" element={<Test></Test>}></Route>
                <Route path="/result" element={<Result></Result>}></Route>
            </Routes>
        </div>
    );
}

export default App;
