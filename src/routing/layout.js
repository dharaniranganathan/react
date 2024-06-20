// Layout.js
import React from 'react';
import NavBar from './navBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div style={styles.container}>
            <NavBar />
            <div style={styles.content}>
                <Outlet />
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        margin: '0',
        minWidth: '1200px',
        padding: '20px',
    },
    content: {
        // marginTop: '20px',
    },
};

export default Layout;
