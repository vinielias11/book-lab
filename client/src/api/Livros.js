export const adicionarNovoLivro = async (dto) => {
    const response = await fetch('http://localhost:1337/api/addLivro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: dto.titulo,
            autor: dto.autor,
            paginas: dto.paginas,
            avaliacao: dto.avaliacao,
            usuario: dto.usuario
        })
    });

    return response.json();
}