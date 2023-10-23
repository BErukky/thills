const die = document.querySelector('.bar');
const close = document.getElementById('close')
const nav = document.querySelector('.shc');


die.addEventListener('click', () => {
  nav.classList.toggle("open")

});
close.addEventListener('click', () => {
  nav.classList.remove("open")
});
