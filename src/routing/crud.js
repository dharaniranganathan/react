import React, { useState, useEffect } from 'react';
import {  Button, Table, Modal, Form } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const App = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [currentItem, setCurrentItem] = useState({ id: null, name: '', description: '' });
    const [isEditing, setIsEditing] = useState(false);

    const apiEndpoint = 'http://localhost:5000/items';

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const { data } = await axios.get(apiEndpoint);
            setItems(data);
        } catch (error) {
            console.error('Error fetching items:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleShow = (item = { id: null, name: '', description: '' }) => {
        setIsEditing(!!item.id);
        setCurrentItem(item);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentItem({ ...currentItem, [name]: value });
    };
    const generateId = () => {

        const numericIds = items.map(item => parseInt(item.id)).filter(id => !isNaN(id));
        const maxId = numericIds.length ? Math.max(...numericIds) : 0;
        return (maxId + 1).toString();
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                console.log(`Editing item with ID: ${currentItem.id}`, currentItem);
                await axios.put(`${apiEndpoint}/${currentItem.id}`, currentItem);
            } else {
                const newItem = { ...currentItem, id: generateId() };
                await axios.post(apiEndpoint, newItem);
            }
            fetchItems();
            handleClose();
        } catch (error) {
            console.error('Error saving item:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            console.log(`Deleting item with ID: ${id}`);
            await axios.delete(`${apiEndpoint}/${id}`);
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
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
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
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={currentItem.name}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formDescription" className="mt-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={currentItem.description}
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