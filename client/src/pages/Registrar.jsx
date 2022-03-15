import { useState } from 'react';

const Registrar = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function registrarUsuario(e) {
    e.preventDefault();

    const response = await fetch('http://localhost:1337/api/registrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome,
        email,
        senha
      })
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <div>
      <h1>Registrar-se</h1>
      <form onSubmit={registrarUsuario}>
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        /> <br />
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
        <input type="submit" value="Registrar" />
      </form>
    </div>
  );
}

export default Registrar;
