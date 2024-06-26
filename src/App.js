import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate,useNavigate } from 'react-router-dom';
import Layout from './routing/layout';
import PublicLayout from './routing/publicLayout';
import Login from './routing/login';
import Index from './routing';
import NestedAxios from './routing/nestedAxios';
import FetchDemo from './routing/fetchDemo';
import ClassDemo from './components/classDemo';
import FunctionDemo from './components/functionDemo';
import ConditionalDemo from './components/conditionalDemo';
import LifeCycleDemo from './components/lifeCycleDemo';
import UseContextDemo from './components/useContextDemo';
import UseEffectDemo from './components/useEffectDemo';
import UseRef from './components/useRefDemo';
import UseCallback from './components/useCallbackDemo';
import UseReducer from './components/useReducerDemo';
import UseMemoDemo from './components/useMemoDemo';
import Counter from './components/counterDemo';
import MeterialDemo from './components/meterialDemo';
import TodoList from './components/todolist.js';
import ProductList from './components/product/ProductList';
import Curd from './routing/crud.js';
// import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //const navigate = useNavigate();

    const handleLogin = (username, password) => {
        console.log('Logging in with', username, password);
        // Here you should add your authentication logic
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // Perform logout logic here
        setIsLoggedIn(false);
        //navigate('/login');
    };

    return (
        <Router>
            <Routes>
                {/* Public routes */}
                {/*{!isLoggedIn && (*/}
                    <Route element={<PublicLayout />}>
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Route>
                {/*)}*/}

                {/* Protected routes */}
                {/*{isLoggedIn && (*/}
                    <Route element={ <Layout handleLogout={handleLogout} />}>
                        <Route path="/home" element={<Index />} />
                        <Route path="/nestedAxios" element={<NestedAxios />} />
                        <Route path="/classDemo" element={<ClassDemo />} />
                        <Route path="/conditionalDemo" element={<ConditionalDemo />} />
                        <Route path="/useContextDemo" element={<UseContextDemo />} />
                        <Route path="/lifeCycleDemo" element={<LifeCycleDemo />} />
                        <Route path="/useEffectDemo" element={<UseEffectDemo />} />
                        <Route path="/useCallback" element={<UseCallback />} />
                        <Route path="/useReducer" element={<UseReducer />} />
                        <Route path="/useRef" element={<UseRef />} />
                        <Route path="/useMemoDemo" element={<UseMemoDemo />} />
                        <Route path="/useCallback" element={<UseCallback />} />
                        <Route path="/functionDemo" element={<FunctionDemo />} />
                        <Route path="/curd" element={<Curd />} />
                        <Route path="/productList" element={<ProductList />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/meterialDemo" element={<MeterialDemo />} />
                        <Route path="/fetch" element={<FetchDemo />} />
                        <Route path="/todo" element={<TodoList />} />
                        <Route path="/" element={<Navigate to="/" />} />
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Route>
                {/*)}*/}

                {/* Fallback for any unmatched routes */}
                <Route path="*" element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />} />
            </Routes>
        </Router>
    );
};

export default App;
