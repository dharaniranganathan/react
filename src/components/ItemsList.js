import React from 'react';
import { connect } from 'react-redux';
import { updateItem, deleteItem } from '../actions'; // Import the deleteItem action
import Item from './Item';

const ItemsList = ({ items, updateItem, deleteItem }) => {
    const handleDelete = (id) => {
        if(items.length > 1)
            deleteItem(id); // Call the deleteItem action with the item id
    };

    return (
        <ul className="item-list">
            {items.map(item => (
                <div key={item.id}>
                    <Item {...item} onClick={() => updateItem(item.id)} />
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))}
        </ul>
    );
};

const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    updateItem: id => dispatch(updateItem(id)),
    deleteItem: id => dispatch(deleteItem(id)) // Add deleteItem to mapDispatchToProps
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
