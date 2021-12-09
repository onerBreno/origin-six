const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// shadow header when scroll
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const headerHeight = header.offsetHeight

  if (window.scrollY >= headerHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// back to top
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 600) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})

// plugin swiper for carousel
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// scrollreveal show elements when scroll on page
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact adress,
  footer .container
`,
  { interval: 100 }
)
