const projetos = [{
        titulo: 'Meu Portfólio',
        imagem: './projeto.png',
        url: 'https://github.com/pablo-padua-dotcom/meu-portfolio'
    },
    {
        titulo: 'Meu Portfólio React',
        imagem: './projeto.png',
        url: 'https://github.com/pablo-padua-dotcom/meu-portfolio-react'
    }
];

const conteinerTrabalhos = document.getElementById('container-trabalhos');

conteinerTrabalhos.innerHTML = projetos.map(p => `
    <article class="card-trabalho">
        <img src="${p.imagem}" alt="${p.titulo}" class="imagem-trabalho">
        <div class="dados-trabalho">
            <h3>${p.titulo}</h3>
            <a href="${p.url}" class="ancora-repositorio">Explorar no GitHub →</a>
        </div>
    </article>
`).join('');

// Lógica de Tema
const btnAlternador = document.getElementById('alternador-tema');
btnAlternador.addEventListener('click', () => {
    document.body.classList.toggle('modo-noturno');
    const icone = btnAlternador.querySelector('i');

    if (document.body.classList.contains('modo-noturno')) {
        icone.className = 'fas fa-sun';
    } else {
        icone.className = 'fas fa-moon';
    }
});
