gsap.registerPlugin(ScrollTrigger);

gsap.from('.big-text h1',{duration: 1, y: 100, opacity: 0, delay: 1, stagger: {amount: .5},})
gsap.from('.nav-fixed, .navbar',{duration: 1, y: 100, opacity: 0, delay: .5})


gsap.to('.big-text h1:nth-child(1)',{ scrollTrigger:{
    trigger: '.big-text h1:nth-child(1)', start: 'top center', scrub: true, scroller: '.scrollContainer',}, x: '90%', ease: 'none'});
gsap.to('.big-text h1:nth-child(3)',{ scrollTrigger:{
    trigger: '.big-text h1:nth-child(3)', start: 'top center', scrub: true,
    scroller: '.scrollContainer',}, x: '90%', ease: 'none'});
gsap.to('.big-text h1:nth-child(2)',{ scrollTrigger:{
    trigger: '.big-text h1:nth-child(1)', start: 'top center', scrub: true, scroller: '.scrollContainer'}, x: '-90%', ease: 'none'});
gsap.to('.big-text h1:nth-child(4)',{ scrollTrigger:{
    trigger: '.big-text h1:nth-child(3)', start: 'top center', scrub: true,
    scroller: '.scrollContainer'}, x: '-90%', ease: 'none'});
gsap.to('.big-text h1:nth-child(5)',{ scrollTrigger:{
    trigger: '.big-text h1:nth-child(5)', start: 'top center', scrub: true,
    scroller: '.scrollContainer'}, x: '90%', ease: 'none'});
gsap.to('.big-text h1:nth-child(6)',{ scrollTrigger:{
    trigger: '.big-text h1:nth-child(5)', start: 'top center', scrub: true,
    scroller: '.scrollContainer'}, x: '-90%', ease: 'none'});
    
//media querie for large text 
const mediaQuery = window.matchMedia( "(max-width: 570px)" );

function handleTabletChange(e) {

  if (mediaQuery.matches) {
    console.log('Media Query Matched!')
    gsap.to('.big-text h1:nth-child(1)',{ scrollTrigger:{
      trigger: '.big-text h1:nth-child(1)', start: 'top 80%', scrub: true, scroller: '.scrollContainer',}, x: '90%', ease: 'none'});
    gsap.to('.big-text h1:nth-child(3)',{ scrollTrigger:{
        trigger: '.big-text h1:nth-child(3)', start: 'top 80%', scrub: true,
        scroller: '.scrollContainer',}, x: '90%', ease: 'none'});
    gsap.to('.big-text h1:nth-child(2)',{ scrollTrigger:{
        trigger: '.big-text h1:nth-child(1)', start: 'top 80%', scrub: true, scroller: '.scrollContainer'}, x: '-90%', ease: 'none'});
    gsap.to('.big-text h1:nth-child(4)',{ scrollTrigger:{
        trigger: '.big-text h1:nth-child(3)', start: 'top 80%', scrub: true,
        scroller: '.scrollContainer'}, x: '-90%', ease: 'none'});
    gsap.to('.big-text h1:nth-child(5)',{ scrollTrigger:{
        trigger: '.big-text h1:nth-child(5)', start: 'top 80%', scrub: true,
        scroller: '.scrollContainer'}, x: '90%', ease: 'none'});
    gsap.to('.big-text h1:nth-child(6)',{ scrollTrigger:{
        trigger: '.big-text h1:nth-child(5)', start: 'top 80%', scrub: true,
        scroller: '.scrollContainer'}, x: '-90%', ease: 'none'});
  }
}
    // Register event listener
  mediaQuery.addEventListener('change', handleTabletChange)

  // Initial check
  handleTabletChange(mediaQuery)

  // End Media query


const imgtl = gsap.timeline({ scrollTrigger:{
      trigger: '.img-wrapper, .img-wrapper2', start: 'top 80%', toggleActions: 'play none none reverse', scroller: '.scrollContainer', stagger: { amount: 2}}})
      imgtl.to('.img-wrapper .overlay',{width: '0%', duration: .25, stagger:{amount:.4},})
      imgtl.to('.img-wrapper .img-overlay',{duration: .5, width: '0%',})
      imgtl.to('.img-wrapper2 .overlay',{ width: '0%', duration: .25, stagger:{amount: .4},})
      imgtl.to('.img-wrapper2 .img-overlay',{duration: .5, width: '0%',})

gsap.from('.text-intro, .text-content',{ scrollTrigger:{
    trigger: '.text', start: 'top 80%', scroller: '.scrollContainer', toggleActions: 'play none none reverse',}, stagger:{ amount: .4},duration: .8,y: 200, ease: 'Power0.easeNone', opacity: 0});

    // Player series

gsap.to('.bg-large:nth-child(1)',{scrollTrigger:{
    trigger: '.bg-large:nth-child(1)', scrub: true, scroller: '.scrollContainer',},xPercent: 200,});
gsap.to('.bg-large:nth-child(3)',{scrollTrigger:{
    trigger: '.bg-large:nth-child(3)', scrub: true, scroller: '.scrollContainer',},
    xPercent: 200,});
gsap.to('.bg-large:nth-child(2)',{scrollTrigger:{
    trigger: '.bg-large:nth-child(2)', scrub: true, scroller: '.scrollContainer',},
    x: '-200%',});

gsap.to('.bg-text-appli .bg-large:nth-child(1)',{scrollTrigger:{
    trigger: '.bg-text-appli .bg-large:nth-child(1)', scrub: true, scroller: '.scrollContainer',},xPercent: 200,});
gsap.to('.bg-text-appli .bg-large:nth-child(3)',{scrollTrigger:{
    trigger: '.bg-text-appli .bg-large:nth-child(2)', scrub: true, scroller: '.scrollContainer',},xPercent: 200,});
gsap.to('.bg-text-appli .bg-large:nth-child(2)',{scrollTrigger:{
    trigger: '.bg-text-appli .bg-large:nth-child(2)', scrub: true, scroller: '.scrollContainer',},
    x: '-200%',});

  gsap.utils.toArray(".featured").forEach(element => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        end: 'center 0%',
        scroller: '.scrollContainer',
        toggleActions: 'play none none reverse',
      },
      duration: .8,
      y: '40%',
      ease: 'Power0.easeNone',
      opacity: 0
    });
  });


gsap.to('.big-text-2 h1:nth-child(1)',{
  scrollTrigger:{
    trigger: '.big-text-2 h1:nth-child(1)',
    // start: 'top center',
    // end: 'center 0%',
    // markers: true,
    scrub: true,
    scroller: '.scrollContainer'

  },
  x: '200%',
  ease: 'none'
});
gsap.to('.big-text-2 h1:nth-child(2)',{
  scrollTrigger:{
    trigger: '.big-text-2 h1:nth-child(2)',
    // start: 'top center',
    // end: 'center 0%',
    // markers: true,
    scrub: true,
    scroller: '.scrollContainer'

  },
  x: '-90%',
  ease: 'none'
});


// Oxford Series
gsap.to('.oxford .bg-large:nth-child(1)',{scrollTrigger:{
  trigger: '.oxford .bg-large:nth-child(1)', scrub: true, scroller: '.scrollContainer',},xPercent: 200,});
gsap.to('.oxford .bg-large:nth-child(3)',{scrollTrigger:{
  trigger: '.oxford .bg-large:nth-child(3)', scrub: true, scroller: '.scrollContainer',},
  xPercent: 200,});
gsap.to('.oxford .bg-large:nth-child(2)',{scrollTrigger:{
  trigger: '.oxford .bg-large:nth-child(2)', scrub: true, scroller: '.scrollContainer',},
  x: '-200%',});

gsap.to('.oxford .bg-text-appli .bg-large:nth-child(1)',{scrollTrigger:{
  trigger: '.bg-text-appli .bg-large:nth-child(1)', scrub: true, scroller: '.scrollContainer',},xPercent: 200,});
gsap.to('.oxford .bg-text-appli .bg-large:nth-child(3)',{scrollTrigger:{
  trigger: '.bg-text-appli .bg-large:nth-child(2)', scrub: true, scroller: '.scrollContainer',},xPercent: 200,});
gsap.to('.oxford .bg-text-appli .bg-large:nth-child(2)',{scrollTrigger:{
  trigger: '.oxford .bg-text-appli .bg-large:nth-child(2)', scrub: true, scroller: '.scrollContainer',},
  x: '-200%',});


gsap.utils.toArray(".appli-list-right-stagger").forEach(element3 => {
  gsap.from(element3, {
    scrollTrigger: {
      trigger: element3,
      start: "top 100%",
      scroller: '.scrollContainer',
      toggleActions: 'play none none reverse',
    },
    duration: .8,
    y: 200,
    ease: 'Power0.easeNone',
    opacity: 0,
  });
});
gsap.utils.toArray(".oxford.appli-list-right-stagger").forEach(element2 => {
  gsap.from(element2, {
    scrollTrigger: {
      trigger: ".oxford.appli-list-right",
      start: "top 100%",
      scroller: '.scrollContainer',
      toggleActions: 'play none none reverse',
    },
    duration: .8,
    y: 200,
    ease: 'Power0.easeNone',
    opacity: 0,
  });
});




gsap.to('.oxford .big-text-2 h1:nth-child(1)',{
scrollTrigger:{
  trigger: '.oxford .big-text-2 h1:nth-child(1)',
  // start: 'top center',
  // end: 'center 0%',
  // markers: true,
  scrub: true,
  scroller: '.scrollContainer'

},
x: '200%',
ease: 'none'
});
gsap.to('.oxford .big-text-2 h1:nth-child(2)',{
scrollTrigger:{
  trigger: '.oxford .big-text-2 h1:nth-child(2)',
  // start: 'top center',
  // end: 'center 0%',
  // markers: true,
  scrub: true,
  scroller: '.scrollContainer'

},
x: '-90%',
ease: 'none'
});

// const imgtl2 = gsap.timeline({
//   scrollTrigger:{
//     trigger: '.img-wrapper2',
//     start: 'top center',
//     toggleActions: 'restart none none none',
//     markers: true,
//     scroller: '.scrollContainer',
//     stagger: {
//       amount: 2
//     }
//   }
// })

var tl = gsap.timeline(
  {
    paused: 'true'
  }
);
tl.to('.navbar-menu',{
  duration: .5,
  y: '0%',
  opacity: 1
})
tl.from('.navbar-menu-link',{
  duration: .5,
  // y: '0%',
  // scale: 1,
  // rotation: 360,
  // opacity: 0,
  // height: 0
  // scale: 0.03, 
  height: 0,
  // rotation: 360, 
  // transformOrigin: "center",
  // clearProps:"rotation",
  // ease: 'Power1.easeInOut'
})
tl.from('.bottom-text-right, .bottom-text-left, .swiper-pagination',{
  duration: 1,
  y: 200,
  opacity: 0,
  stagger:{
    amount: 1
  },
})
tl.to('.bg-text-menu h1:nth-child(odd)',{
  duration: 1,
  x: '110%',
  ease: 'Expo.easeOut',
  stagger:{
    amount: 1
  }
});
tl.to('.bg-text-menu h1:nth-child(even)',{
  duration: 1,
  x: '-110%',
  ease: 'Expo.easeOut',
  stagger:{
    amount: 1
  }
},'-=2');
// tl.from('.menu-images',{
//   duration: 1,
//   x: '-8%',
//   opacity: 0,
//   stagger: {
//     amount: .4
//   }
// });
function toggle(){
  tl.play();
}
function togglerev(){
  tl.reverse();
  menu.classList.toggle('active');
}
var toggleBtn = document.querySelector('#menu-toggle');
tl.reverse();
toggleBtn.onclick = function(){
  tl.reversed(!tl.reversed());
}


gsap.to('.bg-number',{
  scrollTrigger:{
    trigger: '.bg-number',
    start: 'top 80%',
    // end: 'bottom 0%',
    // markers: true,
    scrub: true,
    scroller: '.scrollContainer',
  },
  y: -200,
});
gsap.to('.bg-number-oxford',{
  scrollTrigger:{
    trigger: '.bg-number-oxford',
    start: 'top 80%',
    // end: 'bottom 0%',
    // markers: true,
    scrub: true,
    scroller: '.scrollContainer',
  },
  y: -200,
});


gsap.utils.toArray(".textblock").forEach(element => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 100%",
      // end: 'top 80%',
      // scrub: true,
    // end: "bottom top",
      scroller: '.scrollContainer',
      toggleActions: 'play none none reverse',
      // markers: {
      //   startColor: "blue",
      //   endColor: "blue"
      // }
    },
    duration: .8,
    y: 200,
    ease: 'Power0.easeNone',
    // opacity: 0
  });
});

gsap.to('.footer-big-text h1:nth-child(1)',{
  scrollTrigger:{
    trigger: '.footer-big-text h1:nth-child(1)',
    scrub: true,
    scroller: '.scrollContainer'
  },
  x: '212%',
  ease: 'none'
});
gsap.to('.footer-big-text h1:nth-child(2)',{
  scrollTrigger:{
    trigger: '.footer-big-text h1:nth-child(2)',
    scrub: true,
    scroller: '.scrollContainer'
  },
  x: '-272%',
  ease: 'none'
});
gsap.to('.footer-big-text h1:nth-child(3)',{
  scrollTrigger:{
    trigger: '.footer-big-text h1:nth-child(3)',
    scrub: true,
    scroller: '.scrollContainer'
  },
  x: '320%',
  ease: 'none'
});
gsap.to('.footer-big-text h1:nth-child(4)',{
  scrollTrigger:{
    trigger: '.footer-big-text h1:nth-child(4)',
    scrub: true,
    scroller: '.scrollContainer'
  },
  x: '-292%',
  ease: 'none'
});