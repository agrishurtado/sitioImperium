let tl = gsap.timeline();
tl.from('#logo', {
    duration: 1});
                
tl.addLabel('label1', "-=1");
    tl.from('.circle', {
    duration: .8, 
    scale: 0, 
    stagger: .1, 
    scaleX: 1.5, 
    scaleY: 1.5, 
    ease: Back.easeOut.config(1.7)
    }, '+=1')
    
    // .to('#logjs',3, { 
    // startAt:{opacity:0},
    // stagger:5,
    // x: '400%', 
    // opacity: 0.7, 
    // ease: Power4.easeOut }, '=-0.3')

    // .to('#logjs2',3, { 
    // startAt:{opacity:0},
    // stagger:5,
    // x: '-400%', 
    // opacity: 0.7, 
    // ease: Power4.easeOut }, '=-0.3')


