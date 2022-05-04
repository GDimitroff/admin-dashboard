const sidebar = document.querySelector('.sidebar');
const logo = document.querySelector('.logo-container');

logo.addEventListener('click', handleToggle);

function handleToggle(e) {
  sidebar.classList.toggle('active');
}
