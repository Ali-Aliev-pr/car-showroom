let tabParents = document.querySelectorAll('.main__map__main__adreses');
let tabss = document.querySelectorAll('.main__map__main__adres');
let selectedTab = document.querySelector('.main__map__main__adres__selected');

console.log(selectedTab)

let data_a = [41.462599, 45.091376];
let data_b = [41.693083, 44.801561];
let data_c = [41.651108, 41.636267];

function hideTab() {
  tabss.forEach(e => {
    e.classList.remove('main__map__main__adres__selected')
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
  tabss[i].classList.add('main__map__main__adres__selected')
  if (window.map) {
    window.map.setCenter(selected)
  } 
  // console.log(selectedTab)
}

hideTab()
showTab()

tabParents[0].addEventListener('click', (event) => {
  let select = event.target
  console.log(select)

  selectedTab = select
  if (select) {
    tabss.forEach((e, i) => {
      // console.log(e.dataset.geo)
      if (select.dataset.geo === e.dataset.geo) {
        hideTab()
        showTab(i)
      }
    })
  }
})

function init() {

  let selected = data_c

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