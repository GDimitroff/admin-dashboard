const main = document.querySelector('main');
const sidebar = document.querySelector('.sidebar');
const mobileBtn = document.querySelector('.mobile-btn');
const closeBtn = document.querySelector('.close-btn');

mobileBtn.addEventListener('click', (e) => {
  sidebar.classList.add('open');
  main.style.pointerEvents = 'none';
  main.style.filter = 'blur(5px)';
});

closeBtn.addEventListener('click', (e) => {
  sidebar.classList.remove('open');
  main.style.pointerEvents = 'auto';
  main.style.filter = 'none';
});
