import React, { useState } from 'react';

const Counter = () => {
    // Step 2: Define state variable for count
    const [count, setCount] = useState(0);

    // Step 3: Define functions to handle count operations
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} disabled={count === 0}>Decrement</button>
            <button onClick={reset} disabled={count === 0}>Reset</button>
        </div>
    );
};

export default Counter;