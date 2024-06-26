import React, { useRef, useState, useEffect } from 'react';
import './styles.css';

const Index = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const [currentTab, setCurrentTab] = useState('home'); // Default to 'home' tab

    const scrollToRef = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleTabClick = (tab) => {
        setCurrentTab(tab);
        switch (tab) {
            case 'home':
                scrollToRef(homeRef);
                break;
            case 'about':
                scrollToRef(aboutRef);
                break;
            case 'contact':
                scrollToRef(contactRef);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            /*if (
                scrollPosition >= homeRef.current.offsetTop &&
                scrollPosition < aboutRef.current.offsetTop
            ) {
                setCurrentTab('home');
            } else if (
                scrollPosition >= aboutRef.current.offsetTop &&
                scrollPosition < contactRef.current.offsetTop
            ) {
                setCurrentTab('about');
            } else if (scrollPosition >= contactRef.current.offsetTop) {
                setCurrentTab('contact');
            }*/
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="container">

            <nav className="scrollable-tabs">
                <ul>
                    <li className={currentTab === 'home' ? 'active' : ''}>
                        <button onClick={() => handleTabClick('home')}>Home</button>
                    </li>
                    <li className={currentTab === 'about' ? 'active' : ''}>
                        <button onClick={() => handleTabClick('about')}>About</button>
                    </li>
                    <li className={currentTab === 'contact' ? 'active' : ''}>
                        <button onClick={() => handleTabClick('contact')}>Contact</button>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <section ref={homeRef} id="home" className="section">
                    <h2>Home</h2>
                    <div className="scrollable-content">
                        {/* Add Home content here */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget gravida urna. Nullam aliquam eros non ipsum venenatis convallis.</p>
                        <p>Vivamus vel lacinia metus. Quisque rhoncus, ipsum non tincidunt vestibulum, felis nisl posuere nisi, id auctor odio turpis nec tortor.</p>
                    </div>
                </section>
                <section ref={aboutRef} id="about" className="section">
                    <h2>About</h2>
                    <div className="scrollable-content">
                        {/* Add About content here */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed leo felis. Sed maximus, nisi vitae luctus pharetra, eros justo cursus quam.</p>
                        <p>Nullam id arcu consequat, consequat purus nec, dignissim risus. Nam euismod lacus eget tincidunt tincidunt.</p>
                    </div>
                </section>
                <section ref={contactRef} id="contact" className="section">
                    <h2>Contact</h2>
                    <div className="scrollable-content">
                        {/* Add Contact content here */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium tristique felis, vel vehicula urna posuere ut.</p>
                        <p>Quisque consequat, eros nec blandit lobortis, metus diam ultrices tortor, ut placerat nulla nunc in eros.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Index;
