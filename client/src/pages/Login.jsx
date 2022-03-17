import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  login as loginService
} from '../api/Usuarios';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = async (e) => {
    e.preventDefault();

    const response = await loginService(email, senha);
    
    console.log(response);

    if (response.usuario) {
      localStorage.setItem('token', response.usuario);
      localStorage.setItem('idUsuario', response.idUsuario);
      alert('Login efetuado com sucesso!');
      navigate('/home');
    } else {
      alert('Verifique seu email ou senha!');
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        /> <br />
        <input 
          type="password" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
        /> <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;