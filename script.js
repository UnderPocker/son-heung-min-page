const themeSwitch = document.getElementById('theme-checkbox');
const body = document.body;

// Проверяем сохраненную тему в localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeSwitch.checked = true;
}

// Обработчик для переключателя
themeSwitch.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});