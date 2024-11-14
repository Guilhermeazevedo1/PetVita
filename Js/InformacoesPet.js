document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const subModal = document.getElementById('sub-modal');
    const modalTitle = document.getElementById('modal-title');
    const subModalTitle = document.getElementById('sub-modal-title');
    const modalContent = document.getElementById('modal-content');
    const subModalContent = document.getElementById('sub-modal-content');
    const modalAddButton = document.getElementById('modal-add-button');
    const petNameDisplay = document.getElementById('pet-name-display');
    
    // Exibir o nome do pet salvo
    const petName = localStorage.getItem('petName');
    if (petNameDisplay && petName) {
        petNameDisplay.textContent = petName;
    }

    // Função para abrir o modal principal com título e botão específicos
    function openModal(title, buttonLabel) {
        modalTitle.textContent = title;
        modalAddButton.textContent = buttonLabel;
        modal.classList.remove('hidden');
    }

    // Fechar o modal principal
    window.closeModal = function() {
        modal.classList.add('hidden');
    };

    // Fechar o sub-modal
    window.closeSubModal = function() {
        subModal.classList.add('hidden');
    };

    // Função para abrir o sub-modal com inputs específicos
    function openSubModal(title, contentHtml) {
        subModalTitle.textContent = title;
        subModalContent.innerHTML = contentHtml; // Define o conteúdo do sub-modal com inputs personalizados
        subModal.classList.remove('hidden');
    }

    // Função para abrir cada tipo de modal principal e configurar o botão "Adicionar"
    function openConsultasModal() {
        openModal('Consultas', 'Adicionar Consulta');
        
        modalAddButton.onclick = () => {
            const contentHtml = `
                <label for="consulta-types">Tipo de Consulta</label>
                <input type="text" id="consulta-types" placeholder="Tipo de Consulta" class="w-full p-2 border rounded-md">

                <label for="consulta-date">Data da Consulta</label>
                <input type="date" id="consulta-date" class="w-full p-2 border rounded-md mb-2">

                <label for="consulta-veterinarian">Veterinário Responsável</label>
                <input type="text" id="consulta-veterinarian" placeholder="Nome do Veterinário" class="w-full p-2 border rounded-md">

                <label for="consulta-obs">Observações</label>
                <input type="text" id="consulta-obs" placeholder="Medicações, Recomendações, etc." class="w-full p-2 border rounded-md">
            `;
            openSubModal('Adicionar Consulta', contentHtml);
        };
    }

    function openExamesModal() {
        openModal('Exames', 'Adicionar Exame');
        
        modalAddButton.onclick = () => {
            const contentHtml = `
                <label for="exame-type">Tipo de Exame</label>
                <input type="text" id="exame-type" placeholder="Nome do exame" class="w-full p-2 border rounded-md mb-2">

                <label for="exame-description">Descrição</label>
                <input type="text" id="exame-description" placeholder="Descrição do exame" class="w-full p-2 border rounded-md">

                <label for="exame-date">Data do Exame</label>
                <input type="date" id="exame-date" class="w-full p-2 border rounded-md mb-2">
            `;
            openSubModal('Adicionar Exame', contentHtml);
        };
    }

    function openProcedimentosModal() {
        openModal('Procedimentos', 'Adicionar Procedimento');
        
        modalAddButton.onclick = () => {
            const contentHtml = `
                <label for="procedimento-types">Tipo de Procedimento</label>
                <input type="text" id="procedimentos-types" placeholder="Tipo de Procedimento" class="w-full p-2 border rounded-md">

                <label for="procedimento-date">Data do Procedimento</label>
                <input type="date" id="procedimento-date" class="w-full p-2 border rounded-md mb-2">

                <label for="procedimento-veterinarian">Veterinário Responsável</label>
                <input type="text" id="procedimento-veterinarian" placeholder="Nome do Veterinário" class="w-full p-2 border rounded-md">
                
                <label for="procedimento-notes">Notas Adicionais</label>
                <input type="text" id="procedimento-notes" placeholder="Medicações, Recomendações, etc." class="w-full p-2 border rounded-md">
            `;
            openSubModal('Adicionar Procedimento', contentHtml);
        };
    }

    function openVacinasModal() {
        openModal('Vacinas', 'Adicionar Vacina');
        
        modalAddButton.onclick = () => {
            const contentHtml = `
                <label for="vacina-cod">Código da Vacina</label>
                <input type="text" id="vacina-cod" placeholder="Código da Vacina" class="w-full p-2 border rounded-md">

                <label for="vacina-types">Tipo da Vacina</label>
                <input type="text" id="vacina-types" placeholder="Tipo da Vacina (antirrábica, polivalente, etc.)" class="w-full p-2 border rounded-md">

                <label for="vacina-date">Data da Vacina</label>
                <input type="date" id="vacina-date" class="w-full p-2 border rounded-md mb-2">
                
                <label for="vacina-doses">Número total de doses</label>
                <input type="text" id="vacina-doses" placeholder="Número total de doses" class="w-full p-2 border rounded-md">

                <label for="vacina-applied-doce">Dose Aplicada</label>
                <input type="text" id="vacina-applied-doce" placeholder="1ª, 2ª, Reforço, etc." class="w-full p-2 border rounded-md">

                <label for="vacina-veterinarian">Veterinário Responsável</label>
                <input type="text" id="vacina-veterinarian" placeholder="Nome do Veterinário" class="w-full p-2 border rounded-md">

                <label for="vacina-lote">Lote da Vacina</label>
                <input type="text" id="vacina-lote" placeholder="Lote da Vacina" class="w-full p-2 border rounded-md">

                <label for="vacina-aplicacao">Lote da Aplicação</label>
                <input type="text" id="vacina-aplicacao" placeholder="Lote da Aplicação" class="w-full p-2 border rounded-md">
                
                <label for="vacina-notes">Notas Adicionais</label>
                <input type="text" id="vacina-notes" placeholder="Reações, Adversidades, etc." class="w-full p-2 border rounded-md">
            `;
            openSubModal('Adicionar Vacina', contentHtml);
        };
    }

    // Botões de ação para abrir os modais principais
    document.getElementById('consultas-button')?.addEventListener('click', openConsultasModal);
    document.getElementById('exames-button')?.addEventListener('click', openExamesModal);
    document.getElementById('procedimentos-button')?.addEventListener('click', openProcedimentosModal);
    document.getElementById('vacinas-button')?.addEventListener('click', openVacinasModal);


    // Função para excluir o pet
    document.getElementById('delete-pet')?.addEventListener('click', () => {
        let storedPets = JSON.parse(localStorage.getItem('pets')) || [];
        storedPets = storedPets.filter(pet => pet.name !== petName);
        localStorage.setItem('pets', JSON.stringify(storedPets));
        localStorage.removeItem('petName'); // Remove o pet atual
        alert('Pet excluído com sucesso!');
        window.location.href = 'Home.html'; // Redireciona para a Home
    });

    // Função para editar o pet
    document.getElementById('edit-pet')?.addEventListener('click', () => {
        openModal('Editar Pet', 'Salvar Edição');
        
        // Exemplo de preenchimento de campo para edição (ajuste conforme necessário)
        document.getElementById('pet-name-input').value = petName;
        
        // Salvar edição ao clicar no botão do modal
        modalAddButton.onclick = () => {
            const updatedName = document.getElementById('pet-name-input').value;
            let storedPets = JSON.parse(localStorage.getItem('pets')) || [];
            
            // Atualiza o pet na lista
            storedPets = storedPets.map(pet => pet.name === petName ? { ...pet, name: updatedName } : pet);
            localStorage.setItem('pets', JSON.stringify(storedPets));
            localStorage.setItem('petName', updatedName);
            petNameDisplay.textContent = updatedName;
            
            closeModal();
            alert('Informações do pet atualizadas com sucesso!');
            window.location.href = 'Home.html'; // Redireciona para a Home
        };
    });
    function salvarConsulta() {
        // Captura os valores dos inputs
        const tipo = document.getElementById('tipoConsulta').value;
        const data = document.getElementById('dataConsulta').value;
    
        // Verifica se os campos estão preenchidos
        if (!tipo || !data) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
    
        // Cria uma nova div para a consulta
        const consultaDiv = document.createElement('div');
        consultaDiv.className = 'flex items-center justify-between border p-2 mb-2';
    
        // Adiciona o ícone à esquerda
        const icon = document.createElement('span');
        icon.className = 'material-icons'; // Substitua por sua classe de ícone desejada
        icon.textContent = 'assignment'; // Ícone de exemplo
        consultaDiv.appendChild(icon);
    
        // Adiciona o título (tipo da consulta) no meio
        const title = document.createElement('h4');
        title.textContent = "Consulta"; // Título fixo para "Consulta"
        title.className = 'flex-grow text-center';
        consultaDiv.appendChild(title);
    
        // Adiciona o tipo de consulta abaixo do título
        const tipoPara = document.createElement('p');
        tipoPara.textContent = tipo; // Aqui você usa o valor do input tipo
        consultaDiv.appendChild(tipoPara);
    
        // Adiciona a data à direita
        const datePara = document.createElement('p');
        datePara.textContent = data;
        datePara.className = 'ml-2';
        consultaDiv.appendChild(datePara);
    
        // Adiciona a nova div de consulta na lista de consultas
        document.getElementById('consultasList').appendChild(consultaDiv);
    
        // Limpa os campos do submodal
        document.getElementById('tipoConsulta').value = '';
        document.getElementById('dataConsulta').value = '';
    
        // Fechar o submodal (opcional)
        fecharSubmodal();
    }
    
    // Função para fechar o submodal
    function fecharSubmodal() {
        document.getElementById('submodalConsulta').classList.add('hidden');
    }
    
    // Vinculando o botão ao evento de clique
    document.getElementById('btnSalvarConsulta').addEventListener('click', salvarConsulta);
    
    // Função para fechar o submodal
    function fecharSubmodal() {
        document.getElementById('submodalConsulta').classList.add('hidden');
    }

    
});
