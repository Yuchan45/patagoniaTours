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

const menuBtn = document.querySelector('#menu');
const bars = document.querySelector('#bars');
const closeBtn = document.querySelector('#close');

const navUl = document.querySelector('#nav-ul');

let menuOpen = false;

menuBtn.addEventListener('click', function () {
  if (!menuOpen) {
    navBar.classList.add('active-menu');
    bars.classList.remove('active-icon');
    closeBtn.classList.add('active-icon');

    menuOpen = true;
  } else {
    navBar.classList.remove('active-menu');
    closeBtn.classList.remove('active-icon');
    bars.classList.add('active-icon');

    menuOpen = false;
  }
});
