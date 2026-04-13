// Agrega la funcionalidad del dark mode
const btnTheme = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Cargar tema guardado
if (localStorage.getItem('theme') === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    btnTheme.textContent = '☀️'; // Cambia el icono opcionalmente
}

btnTheme.addEventListener('click', () => {
    if (htmlElement.hasAttribute('data-theme')) {
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        btnTheme.textContent = '🌓';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        btnTheme.textContent = '☀️';
    }
});