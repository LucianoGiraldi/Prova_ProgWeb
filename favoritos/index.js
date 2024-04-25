async function carregafavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const listaFavoritos = document.getElementById('cidadesfavoritas');

    favoritos.forEach(favorito => {
        const item = document.createElement('li');
        const span = document.createElement('span');
        item.className = 'list-item';
        span.innerHTML = favorito.nome;
        item.appendChild(span);
        listaFavoritos.appendChild(item);
    });
}

carregafavoritos();