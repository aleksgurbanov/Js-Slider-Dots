var img = document.querySelector('#Slider img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
// let dots = document.querySelectorAll('.dots')
let imggg;

var myslider = [
    './assets/images/image1.jpeg',
    './assets/images/image2.jpeg',
    './assets/images/image3.jpeg',
    './assets/images/image4.jpeg'
]



let slidercounter = 0;
img.src = myslider[slidercounter];

next.onclick = function() {
    slidercounter++;
    if (myslider.length - 1 < slidercounter) {

        slidercounter = 0;

    }
    img.src = myslider[slidercounter];

}
prev.onclick = function() {
    slidercounter--;
    if (slidercounter == -1) {
        slidercounter = myslider.length - 1;
    }

    img.src = myslider[slidercounter];


}


for (let i = 0; i < myslider.length; i++) {
    var spans = document.createElement('span');
    document.querySelector(".dots").append(spans);
    spans.setAttribute('data-id', myslider[i]);
    spans.setAttribute('id', 'span');

}





const dots = Array.from(document.querySelectorAll(".dots #span"));

dots.forEach(dot => {
    dot.onclick = function() {
        var btnId = dot.getAttribute("data-id");
        img.src = btnId;

    }
})