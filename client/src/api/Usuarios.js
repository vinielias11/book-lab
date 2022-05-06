export const login = async (email, senha) => {
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

    return response.json();
};

export const registrar = async (nome, email, senha) => {
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

  return response.json();
};