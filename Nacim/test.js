let slider = tns({
    container : ".my-slider",
    "slideBy" : "1",
    "speed" : 3000,
    "nav" : false,
    autoplay : true,
    controls : true,
    autoplayButtonOutput : false,
    responsive : {
        300:{
            items : 5,
            gutter : 20
        },
        250:{
            items : 4,
            gutter : 20
        },
        200 : {
            items : 3,
            gutter : 20
        },
        100 : {
            items : 2,
            gutter : 20
        },
        50 : {
            items : 1,
        }
    }
})

let slider2 = tns({
    container : ".my-slider2",
    "slideBy" : "1",
    "speed" : 3000,
    "nav" : false,
    autoplay : true,
    controls : true,
    // controlsContainer : true,
    // prevButton : true,
    // nextButton: true,
    autoplayButtonOutput : false,
    responsive : {
        300:{
            items : 5,
            gutter : 20
        },
        250:{
            items : 4,
            gutter : 20
        },
        200 : {
            items : 3,
            gutter : 20
        },
        100 : {
            items : 2,
            gutter : 20
        },
        50 : {
            items : 1,
        }
    }
})
const prevNextBtns = document.querySelectorAll("#slider .tns-controls button");
const prevNextBtns2 = document.querySelectorAll("#slider2 .tns-controls button");
const btnPrev1 = prevNextBtns[0];
const btnNext1 = prevNextBtns[1];
const btnPrev2 = prevNextBtns2[0];
const btnNext2 = prevNextBtns2[1];
btnPrev1.innerHTML = ("<");
btnNext1.innerHTML = (">");
btnPrev2.innerHTML = ("<");
btnNext2.innerHTML = (">");


