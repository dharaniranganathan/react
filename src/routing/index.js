// Home.js
import React,{ useState } from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';

import './styles.css';

const Index = () => {
    const [currentTab, setCurrentTab] = useState('1');

    let Component;
    if (currentTab === '1') {
        Component = Home;
    } else if (currentTab === '2') {
        Component = About;
    } else if (currentTab === '3') {
        Component = Contact;
    }

    return (
        <div>
            <nav className="scrollable-tabs">
                <ul>
                    <li className={currentTab === '1' ? 'active' : ''} ><button onClick={() => setCurrentTab('1')}>Section  1</button></li>
                    <li className={currentTab === '2' ? 'active' : ''} ><button onClick={() => setCurrentTab('2')}>Section 2 </button></li>
                    <li className={currentTab === '3' ? 'active' : ''}><button onClick={() => setCurrentTab('3')}>Section 3</button></li>
                </ul>
            </nav>
            <div className="content">
                <Component />
            </div>
        </div>
    );
};
export default Index;
