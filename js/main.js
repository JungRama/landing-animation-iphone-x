var tlFirstScroll = new TimelineMax();
var tlSecondScroll = new TimelineMax();

// FIRST ANIMATION
tlFirstScroll
.set('.iphone-image-wrapper', {
    scale: 4,
    transformOrigin: 'center top', // Make the wrapper position center top
}).to('.iphone-image-wrapper', 3, // 3 Seconds animation
    {
        // Make the wrapper position go top, and scale down
        scale: 2,
        y: "-45%" 
    }
).to('.iphone-image-wrapper', 3, // 3 Seconds animation
    {
        // Make the wrapper position to default, and scale down
        scale: 1,
         y: "0%"
    }
);


// SECOND ANIMATION
tlSecondScroll
.to('.iphone1', 3, 
    {
        x: '-50%'
    }
)
.to('.iphone2', 3, 
    {
        x: '50%'   
    },
    '-=3' // ANIMATION DELAY -3
)
.from('.iphone1-text', 2, {autoAlpha: 0}, '-=3') // from opcaity 0 to opacity 1, opcaity  1 set on css
.from('.iphone2-text', 2, {autoAlpha: 0}, '-=3') // from opcaity 0 to opacity 1, opcaity  1 set on css
.to('.iphone1-text', 2, {x: "-30%"}, '-=3')
.to('.iphone2-text', 2, {x: "30%"}, '-=3');


// SCROLLMAGIC
var controller = new ScrollMagic.Controller();

// SCENE 1
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.trigger1',
    triggerHook: 0,
    duration: "100%" 
})
.setTween(tlFirstScroll)
.addIndicators()
.addTo(controller);


// SCENE 2
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.trigger2',
    triggerHook: 0,
    duration: "100%" 
})
.setTween(tlSecondScroll)
.setPin('.trigger2') // 
.addIndicators()
.addTo(controller);