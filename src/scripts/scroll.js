const scrollBtn = document.querySelector(".scroll__down");
const scrollAbout = document.querySelector('.summary');
const fullScreenMenu = document.querySelector('.fullscreen-menu')
const fullScreenMenuBtn = document.querySelector('.gamburger')
const fullScreenMenuBtnClose = document.querySelector('.fullscreen-menu__close')

fullScreenMenuBtn.addEventListener("click", e => {
  e.preventDefault();
  fullScreenMenu.style.transition = "1s"
  fullScreenMenu.style.right = '0'
})

fullScreenMenuBtnClose.addEventListener("click", e => {
  e.preventDefault();
  fullScreenMenu.style.right = "-35%"
})

scrollBtn.addEventListener("click", e => {
  e.preventDefault();

  scrollAbout.scrollIntoView({ block: "center", behavior: "smooth"});
})

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    fullScreenMenu.style.transition = ".2s"
    fullScreenMenu.style.right = '-35%'
    
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}