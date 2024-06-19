// src/components/Home.js
import React, { forwardRef } from 'react';

const Home = forwardRef((props, ref) => (
    <div ref={ref} className="section">
        <h2>Section 1</h2>
        <p>Welcome to the page!</p>
    </div>
));

export default Home;
