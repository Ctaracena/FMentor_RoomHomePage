const mobileBack = document.querySelector('.mobile-back')
const mobileForward = document.querySelector('.mobile-forward')
const mobileHero = document.querySelector('.hero')
const mobileTitle = document.querySelector('.title')
const mobileText = document.querySelector('.text')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileNavbar = document.querySelector('.mobile-navbar')
const mobileClose = document.querySelector('.mobile-close')

mobileMenu.addEventListener('click', () => {
  mobileNavbar.style.animationName = 'slide-bottom'
  mobileNavbar.style.display = 'flex'
})

mobileClose.addEventListener('click', () => {
  mobileNavbar.style.display = 'none'
})



let mobilePic = 1

mobileForward.addEventListener('click', () => {
  if (mobilePic == 1) {
    mobileHero.style.backgroundImage = "url('../images/mobile-image-hero-2.jpg')"
    mobileTitle.innerHTML = 'We are available all across the globe'
    mobileText.innerHTML = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
    mobilePic++
  } else if (mobilePic == 2) {
    mobileHero.style.backgroundImage = "url('../images/mobile-image-hero-3.jpg')"
    mobileTitle.innerHTML = 'Manufactured with the best materials'
    mobileText.innerHTML = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`
    mobilePic++
  } else {
    mobileHero.style.backgroundImage = "url('../images/mobile-image-hero-1.jpg')"
    mobileTitle.innerHTML = 'Discover innovative ways to decorate'
    mobileText.innerHTML = `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form andnfunction in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`
    mobilePic = 1
  }
})

mobileBack.addEventListener('click', () => {
  if (mobilePic == 1) {
    mobileHero.style.backgroundImage = "url('../images/mobile-image-hero-3.jpg')"
    mobileTitle.innerHTML = 'Manufactured with the best materials'
    mobileText.innerHTML = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`
    mobilePic = 3
  } else if (mobilePic == 3) {
    mobileHero.style.backgroundImage = "url('../images/mobile-image-hero-2.jpg')"
    mobileTitle.innerHTML = 'We are available all across the globe'
    mobileText.innerHTML = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
    mobilePic = 2
  } else {
    mobileHero.style.backgroundImage = "url('../images/mobile-image-hero-1.jpg')"
    mobileTitle.innerHTML = 'Discover innovative ways to decorate'
    mobileText.innerHTML = `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form andnfunction in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`
    mobilePic = 1
  }
})

