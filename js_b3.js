const btn1 = document.querySelector("#color1");
const btn2 = document.querySelector("#color2");
const btn3 = document.querySelector("#color3");
const bg = document.querySelector('#bg');
btn1.addEventListener("click", function () {
    bg.style.background = 'greenyellow';
});
btn2.addEventListener("click", function () {
    bg.style.background = 'red';
});
btn3.addEventListener("click", function () {
    bg.style.background = 'pink';
});
 
