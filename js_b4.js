const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const window2 = document.querySelector("#window");
btn2.addEventListener("click", function(){
    window2.style.display = "block"
    document.body.style.background = "rgba(0,0,0,0.5)";
    window2.style.background = "white";
    btn2.style.background = "rgba(0,0,0,0.5)";
})
btn.addEventListener("click", function(){
    window2.style.display = "none"
    document.body.style.background = "white";
    btn2.style.background = "white";
})