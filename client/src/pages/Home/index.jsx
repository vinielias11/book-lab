import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode'; 
import { useNavigate } from 'react-router-dom';
import { Header, HeaderItem } from './styles';
import logoSite from '../../assets/logoSite.png'

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        validaUsuario();

        
    });

    const validaUsuario = () => {
        const token = localStorage.getItem('token');

        if (token) {
            const usuario = jwtDecode(token);

            if (!usuario) {
                localStorage.removeItem('token');
                
                navigate('/login');
            }
        }
    };

    return (
        <Header>
            <img src={logoSite} alt="Logo do site" />
            <HeaderItem>Home</HeaderItem>
            <HeaderItem>Sobre</HeaderItem>
            <HeaderItem>Perfil</HeaderItem>
        </Header>
    );
};

export default Home;