const images = document.querySelectorAll('.img-12-min');
const big = document.querySelector('.div-12-max img')
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;


function nextFunction() {
    if (count + 1 < images.length) {
        count++

    } else {
        count = 0;
    }
    for (i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img');
    }
    images[count].classList.add('active-img');
    big.src = images[count].src;
}

function prevFunction() {
    if (count - 1 >= 0) {
        count--
    } else {
        count = images.length - 1;
    }
    for (i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img');
    }
    images[count].classList.add('active-img');
    big.src = images[count].src;
}

function ressetFunction() {
    count = 0;
    for (i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img');
    }
    images[count].classList.add('active-img');
    big.src = images[count].src;
}

const reset = document.querySelector('.reset');
reset.onclick = ressetFunction;
