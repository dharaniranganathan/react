// PublicLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
    return (
        <div style={styles.container}>
            <Outlet />
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        margin: '0 auto',
        maxWidth: '800px',
        padding: '20px',
    },
};

export default PublicLayout;
