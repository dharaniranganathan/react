import React from 'react';
import Data from '../../sampledata/data';
import './style.css';

const ProductList = () => {
    return (
        <div>
            <header className="App-header">
                <h1>Flipkart Clone</h1>
            </header>
        <div className="product-list">
            {Data.map((item) => (
                <div key={item.id} className="product-card">
                    <img src={item.img} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p className="price">
                        <span className="old-price">{item.prevPrice}</span>
                        <span className="new-price">${item.newPrice}</span>
                    </p>
                    <p className="company">Company: {item.company}</p>
                    <p className="color">Color: {item.color}</p>
                    <p className="category">Category: {item.category}</p>
                    <div className="rating">
                        <div className="rating">
                            {Array.from({ length: 5 }, (_, index) => (
                                item.star
                            ))}
                        </div>

                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};
/*const ProductList = () => {
    return (
        <div>
            <header className="App-header">
                <h1>Flipkart Clone</h1>
            </header>
            <main>
                {Data.map((item) => (
                    <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                        <h2>{item.title}</h2>
                        <img src={item.image} alt={item.title} style={{ width: '150px', height: '150px' }} />
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                    </div>
                ))}
            </main>
        </div>
    );
};*/

export default ProductList;