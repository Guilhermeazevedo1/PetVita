document.addEventListener('DOMContentLoaded', () => {
    const userMenuButton = document.getElementById('user-menu-button');
    const userMenu = document.getElementById('user-menu');

    userMenuButton.addEventListener('click', () => {
        userMenu.classList.toggle('hidden');
    });

    // Recuperando os dados
    const petName = localStorage.getItem('petName');
    const petType = localStorage.getItem('petType');
    const petGender = localStorage.getItem('petGender');
    
    // Define os valores dos campos na página
    document.getElementById('pet-name-display').textContent = petName;
    // Você pode decidir como lidar com a imagem, caso necessário.

    // Lógica do botão excluir
    document.getElementById('delete-pet').addEventListener('click', () => {
        const storedPets = JSON.parse(localStorage.getItem('pets')) || [];
        const updatedPets = storedPets.filter(pet => pet.name !== petName);
        localStorage.setItem('pets', JSON.stringify(updatedPets));

        // Redireciona de volta para a home
        window.location.href = 'Home.html';
    });

    // Lógica do botão editar (pode ser mais elaborada conforme necessário)
    document.getElementById('edit-pet').addEventListener('click', () => {
        window.location.href = `EditPet.html?name=${petName}`;
    });
});
