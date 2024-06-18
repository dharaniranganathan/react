import React, { useState } from 'react';

const Room1 = ({ car, bike }) => {
    const [carPrice, setCarPrice] = useState(5000);
    const [bikePrice, setBikePrice] = useState(3000);

    const updateCarPrice = () => {
        setCarPrice(10000);
    };

    const updateBikePrice = () => {
        setBikePrice(6000);
    };

    return (
        <div>
            <h1>Welcome to Room1</h1>
            <p>Car: {car}</p>
            <p>Bike: {bike}</p>
            <p>Car Price: {carPrice}</p>
            <p>Bike Price: {bikePrice}</p>
            <button onClick={updateCarPrice}>Update Car Price</button>
            <button onClick={updateBikePrice}>Update Bike Price</button>
        </div>
    );
};

export default Room1;
