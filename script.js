// Custom Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e =>{
  cursor.style.top = e.pageY - 17 + 'px';
  cursor.style.left = e.pageX - 17 + 'px';
})
// Change cursor on links
document.querySelectorAll('a').forEach(links=>{
  
  links.onmouseenter = () =>{
    cursor.classList.add('active');
  }
  links.onmouseleave = () =>{
    cursor.classList.remove('active');
  }
});

// media query for the cursor

var mq = window.matchMedia( "(min-width: 960px)" );

const toggleHover = document.querySelector('#menu-toggle');

if (mq.matches) {
    // window width is at less than 960px

    toggleHover.addEventListener('mouseover', ()=>{
      cursor.style.display = 'none';
    })
    toggleHover.addEventListener('mouseout', ()=>{
      cursor.style.display = 'block';
    })
}
else {
    // window width is greater than 960px
    toggleHover.addEventListener('mouseover', ()=>{
      cursor.style.display = 'none';
    })
    toggleHover.addEventListener('mouseout', ()=>{
      cursor.style.display = 'none';
    })
}

// cursor script without the media querie
// const toggleHover = document.querySelector('#menu-toggle');
//   toggleHover.addEventListener('mouseover', ()=>{
//     cursor.style.display = 'none';
//   })
//   toggleHover.addEventListener('mouseout', ()=>{
//     cursor.style.display = 'block';
//   })



// Hover Effect Hamburger


// Show Menu
const menu = document.getElementById('menu-toggle');
const showMenu = document.querySelector('.navbar-menu')

if(menu){
  menu.addEventListener('click', () =>{
    menu.classList.toggle('active');
    showMenu.classList.toggle('active')
  })
}

// var s = skrollr.init();

// Swiper
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  // slidesPerView: 1,
  // speed: 4000,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: false,
  },
  initialSlide: 0,
  loop: false,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    // type: "fraction",
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return ('0' + current).slice(-2) + ' / ' + ('0' + total).slice(-2);
    }
  }
});
var swiper = new Swiper('.swiper-container-menu', {
  // effect: 'coverflow',
  grabCursor: true,
  mousewheel: true,
  centeredSlides: true,
  slidesPerView: 1,
  // speed: 4000,
  // slidesPerView: 'auto',

  initialSlide: 0,
  loop: false,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    // type: "fraction",
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return ('0' + current).slice(-2) + ' / ' + ('0' + total).slice(-2);
    }
  }
});