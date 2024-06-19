// src/components/Contact.js
import React, { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => (
    <div ref={ref} className="section">
        <h2>Section 3</h2>
        <p>Get in touch with us.</p>
    </div>
));

export default Contact;
