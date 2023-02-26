var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination"  ,
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + "custom_point " + className + '">'  + "</span>";
    },
  },
});
