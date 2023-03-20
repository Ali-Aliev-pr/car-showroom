let button = document.querySelector('.burger__button');
let menu = document.querySelector('.burger__menu');

button.addEventListener('click', () => {
  if (menu.classList.contains('burger__menu__close')) {
    menu.classList.remove('burger__menu__close')
    menu.classList.add('burger__menu__open')
  } else if (menu.classList.contains('burger__menu__open')) {
    menu.classList.remove('burger__menu__open')
    menu.classList.add('burger__menu__close')
  }
})

console.log(button)
console.log(menu)