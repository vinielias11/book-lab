import React, { useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const history = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const usuario = jwt.decode(token);
            if (!usuario) {
                localStorage.removeItem('token');
            }
        }
    }, []);

    return <h1>Hello world!</h1>
};

export default Home;