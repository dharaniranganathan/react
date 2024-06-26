import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ItemsList from './components/ItemsList';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Define middleware if needed (example: thunk)
const middleware = [];

// Create Redux store with middleware and Redux DevTools extension
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

// Render the application using createRoot
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
            <hr />
            <ItemsList />
        </React.StrictMode>
    </Provider>
);
