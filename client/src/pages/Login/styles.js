import styled from 'styled-components';

export const Titulo = styled.h1`
    font-weight: 700;
    color: #384047;
    text-align: center;
    line-height: 1.5em;
    margin-bottom: 1.2em;
    margin-top: 0.2em;
`;

export const Container = styled.div`
    display: flex;
    -webkit-display: box;
    -moz-display: box;
    -ms-display: flexbox;
    -webkit-display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    padding: 6%;
    margin: 0;
`;

export const Form = styled.form`
    background-color: #FFF;
    padding: 2em;
    padding-bottom: 3em;
    border-radius: 8px;
    max-width: 400px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 10px 40px -14px rgba(0,0,0,0.25);
`;

export const FormContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 300px;
`;

export const Input = styled.input`
    color: #384047;
    background-color: #e8eeef;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    border: none;
    border-radius: 4px;
    padding: 1em;
    margin-bottom: 1.2em;

    &:focus {
        outline: none;
    }
`;

export const BotaoLogin = styled.button`
    font-weight: 600;
    text-align: center;
    font-size: 19px;
    color: #FFF;
    background-color: #4bc970;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 0.8em;
    margin-top: 1em;
    margin-bottom: 1em;
    cursor: pointer;
    overflow: hidden;
    transition: all 200ms ease-in-out;
    box-shadow: 0px 2px 6px rgba(0,0,0,0.3);

    &:hover {
        box-shadow: 0px 6px 10px rgba(0,0,0,0.3);
        transform: translateY(-4px);
    }
`;

export const Registrar = styled.a`
    margin-top: 1em;
    cursor: pointer;
`;