function page1(){
    var t1 = gsap.timeline()
t1.from("nav h1",{
y:-30,
opacity:0,
delay:0.8,
duration:0.5,

})
t1.from("nav h4",{
    y:-30,
    opacity:0,
    stagger:0.15,
    duration:0.7,
    
    })
    t1.from("nav button",{
        y:-30,
        opacity:0,
       
        duration:0.7,
         })
        
         var t2 = gsap.timeline()
   t2.from(".center-part1 h2",{
    x:-600,
    duration:0.7,
    delay:0.8,
   })
   t2.from(".center-part1 p",{
    x:-600,
    duration:0.7,
    delay:0.8,
   })            
   t2.from(".center-part1 button",{
    opacity:0,
    duration:0.4,
   })      
   t2.from(".center-part2 img",{
    opacity:0,
    rotate:360,
    duration:0.7,
   },"-=2")      

   gsap.from(".section1bottom img", {
    scrollTrigger: {
        trigger: ".section1bottom",
        start: "top center",
        end: "bottom center",
        scrub: 1,  // Smooth out the scrubbing effect
        
    },
    opacity: 0,  // Start from opacity 0 for fade-in effect
    y: 100,      // Change direction for a subtle upward movement
    ease: "power2.out",  // Use easing for smoother transition
    duration: 1.5 , // Duration of the animation (not strictly needed with scrub)
    stagger:0.
});

}


function page2(){
    var tl2 = gsap.timeline()
tl2.from(".services h3",{
x:-100,
opacity:0,
duration:1,
delay:0.5,
scrollTrigger: {
    trigger: ".services h3",
    scroller:'body',
     start: "top center%",
    
     scrub: 1,  // Smooth out the scrubbing effect
},
});
tl2.from(".elem1",{
    x:-300,
    opacity:0,
    duration:1.5,
    delay:1,
    scrollTrigger: {
        trigger: ".elem1",
        scroller:'body',
         start: "top center%",
        
         scrub: 1,  // Smooth out the scrubbing effect
    }
},"anim")
tl2.from(".elem2",{
    x:300,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: ".elem1",
        scroller:'body',
         start: "top center%",
        
         scrub: 1,  // Smooth out the scrubbing effect
    }
},"anim")
tl2.from(".elem3",{
    x:-300,
    opacity:0,
    duration:1.2,
    delay:1,
    scrollTrigger: {
        trigger: ".elem1",
        scroller:'body',
         start: "top center%",
        
         scrub: 1,  // Smooth out the scrubbing effect
    }
},"code")
tl2.from(".elem4",{
    x:300,
    opacity:0,
    duration:1.2,
    delay:1,
    scrollTrigger: {
        trigger: ".elem1",
        scroller:'body',
         start: "top center%",
        
         scrub: 1,  // Smooth out the scrubbing effect
    }
},"code")

}
page1()
page2()
