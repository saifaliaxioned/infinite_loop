// infinite loop functions
var isValid = false;
var navList = document.querySelectorAll('.nav-list');
var slideBtn = document.querySelectorAll('.slide-btn');
var hamburger = document.querySelector('.hamburger');
var nextBtn = document.querySelector('.next-btn');
var prevBtn = document.querySelector('.prev-btn');
var staffCards = document.querySelector('.staff-cards');
var galleryItems = document.querySelector('.gallery-items');
var galleryList = document.querySelectorAll('.gallery-list img');
var galleryModal = document.querySelector('.modalDiv');
var modalImage = document.querySelector('.modalDiv img');
var submitModal = document.querySelector('.submitModal');
var inputName = document.querySelector('.name');
var email = document.querySelector('.email');
var textArea = document.querySelector('.textarea');
var form = document.querySelector('.contactForm');
var submitBtn = document.querySelector('.input-control input');


// nav function 
navList.forEach(function (list) {
  list.addEventListener('click', function () {
    var activeNav = document.querySelector('.active-nav');
    activeNav.classList.remove('active-nav');
    list.classList.add('active-nav');
  });
});

// hamburger function
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active-hamburger');
  document.documentElement.classList.toggle('removeScroll');
})

// submit function
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (isValid) {
    submitModal.classList.remove('hide-content');
    document.documentElement.classList.add('removeScroll');
    for (var i = 0; i < 3; i++) {
      form.children[i].children[0].classList.remove('success');
    }
    form.reset();
    isValid = false;
  }
  else {
    var str = 'field is required';
    for (var i = 0; i < 3; i++) {
      var formValue = form.children[i].children[0].value;
      if (formValue == '') {
        form.children[i].children[1].innerText = str;
        form.children[i].children[1].classList.add('show-error');
        form.children[i].children[0].classList.add('error');
      }
    }
  }
});

// error function
for (var i = 0; i < 3; i++) {
  form.children[i].children[0].addEventListener('blur', validateError);
}
function validateError() {
  this.nextElementSibling.classList.remove('show-error');
  this.classList.remove('error');
  this.classList.add('success');
  var value = this.value.trim();
  var max = 20;
  var min = 3;
  var stringPattern = /^[a-zA-Z\s]+$/g;
  var emailPattern = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  isValid = true;
  try {
    if (this.classList.contains('textInput')) {
      max = 50;
    }
    if (value === '') {
      isValid = false;
      throw '*field is required';
    } else if (this.classList.contains('email')) {
      if (!emailPattern.test(value)) {
        isValid = false;
        throw '*invalid email';
      }
    } else {
      if (value.length < min || value.length > max) {
        isValid = false;
        throw '*characters must be more than 3 characters and less than ' + max;
      } else if (!stringPattern.test(this.value)) {
        isValid = false;
        throw '*numbers are not allowed';
      }
    }
  } catch (e) {
    this.nextElementSibling.innerText = e;
    this.nextElementSibling.classList.add('show-error');
    this.classList.remove('sucess');
    this.classList.add('error');
  }
};

// image modal function
galleryList.forEach(function (list) {
  list.addEventListener('click', function () {
    var imageSource = list.src;
    modalImage.src = imageSource;
    galleryModal.classList.remove('hide-content');
    document.documentElement.classList.add('removeScroll');
  });
});
galleryModal.addEventListener('click', function (e) {
  if (e.target === galleryModal || e.target === galleryModal.children[0].children[0].children[0]) {
    galleryModal.classList.add('hide-content');
    document.documentElement.classList.remove('removeScroll');
  };
}); 
submitModal.addEventListener('click', function (e) {
  if (e.target === submitModal || e.target === submitModal.children[0].children[1].children[0]) {
    submitModal.classList.add('hide-content');
    document.documentElement.classList.remove('removeScroll');
  };
});

$('.staff-cards').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 995,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        dots: false
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false
      }
    }
  ]
});

$('.gallery-items').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 400,
  slidesToShow: 5,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 995,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        dots: false
      }
    },
    {
      breakpoint: 482,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false
      }
    }
  ]
});






