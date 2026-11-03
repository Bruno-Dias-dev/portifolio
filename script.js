    // Seleciona os botoes de filtro e os cartoes de projeto da pagina.
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Configura o comportamento de clique de cada filtro.
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {

            // Remove a classe active de todos os botoes.
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Adiciona active no botão clicado
            button.classList.add('active');

            // Le a categoria definida no atributo data-filter do botao.
            const filter = button.dataset.filter.toLowerCase();

            projectCards.forEach(card => {

                // Le as tecnologias associadas ao projeto no atributo data-technologies.
                const technologies = card.dataset.technologies.toLowerCase();

                // Exibe todos os projetos ou somente os que incluem a tecnologia selecionada.
                if (
                    filter === 'todos' ||
                    technologies.includes(filter)
                ) {
                    // Mantem visivel o projeto correspondente ao filtro.
                    card.style.display = 'block';
                } else {
                    // Oculta o projeto que nao corresponde ao filtro.
                    card.style.display = 'none';
                }

            });
        });
    });