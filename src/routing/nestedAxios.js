import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Users List</h1>
            <ul style={styles.userList}>
                {users.map(user => (
                    <li key={user.id} style={styles.userCard}>
                        <h2 style={styles.userName}>{user.name}</h2>
                        <p style={styles.userDetail}><strong>Email:</strong> {user.email}</p>
                        <p style={styles.userDetail}><strong>Phone:</strong> {user.phone}</p>
                        <p style={styles.userDetail}><strong>Website:</strong> {user.website}</p>
                        <h3 style={styles.subHeader}>Address</h3>
                        <p style={styles.userDetail}>{user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                        <h3 style={styles.subHeader}>Company</h3>
                        <p style={styles.userDetail}><strong>Name:</strong> {user.company.name}</p>
                        <p style={styles.userDetail}><strong>CatchPhrase:</strong> {user.company.catchPhrase}</p>
                        <p style={styles.userDetail}><strong>BS:</strong> {user.company.bs}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        margin: '0 auto',
        maxWidth: '800px',
        padding: '20px',
        textAlign: 'center'
    },
    header: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '20px'
    },
    userList: {
        listStyle: 'none',
        padding: 0,
        backgroundColor: 'white',
    },
    userCard: {
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '8px',
        marginBottom: '20px',
        padding: '20px',
        textAlign: 'left',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    userName: {
        fontSize: '1.5rem',
        color: '#333',
        margin: '0 0 10px'
    },
    userDetail: {
        fontSize: '1rem',
        color: '#555',
        margin: '5px 0'
    },
    subHeader: {
        fontSize: '1.2rem',
        color: '#666',
        margin: '15px 0 5px'
    }
};
export default UsersList;
