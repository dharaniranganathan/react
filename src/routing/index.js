// Home.js
import React,{ useRef } from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';

import './styles.css';

const Index = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="container">
            <nav className="scrollable-tabs">
                <ul>
                    <li><button onClick={() => handleScroll(homeRef)}>Section  1</button></li>
                    <li><button onClick={() => handleScroll(aboutRef)}>Section 2 </button></li>
                    <li><button onClick={() => handleScroll(contactRef)}>Section 3</button></li>
                </ul>
            </nav>

            <div className="content">
                <Home ref={homeRef} />
                <About ref={aboutRef} />
                <Contact ref={contactRef} />
            </div>
        </div>
    );
};
export default Index;
