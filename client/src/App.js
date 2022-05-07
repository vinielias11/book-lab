import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import './App.css';

const App = () => {

    const isLogado = () => {
        return localStorage.getItem('token');
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Navigate replace to={isLogado() ? "/home" : "/login"} />} />
                <Route path="/login" exact element={<Login/>} />
                <Route path="/registrar" exact element={<Registrar/>} />
                <Route path="/home" exact element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;