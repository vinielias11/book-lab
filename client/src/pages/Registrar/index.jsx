import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    registrar as registrarService
} from '../../api/Usuarios';

import { 
    Container,
    Titulo,
    Form,
    FormContent,
    Input,
    BotaoRegistrar,
    LinkLogin
} from './styles';

const Registrar = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const registrar = async (e) => {
        e.preventDefault();

        const response = await registrarService(nome, email, senha);

        if (response.status === 'ok') {
            navigate('/login');
        }
    };

    const onClickLogin = () => {
        navigate('/login');
    };

    return (
        <Container>
            <Form onSubmit={registrar}>
                <Titulo>Registrar-se</Titulo>
                <FormContent>
                    <Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="nome"/>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
                    <Input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="senha"/>
                    <BotaoRegistrar type="submit">Registrar-se</BotaoRegistrar>
                    <LinkLogin onClick={onClickLogin}>Já possui uma conta? Fazer login.</LinkLogin>
                </FormContent>
            </Form>
        </Container>
    );
}

export default Registrar;
