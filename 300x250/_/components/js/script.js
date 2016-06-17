function startAd(){  
    var ttl = new TimelineLite();
    ttl.from("#t1", .8, { opacity:0, ease: Power3.easeOut})
        .to("#t1", .8, {opacity:0}, 1)
        .from("#t2", .8, {opacity:0 }, .4)
        .to("#t2", .8, {opacity:0, ease: Power3.easeOut}, 2.2)
        .from("#t3", .8, {opacity:0}, 1)
        .to("#t3", .8, { opacity:0 }, 2.2)
    
        .to("#t1", .8, {opacity:1, ease: Power3.easeOut}, 2.2)
        .to("#t1", .8, { opacity:0}, 3.4)
    
        .from("#t1a", .8, {opacity:0}, 3.4)
        .from("#t1b", .8, {opacity:0}, 3.4)
        .from("#t1c", .8, {opacity:0}, 3.4)
        .to("#t1a", 1, {scale:2, y:-100, opacity:0, ease: Power3.easeOut}, 6.2)
        .to("#t1b", 1, {scale:4, y:-60, opacity:0, ease: Power3.easeOut }, 6.2)
        .to("#t1c", 1, {css:{z:430, x:7, y:-5},  ease: Power3.easeOut}, 6.2)
        .to("#t1c", 1, {opacity:0, ease: Power3.easeOut}, 6.7);
    
    var bgtl = new TimelineLite();
    bgtl.from("#grnBackground", .6, {opacity:0});
    
    var dtl = new TimelineLite();
    dtl.from("#d1", 1, {scale:.5, opacity:0, ease: Back.easeOut.config(1)})
    .to("#d1", 1.4, {opacity:0, ease: Power3.easeOut}, 2.4)
    .from("#d2", 1.4, {scale:.5, opacity:0, ease: Back.easeOut.config(1)}, 2.6)
    .from("#dna3", .8, {opacity:0, ease: Power3.easeOut}, 3.4);
    
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
    tl.add(bgtl, 11);
    tl.add(dtl, 7.4);
    tl.add(ettl, 11);
    tl.add(ftl, 12.6);
    tl.add(ctl, 12.6);
    
    tl.totalDuration(13);
           
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

var tl = new TimelineLite();
tl.eventCallback("onComplete", animationComplete);
	