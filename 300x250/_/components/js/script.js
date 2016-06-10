function startAd(){  
    var ttl = new TimelineLite();
    ttl.from("#t1", 1.4, { opacity:0, ease: Power3.easeOut})
        .to("#t1", 1, {opacity:0}, 2.4)
        .from("#t2", 1, {opacity:0 }, 1)
        .to("#t2", 1.6, {opacity:0, ease: Power3.easeOut}, 3.6)
        .from("#t3", 1, {opacity:0}, 2.4)
        .to("#t3", 1, { opacity:0 }, 3.6)
    
        .to("#t1", 1, {opacity:1, ease: Power3.easeOut}, 3.6)
        .to("#t1", 1, { opacity:0}, 5.2)
    
        .from("#t1a", 1, {opacity:0}, 5)
        .from("#t1b", 1, {opacity:0}, 5)
        .from("#t1c", 1, {opacity:0}, 5)
        .to("#t1a", 1, {scale:2, y:-100, opacity:0, ease: Power3.easeOut}, 8)
        .to("#t1b", 1, {scale:4, y:-60, opacity:0, ease: Power3.easeOut }, 8)
        .to("#t1c", 1, {css:{z:430, x:7, y:-5},  ease: Power3.easeOut}, 8)
        .to("#t1c", 1, {opacity:0, ease: Power3.easeOut}, 8.5);
    
    var bgtl = new TimelineLite();
    bgtl.from("#grnBackground", .6, {opacity:0});
    
    var dtl = new TimelineLite();
    dtl.from("#d1", 1, {scale:0, opacity:0, ease: Back.easeOut.config(1)})
    .to("#d1", 1.4, {x:-240, ease: Power3.easeOut}, 2.4)
    .from("#d2", 1.4, {opacity:0, x: 350, ease: Power3.easeOut}, 2.4)
    .from("#dna3", .6, {opacity:0, ease: Power3.easeOut}, 3.8);
    
    var ettl = new TimelineLite();
    ettl.from("#t4", .8, {y:-20, opacity:0, ease: Power3.easeOut})
        .from("#t5", .8, {y:-20, opacity:0, ease: Power3.easeOut})
        .from("#t6", .8, {y:-20, opacity:0, ease: Power3.easeOut});
    
    var ctl = new TimelineLite();
    ctl.from("#bradFooter", .6, {opacity:0,ease: Power3.easeOut})
        .from("#bradCtaButton", .8, {opacity:0,ease: Power3.easeOut}, 0)
        .from("#bradLogo", .8, { opacity:0,ease: Power3.easeOut}, 0);
    
    var ftl = new TimelineLite();
    ftl.from("#bradFlare", .8, {x:-100, opacity:0,ease: Power3.easeOut})
        .from("#bradFlare1", .8, {x:-100, opacity:0,ease: Power3.easeOut}, 0);
    
    tl.add(ttl, 0);
    tl.add(bgtl, 13);
    tl.add(dtl, 9.2);
    tl.add(ettl, 13);
    tl.add(ftl, 14.8);
    tl.add(ctl, 14.8);
    
    tl.totalDuration(15);
           
};

function addListeners(){
    document.getElementById("bradContent").addEventListener("click", clickthrough);
};

function clickthrough() {
    EB.clickthrough();
}


function animationComplete(evt){
};

function checkInit() {
              if (!EB.isInitialized()) {
                 EB.addEventListener(EBG.EventName.EB_INITIALIZED, onInit); 
                 // This code checks whether the EB object is initialized, if the object is initialized, it
                     //launches the function "onInit", otherwise "EB_INITIALIZED" event. 
              }
              else {
                      onInit();
               }         
               function onInit() {
    
    TweenLite.set("#bradContainer", {opacity:1});
                   CSSPlugin.defaultTransformPerspective = 500;
    addListeners();
    startAd();
              } 
     }

window.addEventListener('load', checkInit);

var tl = new TimelineLite({onUpdate:updateSlider});
tl.eventCallback("onComplete", animationComplete);


$("#play").click(function() {
  //play() only plays forward from current position. If timeline has finished, play() has nowhere to go.
  //if the timeline is not done then play() or else restart() (restart always restarts from the beginning).

  if(tl.progress() != 1){
    //carl just changed this again
		tl.play();
  } else {
    tl.restart();
  }
});
		
$("#pause").click(function() {
		tl.pause();
});
		
$("#restart").click(function() {
		tl.restart();
});		
	
$("#slider").slider({
  range: false,
  min: 0,
  max: 100,
  step:.1,
  slide: function ( event, ui ) {
    tl.pause();
    //adjust the timeline's progress() based on slider value
    tl.progress( ui.value/100 );
    }
});	
		
function updateSlider() {
  $("#slider").slider("value", tl.progress() *100);
} 	