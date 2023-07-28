const btn = document.querySelector(".btn");
const card = document.querySelector(".card");
const close_btn = document.querySelector(".close");

btn.addEventListener("click", ()=>{
    card.classList.add("active");
    btn.style.zIndex = "0";
    btn.style.opacity = "0";
})
close_btn.addEventListener("click", ()=>{
    card.classList.remove("active");
    btn.style.zIndex = "1";
    btn.style.opacity = "1";
})