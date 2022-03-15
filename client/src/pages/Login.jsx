import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        senha
      })
    });

    const data = await response.json();

    if (data.usuario) {
      localStorage.setItem('token', data.usuario);
      alert('Login efetuado com sucesso!');
      window.location.href = '/home';
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