let tpr=gsap.timeline();
tpr.to('#per',3, { 
    x: '300%',
    y: '-150%', 
    opacity: .5, 
    ease: Power4.easeOut,
    delay:2 }, '=-0.1')
