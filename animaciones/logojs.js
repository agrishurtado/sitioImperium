let tr=gsap.timeline({ delay: 5 });
// tr = new TimelineMax({ });
tr.to('#logjs',5, { 
    x: '400%', 
    opacity: 0.5, 
    ease: Power4.easeIn }, '=-0.3')
// tr.to('#logjs',9, { 
//     x: '400%', 
//     opacity: 0.5, 
//     scale:0 ,
//     ease: Power4.easeOut }, '=-0.3')
    