// const timeline = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.big-text h1',{
      duration: 1,
      y: 100,
      opacity: 0,
      delay: .5,
      stagger: {
        amount: 2
      },
    })
    gsap.to('.big-text h1:nth-child(1)',{
      scrollTrigger:{
        trigger: '.big-text h1:nth-child(1)',
        start: 'top center',
        end: 'center 0%',
        markers: true,
        scrub: true,
      },
      x: '110%',
      ease: 'none'
    });
    gsap.to('.big-text h1:nth-child(3)',{
      scrollTrigger:{
        trigger: '.big-text h1:nth-child(3)',
        start: 'top center',
        end: 'center 0%',
        markers: true,
        scrub: true,
      },
      x: '110%',
      ease: 'none'
    });
    gsap.to('.big-text h1:nth-child(2)',{
      scrollTrigger:{
        trigger: '.big-text h1:nth-child(2)',
        start: 'top center',
        end: 'center 0%',
        markers: true,
        scrub: true,
      },
      x: '-110%',
      ease: 'none'
    });
    gsap.to('.big-text h1:nth-child(4)',{
      scrollTrigger:{
        trigger: '.big-text h1:nth-child(4)',
        start: 'top center',
        end: 'center 0%',
        markers: true,
        scrub: true,
      },
      x: '-110%',
      ease: 'none'
    });
    gsap.to('.big-text h1:nth-child(5)',{
      scrollTrigger:{
        trigger: '.big-text h1:nth-child(5)',
        start: 'top center',
        end: 'center 0%',
        markers: true,
        scrub: true,
      },
      x: '110%',
      ease: 'none'
    });
    gsap.to('.big-text h1:nth-child(6)',{
      scrollTrigger:{
        trigger: '.big-text h1:nth-child(6)',
        start: 'top center',
        end: 'center 0%',
        markers: true,
        scrub: true,
      },
      x: '-110%',
      ease: 'none'
    });

    // gsap.to('.img-wrapper',{
    //   scrollTrigger: {
    //     scrub: 1
    //   },
    //   skewX: 10
    // })

    // gsap.from('.img-wrapper',1,{
    //   scrollTrigger:{
    //     trigger: '.img-wrapper',
    //     start: 'top center',
    //     toggleActions: 'restart none none none',
    //     markers: true,
    //     // scrub: true
    //   },
    //   width: '0',
    //   ease: Expo.easeInOut
    // })

    const imgtl = gsap.timeline({
      scrollTrigger:{
        trigger: '.img-wrapper',
        start: 'top center',
        toggleActions: 'restart none none none',
        markers: true,
      }
    })

    imgtl.to('.overlay',{
      width: '0%',
      duration: .25,
      stagger:{
        amount: .4
      },
    })
    .to('.img-overlay',{
      duration: .5,
      width: '0%',
    })

    gsap.to('.what',{
      scrollTrigger:{
        // trigger: '.what', (can be an other element than .what)
        // start: 'top center',
        // top of the triggered element, center of the viewport, standard is bottom
        // options or top center and bottom, or set percentage or pixelvalues 
        // string "top 60%" means animation starts when top of the triggered element scrolls 60% in viewport

        // toggleClass: 'red',
        // end: 'center 0%',
        // markers: true,
        // toggleActions: 'play reverse none none',
        // on enter onleave onenterback onleaveback
        // play pause resume reverse restart reset complete none
        // toggleClass: 'red',
        // scrub: true,
        // scrub: 4,
        // pin: true,
        // pinspacing: false,
        // pin: '.div',

        // markers: {
        //   startColor: 'purple',
        //   endColor: 'yellow',
        //   fontSize: '2rem'
        // },
      },
      // x: '110%',
      // xPercent: 110,
      // duration: 4,
      // ease: 'none',
      // scale: 1,
      // duration: 1.5,
      // delay: .5,
      // skewX: -10,
      // skewY: 10,
      // rotation: 360, 
      // transformOrigin: "center",
      // clearProps:"rotation",
      // stagger: {
      //   amount: .4
      // },

      // y: 50,
      // x: -20,
      // opacity: 0,
      // zIndex: -1,
      // height: 0,
    }, '-=.3');


    // Use same animation over and over:
    
    // gsap.utils.toArray(".scrub").forEach(element => {
    //   gsap.to(element, {
    //     x: 200,
    //     scrollTrigger: {
    //       trigger: element,
    //       start: "top 100%",
    //       end: "bottom top",
    //       scrub: true,
    //       markers: {
    //         startColor: "blue",
    //         endColor: "blue"
    //       }
    //     }
    //   });
    // });


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
    tl.from('.menu-links li',{
      duration: .5,
      y: '-40%',
      opacity: 0,
      stagger:{
        amount: .4
      }
    });
    tl.from('.menu-images',{
      duration: 1,
      x: '-8%',
      opacity: 0,
      stagger: {
        amount: .4
      }
    });
    // function toggle(){
    //   tl.play();
    // }
    // function togglerev(){
    //   tl.reverse();
    // }
    var toggleBtn = document.querySelector('#menu-toggle');
    tl.reverse();
    toggleBtn.onclick = function(){
      tl.reversed(!tl.reversed());
    }

