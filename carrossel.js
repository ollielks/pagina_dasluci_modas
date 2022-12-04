const imgs = document.getElementById('img');
const imgs_02 = document.getElementById('imgCamisas')
const imgs_03 = document.getElementById('imgShorts')
const img = document.querySelectorAll('#img img')
const img02 = document.querySelectorAll('#imgCamisas img')
const img03 = document.querySelectorAll("#imgShorts img")

let idx = 0;
let idx02 = 0;
let idx03 = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1) {
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`;

    
}
function carrosselCamisas(){
    idx02++;

    if(idx02 > img02.length - 1) {
        idx02 = 0;
    }
    imgs_02.style.transform = `translateX(${-idx02 * 500}px)`;

    
}
function carrosselShorts(){
    idx03++;

    if(idx03 > img03.length - 1) {
        idx03 = 0;
    }
    imgs_03.style.transform = `translateX(${-idx03 * 500}px)`;

    
}
setInterval(carrossel, 1800)
setInterval(carrosselCamisas,1800)
setInterval(carrosselShorts,3600)