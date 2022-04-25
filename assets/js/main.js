let img = document.querySelector('#Slider img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let dots = document.querySelectorAll('.dots')
let imggg;

let myslider = [
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
    // for (let j = 0; j < myslider.length; j++) {

//     var i = document.createElement('i');
//     i.classList.add("fa-solid")
//     i.classList.add("fa-circle-dot")
//     i.classList.add("icons")

//     i.setAttribute("data-id", myslider[j])
//     i.setAttribute("id", j)

//     document.querySelector(".dots ").append(i)


//     for (let dot of dots) {
//         dot.addEventListener('click', function(e) {
//             let imagee = img.src
//             for (let img of imagee) {
//                 img = i.getAttribute('data-id')
//             }


//         })
//     }
// }

// for (let i = 0; i < myslider.length; i++) {
//     var spans = document.createElement('span')

//     document.querySelector(".dots").append(spans);
//     spans.setAttribute('data-id', myslider[i]);
//     let value = spans.getAttribute('img-src')
//     for (let dot of dots) {
//         dot.addEventListener('click', function() {
//             let value = spans.getAttribute('data-id')
//             for (let j = 0; j < spans.length; j++) {


//             }
//         })
//     }

// }

for (let i = 0; i < myslider.length; i++) {
    var spans = document.createElement('span');
    document.querySelector(".dots").append(spans);
    spans.setAttribute('data-id', myslider[i]);
    spans.setAttribute('id', [i]);

}

for (let index = 0; index < spans.length; index++) {
    img.setAttribute = ('src', myslider.length[spans.length[index]]);
    console.log(index);

}


for (let dot of dots) {
    dot.addEventListener('click', function() {
        let count = 0;
        count = spans.getAttribute('id');
        console.log(count);


    })
}