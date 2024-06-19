// src/components/About.js
import React, { forwardRef } from 'react';

const About = forwardRef((props, ref) => (
    <div ref={ref} className="section">
        <h2>Section 2</h2>
        <p>Learn more us on this page.</p>
    </div>
));

export default About;
