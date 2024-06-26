import React, { useState, useEffect } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [currentItem, setCurrentItem] = useState({ id: null, email: '', first_name: '', last_name: '' });
    const [isEditing, setIsEditing] = useState(false);

    // const apiEndpoint = 'http://localhost:5000/items';
    const apiEndpoint = 'https://reqres.in/api/users';

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch(`${apiEndpoint}?page=2`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setItems(data.data); // Assuming the response data structure from reqres.in
            setLoading(false);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleShow = (item = { id: null, email: '', first_name: '', last_name: '' }) => {
        setIsEditing(!!item.id);
        setCurrentItem(item);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setCurrentItem({ id: null, email: '', first_name: '', last_name: '' });
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentItem({ ...currentItem, [name]: value });
    };

    const generateId = () => {
        // Parse string IDs to numbers and filter out non-numeric IDs
        const numericIds = items.map(item => parseInt(item.id)).filter(id => !isNaN(id));

        // Find the maximum numeric ID
        const maxId = numericIds.length ? Math.max(...numericIds) : 0;

        // Increment the maximum ID and return it as a string
        return (maxId + 1).toString();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                console.log(`Editing item with ID: ${currentItem.id}`, currentItem);
                await fetch(`${apiEndpoint}/${currentItem.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentItem),
                });
            } else {
                const newItem = { ...currentItem, id: generateId() };
                await fetch(apiEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newItem),
                });
            }
            fetchItems();
            handleClose();
        } catch (error) {
            console.error('Error saving item:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`${apiEndpoint}/${id}`, {
                method: 'DELETE',
            });
            fetchItems();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Item Management</h1>
                <Button onClick={() => handleShow()} variant="primary">Add Item</Button>
            </div>
            {loading ? (
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th><Skeleton /></th>
                        <th><Skeleton /></th>
                        <th><Skeleton /></th>
                        <th><Skeleton /></th>
                    </tr>
                    </thead>
                    <tbody>
                    {[...Array(3)].map((_, i) => (
                        <tr key={i}>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            ) : (
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleShow(item)} className="me-2">Edit</Button>
                                <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit Item' : 'Add Item'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={currentItem.email}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formFirstName" className="mt-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="first_name"
                                value={currentItem.first_name}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formLastName" className="mt-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="last_name"
                                value={currentItem.last_name}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            {isEditing ? 'Update' : 'Add'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default App;
