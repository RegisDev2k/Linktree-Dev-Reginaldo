document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                document.getElementById(this.getAttribute('data-tab')).classList.remove('active');
            } else {
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                this.classList.add('active');
                document.getElementById(this.getAttribute('data-tab')).classList.add('active');
            }
        });
    });

    const themeToggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;

    // Inicialização: Verifica se já há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateThemeButton(savedTheme === 'dark-mode');
    } else {
        // Define o tema padrão como light-mode
        body.classList.add('light-mode');
    }

    themeToggleButton.addEventListener('click', function() {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            updateThemeButton(true);
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            updateThemeButton(false);
        }
    });

    function updateThemeButton(isDarkMode) {
        const sunIcon = themeToggleButton.querySelector('.fa-sun');
        const moonIcon = themeToggleButton.querySelector('.fa-moon');
        if (isDarkMode) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
});
