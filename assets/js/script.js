// infinite loop functions
var navList = document.querySelectorAll('.nav-list');
var slideBtn = document.querySelectorAll('.slide-btn');
var hamburger = document.querySelector('.hamburger');
var nextBtn = document.querySelector('.next-btn');
var prevBtn = document.querySelector('.prev-btn');
var inputName = document.querySelector('#name');
var email = document.querySelector('#email');
var textArea = document.querySelector('#textarea');
var form = document.querySelector('#contactForm');
var stringPattern = /^[a-zA-Z]+$/g;
var messagePattern = /^[a-zA-Z\s]+$/g;
var emailPattern = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

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

// slider function
slideBtn.forEach(function (staff) {
  staff.addEventListener('click', function () {
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

  nextBtn.addEventListener('click', function () {
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


// submit function
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var activeErrors = document.querySelectorAll('.show-error');
  console.log(activeErrors.length);
  if (inputName.value  && textArea.value && email.value  && (activeErrors.length == 0)) {
    alert('submitted');
  } else {
    console.log('fill required fields');
    validateError(inputName, stringPattern, "*whitespace and numbers are not allowed", 3);
    validateError(textArea, messagePattern, "*whitespace and numbers are not allowed", 10);
    validateError(email, emailPattern, "*invalid email");
  }
});

// onBlur input function
inputName.addEventListener('blur', function () {
  validateError(inputName, stringPattern, "*whitespace and numbers are not allowed", 3);
});

textArea.addEventListener('blur', function () {
  validateError(textArea, messagePattern, "*whitespace and numbers are not allowed", 10);
});

email.addEventListener('blur', function () {
  validateError(email, emailPattern, "*invalid email");
});

// error function 
function validateError(input, pattern, message, Length = '') {
  var inputError = input.parentElement.children;
  for (var i = 0; i < inputError.length; i++) {
    if (inputError[i].classList.contains('err')) {
      if (input.value) {
        if (input.value.match(pattern)) {
          if (inputError[0].classList.contains('textInput')) {
            if (input.value.length > Length) {
              input.classList.add('error');
              inputError[i].classList.add('show-error');
              inputError[i].innerText = '*only 10 characters are allowed';
            } else if (input.value.length < 3) {
              input.classList.add('error');
              inputError[i].classList.add('show-error');
              inputError[i].innerText = '*characters must be more than 3 characters';
            }
             else {
              input.classList.remove('error');
              inputError[i].classList.remove('show-error');
              input.classList.add('success');
            }
          } else {
            if (input.value.length < Length) {
              input.classList.add('error');
              inputError[i].classList.add('show-error');
              inputError[i].innerText = '*characters must be more than 3 characters';
            } else {
              input.classList.remove('error');
              inputError[i].classList.remove('show-error');
              input.classList.add('success');
            }
          }
        } else {
          input.classList.add('error');
          inputError[i].classList.add('show-error');
          inputError[i].innerText = message;
        }
      } else {
        input.classList.add('error');
        inputError[i].classList.add('show-error');
        inputError[i].innerText = '*field is required';
      }
    }
  }
}


















