const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

let timeout;

function firstPageAnim(){
    let tl = gsap.timeline();

    tl.from(".nav",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease:Expo.easeInOut
    })

    .to(".boundingelem",{
        y:  0 ,
        duration: 2,
        delay: -1,
        stagger: .2,
        ease:Expo.easeInOut
    })

    .from(".hero-footer",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease:Expo.easeInOut
    })

}
// circle chpta function
function cricleSkew(){
    let xScale = 1;
    let yScale = 1;
    let xPrev = 0;
    let yPrev = 0;

    window.addEventListener("mousemove", function(e) {
        clearTimeout(timeout);
        xScale = gsap.utils.clamp(.8,1.2,e.clientX - xPrev);
        yScale = gsap.utils.clamp(.8,1.2, e.clientY - yPrev);

         xPrev = e.clientX;
         yPrev = e.clientY;
         CricleMouseFollow(xScale,yScale);
         timeout = setTimeout(function() {
        document.querySelector(".mini-cricle").style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1,1)`;

         },100)
    })
}

function CricleMouseFollow( xScale, yScale){
    window.addEventListener("mousemove" , function (e) {
        document.querySelector(".mini-cricle").style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xScale} , ${yScale})`;
    
    });
};

cricleSkew();
CricleMouseFollow();
firstPageAnim();



const elem = document.querySelectorAll(".elem").forEach(function (element) {
        let rotate = 0;
        let diffrot = 0;

        element.addEventListener("mouseleave", function (dets) {
            gsap.to(element.querySelector("img"), {
              opacity: 0,
              ease: Power3,
              duration: 0.5,
            });
          });


    element.addEventListener("mousemove", function (dets){
        var diff = dets.clientY - element.getBoundingClientRect().top;
            diffrot = dets.clientX - rotate;
            rotate = dets.clientX;
            

        gsap.to(element.querySelector("img"), {
            opacity:1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot * .5),
        });
    });
});