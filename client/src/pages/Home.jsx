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

    const getTodos = async () => {
        const response = await fetch('http://localhost:1337/api/usuarios');
        const data = await response.json();

        console.log(data);
    }

    return <div>
        <h1>Hello World!</h1>
        <button onClick={getTodos}>Carregar os usuarios</button>
    </div>
};

export default Home;