//sticky navbar

let nav = document.querySelector('.nav-active');

window.onscroll = function () {
  if (document.documentElement.scrollTop > 10) {
    nav.classList.add('active-scroll');
  } else {
    nav.classList.remove('active-scroll');
  }
}


//scroll reveal

const scroll = ScrollReveal();

scroll.reveal('.home-col, .slogan, .social', {
  origin: 'bottom',
  distance: '50px',
  duration: 2500,
  interval: 500,
  scale: 1
})

scroll.reveal('.about-col', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  interval: 500,
  scale: 1
})

scroll.reveal('.left', {
  origin: 'left',
  distance: '25px',
  duration: 1000,
  interval: 500,
  scale: 1
})