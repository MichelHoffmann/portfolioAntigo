window.addEventListener('scroll', showButton)
window.addEventListener('scroll', navColor)

const buttonTop = document.getElementById('backToTopButton')
const navMenu = document.getElementById('navv')

function showButton() {
  if (scrollY >= 600) {
    buttonTop.classList.add('showButton')
  } else {
    buttonTop.classList.remove('showButton')
  }
}

function navColor() {
  if (scrollY >= 1) {
    navMenu.classList.add('scroll')
  } else {
    navMenu.classList.remove('scroll')
  }
}
