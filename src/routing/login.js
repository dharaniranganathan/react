// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('password');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here, e.g., API call to authenticate the user
        if (username === 'admin' && password === 'password') {
            onLogin(username, password);
            navigate('/home');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div>
                <label style={styles.label}>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
            </div>
            <div>
                <label style={styles.label}>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
            </div>
            <button type="submit" style={styles.button}>Login</button>
        </form>
    );
};

const styles = {
    form: {
        maxWidth: '300px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '8px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default Login;
