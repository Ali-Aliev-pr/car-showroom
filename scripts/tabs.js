(function () {
  let tabsParent = document.querySelectorAll('.main__buy__selection__filter')
let tabs = document.querySelectorAll('.main__buy__selection__filter__btn')
let selected__tab = document.querySelector('.main__buy__selection__filter__btn__selected')
// console.log(selected__tab.dataset.price)

let cardsParent = document.querySelectorAll('.main__buy__selection__cards')
let cards = document.querySelectorAll('.main__buy__selection__cards__card')

function cardsFilter() {
  cards.forEach((e) => {
    console.log(e.dataset.price, selected__tab.dataset.price)
    if (+e.dataset.price > +selected__tab.dataset.price) {
      e.style.display = 'none'
    } else {
      e.style.display = 'block'
    }
  })
}

function hideTab() {
  tabs.forEach(e => {
    e.classList.remove('main__buy__selection__filter__btn__selected')
  })
}

function showTab(i = 3) {
  tabs[i].classList.add('main__buy__selection__filter__btn__selected')
  // console.log(selected__tab)
}

cardsFilter()
hideTab()
showTab()

tabsParent[0].addEventListener('click', (event) => {
  let select = event.target

  selected__tab = select
  if (select && select.classList.contains('main__buy__selection__filter__btn')) {
    tabs.forEach((e, i) => {
      if (select === e) {
        hideTab()
        showTab(i)
        cardsFilter()
      }
    })
  }
})
})()