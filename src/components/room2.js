import React, { Component } from 'react';

class Room2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carSpeed: 500,
            bikeSpeed: 100
        };
    }

    updateCarSpeed = () => {
        this.setState({ carSpeed: 1000 });
    };

    updateBikeSpeed = () => {
        this.setState({ bikeSpeed: 200 });
    };

    render() {
        const { car, bike } = this.props;
        const { carSpeed, bikeSpeed } = this.state;

        return (
            <div>
                <h1>Welcome to Room2</h1>
                <p>Car: {car}</p>
                <p>Bike: {bike}</p>
                <p>Car Speed: {carSpeed}</p>
                <p>Bike Speed: {bikeSpeed}</p>
                <button onClick={this.updateCarSpeed}>Update Car Speed</button>
                <button onClick={this.updateBikeSpeed}>Update Bike Speed</button>
            </div>
        );
    }
}

export default Room2;
