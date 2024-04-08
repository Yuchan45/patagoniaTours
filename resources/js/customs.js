/* Nav Bar */
const navBar = document.querySelector('#nav-id');
var scrollTop = window.scrollY;

window.onscroll = function () {
  if (window.scrollY > 15) {
    navBar.classList.add('active-header');
  } else {
    navBar.classList.remove('active-header');
  }
};

/* Selected nav-item */
// const destinations = document.querySelector('#destinations');
// const aboutUs = document.querySelector('#aboutUs');
// const reviews = document.querySelector('#reviews');

// destinations.click((e) => {
//   destinations.classList.add('selected-item');
// });
