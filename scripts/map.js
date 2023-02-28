let tabParents = document.querySelectorAll('.main__map__main__left');
let tabss = document.querySelectorAll('.main__map__main__left__block');
let selectedTab = document.querySelector('.main__map__main__left__block__selected');

let data_a = [41.462599, 45.091376];
let data_b = [41.693083, 44.801561];
let data_c = [41.651108, 41.636267];

console.log(selectedTab)

function hideTab() {
  tabss.forEach(e => {
    e.classList.remove('main__map__main__left__block__selected')
  })
}

function showTab(i = 2) {
  let selected
  if (selectedTab.dataset.geo === 'a') {
    selected = data_a
  } else if (selectedTab.dataset.geo === 'b') {
    selected = data_b
  } else if (selectedTab.dataset.geo === 'c') {
    selected = data_c
  }
  tabss[i].classList.add('main__map__main__left__block__selected')
  if (window.map) {
    window.map.setCenter(selected)
  } 
  console.log(selectedTab)
}

hideTab()
showTab()

tabParents[0].addEventListener('click', (event) => {
  let select = event.target

  selectedTab = select
  if (select && select.classList.contains('main__map__main__left__block')) {
    tabss.forEach((e, i) => {
      if (select === e) {
        hideTab()
        showTab(i)
      }
    })
  }
})

function init() {

  let selected = data_c

  // if (selectedTab.dataset.geo === 'a') {
  //   selected = data_a
  // } else if (selectedTab.dataset.geo === 'b') {
  //   selected = data_b
  // } else if (selectedTab.dataset.geo === 'c') {
  //   selected = data_c
  // }

  window.map = new ymaps.Map('map-center', {
    center: selected,
    zoom: 16 
  });

  let placemarka = new ymaps.Placemark([41.462599, 45.091376], {}, {})
  let placemarkb = new ymaps.Placemark([41.693083, 44.801561], {}, {})
  let placemarkc = new ymaps.Placemark([41.651108, 41.636267], {}, {})

  map.geoObjects.add(placemarka)
  map.geoObjects.add(placemarkb)
  map.geoObjects.add(placemarkc)
}

ymaps.ready(init);