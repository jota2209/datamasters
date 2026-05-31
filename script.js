document.addEventListener('DOMContentLoaded', () => {
    console.log('El sistema de Data Masters está en línea...');

    // Lista exacta de las cartas
    const cardNames = [
        'mongo_full', 'nosql_full', 'jira_full', 'datasete_full', 
        'sqlite_full', 'postgres_full', 'postgis_full', 'wsl_full', 
        'latex_full', 'pythongandr_full', 'proxmox_full', 'tux_full', 
        'docker_full', 'git_full', 'octocat_full'
    ];

    const cardsContainer = document.getElementById('cards-container');

    // 1. Generar las cartas dinámicamente
    cardNames.forEach(name => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        cardDiv.innerHTML = `
            <img src="assets/images/${name}.png" alt="Carta ${name.replace('_full', '')}" loading="lazy">
        `;
        
        cardsContainer.appendChild(cardDiv);
    });

    // 2. Lógica del Modal (Visor de cartas ampliado)
    const modal = document.getElementById('card-modal');
    const modalImg = document.getElementById('expanded-card');
    const closeBtn = document.querySelector('.close-modal');

    // Seleccionamos todas las imágenes de las cartas recién creadas
    const cardImages = document.querySelectorAll('.card img');

    // Función para abrir el modal
    cardImages.forEach(img => {
        img.addEventListener('click', (e) => {
            modal.classList.add('show');
            modalImg.src = e.target.src; // Pasa la ruta de la carta clickeada al modal
            document.body.classList.add('modal-open'); // Evita que la página de fondo haga scroll
        });
    });

    // Función para cerrar el modal
    const closeModal = () => {
        modal.classList.remove('show');
        document.body.classList.remove('modal-open');
        // Pequeño retraso para vaciar la fuente de la imagen después de la animación
        setTimeout(() => { modalImg.src = ''; }, 300);
    };

    // Cerrar al hacer clic en la "X"
    closeBtn.addEventListener('click', closeModal);

    // Cerrar al hacer clic en el fondo oscuro (fuera de la imagen)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cerrar al presionar la tecla "Escape" del teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
});