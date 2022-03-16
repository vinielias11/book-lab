import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode'; 
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const usuario = jwtDecode(token);
            if (!usuario) {
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                
            }
        }
    });

    return <div>
        <h1>Hello World!</h1>
    </div>
};

export default Home;