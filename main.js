document.addEventListener('DOMContentLoaded', function() {
    const startScreen = document.getElementById('startScreen');
    const formsContainer = document.getElementById('formsContainer');
    const startBtn = document.getElementById('startBtn');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');

    startBtn.addEventListener('click', function() {
        startScreen.style.display = 'none';
        formsContainer.style.display = 'flex';
    });

    showLogin.addEventListener('click', function() {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    showRegister.addEventListener('click', function() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });
});