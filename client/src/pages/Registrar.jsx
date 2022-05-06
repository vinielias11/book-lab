import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { 
  registrar as registrarService
} from '../api/Usuarios';

const Registrar = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function registrarUsuario(e) {
    e.preventDefault();

    const response = await registrarService(nome, email, senha);

    if (response.status === 'ok') {
      navigate('/login');
    }
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
