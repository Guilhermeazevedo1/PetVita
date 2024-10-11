document.addEventListener('DOMContentLoaded', () => {
    const userMenuButton = document.getElementById('user-menu-button');
    const userMenu = document.getElementById('user-menu');
    const petModal = document.getElementById('pet-modal');
    const circleButton = document.querySelector('.fixed.bottom-10.right-10 button');
    const closeModalButton = document.getElementById('close-modal');
    const petCardsContainer = document.getElementById('pet-cards-container');

    userMenuButton.addEventListener('click', () => {
        userMenu.classList.toggle('hidden');
    });

    // Abre o modal ao clicar no botão circular
    circleButton.addEventListener('click', () => {
        petModal.classList.remove('hidden');
    });

    // Fecha o modal ao clicar no botão fechar
    closeModalButton.addEventListener('click', () => {
        petModal.classList.add('hidden');
    });

    // Logica para salvar o pet
    document.getElementById('save-pet').addEventListener('click', () => {
        const petName = document.getElementById('pet-name').value;
        const petType = document.getElementById('pet-type').value;
        const petGender = document.getElementById('pet-gender').value;
        const petPhotoInput = document.getElementById('pet-photo');
        const petPhoto = petPhotoInput.files[0];

        if (petPhoto) {
            const reader = new FileReader();
            reader.onload = function (e) {
                // Cria um novo card
                const petCard = document.createElement('div');
                petCard.classList.add('bg-white', 'rounded-lg', 'p-4', 'shadow-md', 'm-2', 'w-1/4', 'custom-shadow', 'w-1/4');
                petCard.innerHTML = `
                    <img src="${e.target.result}" alt="${petName}" class="w-full h-32 object-cover rounded-md mb-2">
                    <h3 class="text-lg font-semibold">${petName}</h3>
                    <p>${petType}</p>
                    <p>${petGender}</p>
                `;

                // Evento de clique no card
                petCard.addEventListener('click', () => {
                    // Armazena apenas os dados essenciais
                    localStorage.setItem('petName', petName);
                    localStorage.setItem('petType', petType);
                    localStorage.setItem('petGender', petGender);
                    // Não armazene a imagem aqui se for muito grande

                    // Redirecionando para a página
                    window.location.href = '../Pages/InformacoesPet.html';
                });

                // Adiciona o card ao container
                petCardsContainer.appendChild(petCard);

                // Limpa os campos após salvar
                document.getElementById('pet-name').value = '';
                document.getElementById('pet-type').value = '';
                document.getElementById('pet-gender').value = '';
                petPhotoInput.value = ''; // Limpa o campo da foto
                petModal.classList.add('hidden'); // Fecha o modal após salvar
            };

            reader.readAsDataURL(petPhoto); // Lê a imagem como URL de dados
        }
    });
});
