async function listaEstadosbr() {
    const estados = await (await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')).json();
    const listaEstados = document.getElementById('lista-estados');
    
    estados.forEach(estado => {
        const item = document.createElement('li');
        const a = document.createElement('a');
        const uf = estado.sigla;


        item.appendChild(a);
        a.href = `municipios/index.html?uf=${uf}`;
        a.innerHTML = estado.nome;
        a.className = 'link-estados';
        listaEstados.appendChild(item);
    });
}
listaEstadosbr();