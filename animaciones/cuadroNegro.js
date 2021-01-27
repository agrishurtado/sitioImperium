let tl = gsap.timeline();
tl.from('#logo', {
    duration: 1, 
    rotate: 360});
                
tl.addLabel('label1', "+=1");
    tl.from('.circle', {
    duration: .8, 
    scale: 0, 
    stagger: .1, 
    scaleX: 1.5, 
    scaleY: 1.5, 
    ease: Back.easeOut.config(1.7)
    }, '+=1');


