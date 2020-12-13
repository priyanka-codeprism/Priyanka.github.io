
$(function () {
TweenLite.defaultEase = Linear.easeNone;
const content = document.querySelectorAll(".content");
const controller = new ScrollMagic.Controller();

const t1 = new TimelineMax();

t1.to("#js-slideContainer", 1, { xPercent: -30 });
//t1.from(content[1], 0.5, { opacity: 0, scale: 2.5 });
t1.to("#js-slideContainer",1, { xPercent: -67 });
//t1.from(content[2], 0.5, { opacity: 0, scale: 2.5, left: 400, top: 400 });
//t1.to("#js-slideContainer", 1, { xPercent: -60 });
//t1.from(content[3], 0.5, { opacity: 0, scale: 2.5, right: 400, bottom: 400 });
//t1.to("#js-slideContainer", 1, { xPercent: -80 });
//t1.from(content[4], 0.5, { opacity: 0, scale: 2.5, rotation: 27 });

new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: "400%",
})
  .setPin("#js-wrapper")
  .setTween(t1)
  // .addIndicators({
  //   colorTrigger: "White",
  //   colorStart: "black",
  //   colorEnd: "red",
  // })
  .addTo(controller);

  //////for section 2
  //const content = document.querySelectorAll(".content");
const controller1 = new ScrollMagic.Controller();

const t2 = new TimelineMax();

t2.to("#js-slideContainer1", 1, { xPercent: -30 });
//t1.from(content[1], 0.5, { opacity: 0, scale: 2.5 });
t2.to("#js-slideContainer1",1, { xPercent: -67 });
//t1.from(content[2], 0.5, { opacity: 0, scale: 2.5, left: 400, top: 400 });
//t1.to("#js-slideContainer", 1, { xPercent: -60 });
//t1.from(content[3], 0.5, { opacity: 0, scale: 2.5, right: 400, bottom: 400 });
//t1.to("#js-slideContainer", 1, { xPercent: -80 });
//t1.from(content[4], 0.5, { opacity: 0, scale: 2.5, rotation: 27 });

new ScrollMagic.Scene({
  triggerElement: "#js-wrapper1",
  triggerHook: "onLeave",
  duration: "400%",
})
  .setPin("#js-wrapper1")
  .setTween(t2)
  // .addIndicators({
  //   colorTrigger: "White",
  //   colorStart: "black",
  //   colorEnd: "red",
  // })
  .addTo(controller1);

  /*---------------------section 3---------------------->*/
  const controller2 = new ScrollMagic.Controller();

const t3 = new TimelineMax();

t3.to("#js-slideContainer2", 1, { xPercent: -25 });
//t1.from(content[1], 0.5, { opacity: 0, scale: 2.5 });
t3.to("#js-slideContainer2",1, { xPercent: -50 });
//t1.from(content[2], 0.5, { opacity: 0, scale: 2.5, left: 400, top: 400 });
t3.to("#js-slideContainer2", 1, { xPercent: -75 });
//t1.from(content[3], 0.5, { opacity: 0, scale: 2.5, right: 400, bottom: 400 });
//t1.to("#js-slideContainer", 1, { xPercent: -80 });
//t1.from(content[4], 0.5, { opacity: 0, scale: 2.5, rotation: 27 });

new ScrollMagic.Scene({
  triggerElement: "#js-wrapper2",
  triggerHook: "onLeave",
  duration: "400%",
})
  .setPin("#js-wrapper2")
  .setTween(t3)
  // .addIndicators({
  //   colorTrigger: "White",
  //   colorStart: "black",
  //   colorEnd: "red",
  // })
  .addTo(controller2);
});

            

 