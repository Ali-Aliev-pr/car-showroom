const rangeSlider = document.querySelector("#range-slider")
const rangeSlider2 = document.querySelector('.main__credit__cal__slider__2')
const rangeSlider3 = document.querySelector('.main__credit__cal__slider__3')

let input1 = document.querySelector('.main__credit__cal__block__left__futurecar__input').addEventListener("change", result);
let input2 = document.querySelector('#input-2').addEventListener("change", result)
let input3 = document.querySelector('#input-3').addEventListener("change", result)
let result__span = document.querySelector('.main__credit__cal__block__left__last__btn__second__text__span');

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function calcMonthlyPayment(price, firstPayment, months, rate) {
  firstPayment = typeof firstPayment === 'undefined' ? price * .3 : firstPayment;
  months = typeof months === 'undefined' ? 84 : months;

  return (rate === 0) ? Math.ceil((price - firstPayment) / months): Math.ceil(((rate / 1200 * (price - firstPayment)) * -1 * Math.pow(1+rate / 1200, months)) / (1 - Math.pow(1 + rate / 1200, months)));
};

function result() {
  let final = calcMonthlyPayment(
    +document.querySelector('.main__credit__cal__block__left__futurecar__input').value,
    +document.querySelector('#input-2').value,
    +document.querySelector('#input-3').value,
    +0.1
    )

  // console.log(final)

  let spaces = numberWithSpaces(final)

  document.querySelector('.main__credit__cal__block__left__last__btn__second__text__span').innerHTML = spaces;
}

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [20],
    connect: 'lower',
    step: 10000,
    range: {
        'min': 10000,
        'max': 15000000
    }
  });

  const input1 = document.getElementById('input-1');
  const inputs = [input1];

  rangeSlider.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle])

    document.querySelector(".main__credit__cal__block__left__futurecar__text").innerHTML = numberWithSpaces(document.querySelector('.main__credit__cal__block__left__futurecar__input').value)
    result()
  })

  const setRangeSlider = (i, value) => {
    let arr = [null]
    arr[i] = value

    rangeSlider.noUiSlider.set(arr)
  }

  inputs.forEach((el, index) => {
    el.addEventListener('input', (e) => {
      setRangeSlider(index, e.currentTarget.value)
    })
  })

}

if (rangeSlider2) {
  noUiSlider.create(rangeSlider2, {
    start: [20],
    connect: 'lower',
    step: 10000,
    range: {
        'min': 1000,
        'max': 1000000
    }
  });

  const input2 = document.getElementById('input-2');
  const inputs = [input2];

  rangeSlider2.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle])

    document.querySelector(".main__credit__cal__block__left__vsnos__left__child__texxt__one").innerHTML = numberWithSpaces(document.querySelector('#input-2').value)
    result()
  })

  const setRangeSlider = (i, value) => {
    let arr = [null]
    arr[i] = value

    rangeSlider2.noUiSlider.set(arr)
  }

  inputs.forEach((el, index) => {
    el.addEventListener('input', (e) => {
      setRangeSlider(index, e.currentTarget.value)
    })
  })
}

if (rangeSlider3) {
  noUiSlider.create(rangeSlider3, {
    start: [6],
    connect: 'lower',
    step: 2,
    range: {
        'min': 6,
        'max': 84
    }
  });

  const input3 = document.getElementById('input-3');
  const inputs = [input3];

  rangeSlider3.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle])

    document.querySelector(".main__credit__cal__block__left__vsnos__left__texxt__two").innerHTML = numberWithSpaces(document.querySelector('#input-3').value)
    result()
  })

  const setRangeSlider = (i, value) => {
    let arr = [null]
    arr[i] = value

    rangeSlider3.noUiSlider.set(arr)
  }

  inputs.forEach((el, index) => {
    el.addEventListener('input', (e) => {
      setRangeSlider(index, e.currentTarget.value)
    })
  })
}


// --------------------------------------

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination"  ,
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + "custom_point " + className + '">'  + "</span>";
    },
  },
});


// -------------------------------------


var element = document.getElementById('phone__mask');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);


NiceSelect.bind(document.querySelector(".nice-select"));
NiceSelect.bind(document.querySelector(".nice-select2"));
NiceSelect.bind(document.querySelector(".nice-select3"));
NiceSelect.bind(document.querySelector(".nice-select4"));
NiceSelect.bind(document.querySelector(".nice-select5"));
NiceSelect.bind(document.querySelector(".nice-select6"));