const open = document.querySelector('.open');
const close = document.querySelector('.close');
const nav = document.querySelector('.navbar');
const main = document.querySelector('main');

open.addEventListener('click', function(){
  open.style.display = 'none'
  close.style.display = 'block'

  nav.style.display = 'flex';
  main.style.display = 'none';
})

close.addEventListener('click', function(){
  open.style.display = 'block'
  close.style.display = 'none'

  nav.style.display = 'none';
  main.style.display = 'flex';
})