let tp=gsap.timeline();
tp.from('#log', { 
    duration: 1, 
    scale:1, 
    y: 300, 
    backgroundColor: 'green', 
    ease: 'elastic.out(1, 0.9)',
    delay: 5})

