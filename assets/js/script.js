// infinite loop functions
var navList = document.querySelectorAll('.nav-list');
var slideBtn = document.querySelectorAll('.slide-btn');
var hamburger = document.querySelector('.hamburger');
var nextBtn = document.querySelector('.next-btn');
var prevBtn = document.querySelector('.prev-btn');

// nav function 
navList.forEach(function (list) {
  list.addEventListener('click', function () { 
    var activeNav = document.querySelector('.active-nav');
    activeNav.classList.remove('active-nav');
    list.classList.add('active-nav');
  });
});

// hamburger function
hamburger.addEventListener('click',function(){
  hamburger.classList.toggle('active-hamburger');
  document.documentElement.classList.toggle('removeScroll');
})

// slider function
slideBtn.forEach(function (staff) {
  staff.addEventListener('click',function(){
    var activeBtn = document.querySelector('.active-btn');
    activeBtn.classList.remove('active-btn');
    staff.classList.add('active-btn');
    slider();
  });
});


var staffCards = document.querySelector('.staff-cards');
var galleryItems = document.querySelector('.gallery-items');

// function slider(num) {
//   staffCards.scrollBy({
//     left: num,
//     behavior: 'smooth'
//   });
// }

function slider(num) {
  galleryItems.scrollBy({
    left: num,
    behavior: 'smooth'
  });
}

function cardSlider(size) {

nextBtn.addEventListener('click',function () {
  slider(size);
})
prevBtn.addEventListener('click', function () {
  slider(-size);
})

}

if (window.innerWidth > 769 && window.innerWidth <= 995) {
  cardSlider(821);
} else if (window.innerWidth > 640 && window.innerWidth <= 768) {
  cardSlider(690);
}




















