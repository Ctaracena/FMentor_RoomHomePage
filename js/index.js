const back = document.querySelector('.back')
const forward = document.querySelector('.forward')
const hero = document.querySelector('.hero')
const title = document.querySelector('.title')
const text = document.querySelector('.text')

let pic = 1

forward.addEventListener('click', () => {
  if (pic == 1) {
    hero.style.backgroundImage = "url('../images/desktop-image-hero-2.jpg')"
    title.innerHTML = 'We are available all across the globe'
    text.innerHTML = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
    pic++
  } else if (pic == 2) {
    hero.style.backgroundImage = "url('../images/desktop-image-hero-3.jpg')"
    title.innerHTML = 'Manufactured with the best materials'
    text.innerHTML = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`
    pic++
  } else {
    hero.style.backgroundImage = "url('../images/desktop-image-hero-1.jpg')"
    title.innerHTML = 'Discover innovative ways to decorate'
    text.innerHTML = `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form andnfunction in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`
    pic = 1
  }
})

back.addEventListener('click', () => {
  if (pic == 1) {
    hero.style.backgroundImage = "url('../images/desktop-image-hero-3.jpg')"
    title.innerHTML = 'Manufactured with the best materials'
    text.innerHTML = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`
    pic = 3
  } else if (pic == 3) {
    hero.style.backgroundImage = "url('../images/desktop-image-hero-2.jpg')"
    title.innerHTML = 'We are available all across the globe'
    text.innerHTML = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
    pic = 2
  } else {
    hero.style.backgroundImage = "url('../images/desktop-image-hero-1.jpg')"
    title.innerHTML = 'Discover innovative ways to decorate'
    text.innerHTML = `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form andnfunction in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`
    pic = 1
  }
})

