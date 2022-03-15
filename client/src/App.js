import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registrar from './pages/Registrar';

const App = () => {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/login" exact element={<Login/>} />
                <Route path="/registrar" exact element={<Registrar/>} />
                <Route path="/home" exact element={<Home/>} />
            </Routes>
        </BrowserRouter>
    </div>
};

export default App;