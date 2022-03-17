import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode'; 
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [paginas, setPaginas] = useState('');
    const [avaliacao, setAvaliacao] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const usuario = jwtDecode(token);
            if (!usuario) {
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                console.log(usuario.email);
            }
        }
    });

    const getIdUsuario = () => {
        return localStorage.getItem('idUsuario');
    };

    const getTodos = async () => {
        const response = await fetch('http://localhost:1337/api/usuarios');
        const data = await response.json();

        console.log(data);
    };

    const addLivro = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:1337/api/addLivro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titulo,
                autor,
                paginas,
                avaliacao,
                usuario: getIdUsuario()
            })
        });

        const data = await response.json();
        console.log(data);
    }

    return <div>
        <h1>Hello World!</h1>
        <form onSubmit={addLivro}>
        <input 
          type="text" 
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Titulo"
        /> <br />
        <input 
          type="text" 
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          placeholder="Autor"
        /> <br />
        <input 
          type="number" 
          value={paginas}
          onChange={(e) => setPaginas(e.target.value)}
          placeholder="Paginas"
        /> <br />
        <input 
          type="number" 
          value={avaliacao}
          onChange={(e) => setAvaliacao(e.target.value)}
          placeholder="Avaliacao"
        /> <br />
        <input type="submit" value="add livro" />
        </form>
        <button onClick={getTodos}>Carregar os usuarios</button>
    </div>
};

export default Home;