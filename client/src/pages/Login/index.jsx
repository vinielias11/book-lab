import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.js';

import {
  login as loginService
} from '../../api/Usuarios';

import { 
  Container,
  Titulo,
  Form,
  FormContent,
  Input,
  BotaoLogin,
  Registrar
} from './styles'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = async (e) => {
    e.preventDefault();

    const response = await loginService(email, senha);

    if (response.usuario) {
      localStorage.setItem('token', response.usuario);
      localStorage.setItem('idUsuario', response.idUsuario);
      navigate('/home');
    } else {
      alert('Verifique seu email ou senha!');
    }
  }

  const onClickRegistrar = () => {
    navigate('/registrar')
  }

  return (
    <Container>
      <Form onSubmit={login}>
      <Titulo>Login</Titulo>
        <FormContent>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
          <Input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="senha"/>
          <BotaoLogin type="submit">Entrar</BotaoLogin>
          <Registrar onClick={onClickRegistrar}>Não possui uma conta? Registre-se</Registrar>
        </FormContent>
      </Form>
    </Container>
  );
}

export default Login;