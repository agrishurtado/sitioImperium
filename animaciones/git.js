let e=gsap.timeline();
e.to('#git',3, { 
    x: '-100%',
    y: '250%', 
    opacity: .5, 
    ease: Power4.easeOut,
    delay:2 }, '=-0.1')
