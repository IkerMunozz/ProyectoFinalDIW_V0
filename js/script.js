document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const nav = document.querySelector('.header__nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }

    const inputs = document.querySelectorAll('.formulario__input');
    
    if (inputs.length > 0) {
        inputs.forEach(input => {
            input.classList.add("input-shake"); 
        });

        setTimeout(() => {
            inputs.forEach(input => {
                input.classList.remove("input-shake"); 
            });
        }, 300); 
    }
            document.getElementById('chat-icon').addEventListener('click', function() {
                document.getElementById('chat-container').style.right = '0'; 
            });
    
            document.getElementById('close-chat').addEventListener('click', function() {
                document.getElementById('chat-container').style.right = '-350px'; 
            });
    
            document.getElementById('chat-icon').addEventListener('click', function() {
                document.getElementById('chat-container').classList.toggle('translate-x-full');
            });
            
            document.getElementById('close-chat').addEventListener('click', function() {
                document.getElementById('chat-container').classList.add('translate-x-full');
            });
            document.getElementById('send-message').addEventListener('click', function() {
                const input = document.getElementById('chat-input').value;
                if(input.trim() !== '') {
                    const chatContent = document.getElementById('chat-content');
                    chatContent.innerHTML += `<p><strong>Tu:</strong> ${input}</p>`;
                    chatContent.innerHTML += `<p><strong>IA:</strong> ¡Gracias por tu mensaje!</p>`;
                    document.getElementById('chat-input').value = ''; 
                    chatContent.scrollTop = chatContent.scrollHeight; 
                }
            });
            

});




