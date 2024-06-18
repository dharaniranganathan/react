import React from "react";

export default function MapDemo(){
    let cars =[
        {
           color:'purple',
            type:'minivan',
            registration:new Date('2017-01-03'),
            capacity:'7',
        },
        {
            color:'red',
            type:'Station wagon',
            registration:new Date('2018-03-03'),
            capacity:'5',
        }
    ];
    const targetCar = cars.find(car =>
        car.color === 'red' &&
        car.type.toLowerCase() === 'station wagon' &&
        car.capacity === '5' &&
        car.registration.toLocaleDateString() === new Date('2018-03-03').toLocaleDateString()
    );
    return(
        <div>
            This is map Component<br/>
            {
                targetCar && (
                    <p>
                        The car with a capacity of 5 is the red station wagon registered on {targetCar.registration.toLocaleDateString()}.
                    </p>
                )
            }
            {
                cars.map((car, index) => (
                    <p key={index}>
                        {car.color} {car.type} which have a capacity of {car.capacity} registered on {car.registration.toDateString()}
                    </p>
                ))
            }
        </div>
    )

}