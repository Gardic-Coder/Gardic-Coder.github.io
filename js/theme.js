const toggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Función para actualizar el ícono
function updateIcon(mode) {
  if (mode === 'dark') {
    themeIcon.classList.replace('bi-moon-stars', 'bi-brightness-high');
  } else {
    themeIcon.classList.replace('bi-brightness-high', 'bi-moon-stars');
  }
}

// Cargar preferencia guardada
if (localStorage.getItem('theme') === 'dark') {
  body.classList.replace('light-mode', 'dark-mode');
  updateIcon('dark');
} else {
  body.classList.add('light-mode');
  updateIcon('light');
}

// Evento de cambio
toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.replace('light-mode', 'dark-mode');
    localStorage.setItem('theme', 'dark');
    updateIcon('dark');
  } else {
    body.classList.replace('dark-mode', 'light-mode');
    localStorage.setItem('theme', 'light');
    updateIcon('light');
  }
});