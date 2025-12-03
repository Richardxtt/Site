// Script para interatividade futura

console.log("Site da Clínica Odontológica Sorriso Perfeito carregado com sucesso!");

// Exemplo de como você poderia adicionar validação de formulário no futuro
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (name === '' || email === '' || message === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Aqui você enviaria os dados do formulário para um servidor
            alert(`Obrigado pelo seu contato, ${name}! Sua mensagem foi enviada.`);
            contactForm.reset();
        });
    }
});
