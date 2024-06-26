import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Layout from './routing/layout';
import PublicLayout from './routing/publicLayout';
import Login from './routing/login';
import Index from './routing';
import NestedAxios from './routing/nestedAxios';
import ClassDemo from './components/classDemo';
import FunctionDemo from './components/functionDemo';
import ConditionalDemo from './components/conditionalDemo';
import LifeCycleDemo from './components/lifeCycleDemo';
import UseContextDemo from './components/useContextDemo';
import UseEffectDemo from './components/useEffectDemo';
import UseMemoDemo from './components/useMemoDemo';
import UseCallback from './components/useCallback';
import Counter from './components/counterDemo';
import Curd from './routing/crud.js';
// import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = (username, password) => {
        console.log('Logging in with', username, password);
        setIsLoggedIn(true);
    };
    const handleLogout = () => {
        // Perform logout logic here
        setIsLoggedIn(false);
    };
    return (
        <Router>
            <Routes>

                {isLoggedIn ? (
                    <Route path="/" element={<Navigate to="/" replace />} />
                ) : (
                    <Route path="/" element={<Navigate to="/login" replace />} />
                )}
                <Route element={<PublicLayout />}>
                    <Route path="login" element={<Login onLogin={handleLogin} />} />
                </Route>

                <Route element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path="/nestedAxios" element={<NestedAxios />} />
                    <Route path="/classDemo" element={<ClassDemo />} />
                    <Route path="/conditionalDemo" element={<ConditionalDemo />} />
                    <Route path="/useContextDemo" element={<UseContextDemo />} />
                    <Route path="/lifeCycleDemo" element={<LifeCycleDemo />} />
                    <Route path="/useEffectDemo" element={<UseEffectDemo />} />
                    <Route path="/useMemoDemo" element={<UseMemoDemo />} />
                    <Route path="/useCallback" element={<UseCallback />} />
                    <Route path="/functionDemo" element={<FunctionDemo />} />
                    <Route path="/curd" element={<Curd />} />
                    <Route path="/counter" element={<Counter />} />

                    <Route path="/logout" element={<Navigate to="/" replace />} onClick={handleLogout} />
                </Route>
            </Routes>
        </Router>

    );
};

export default App;
