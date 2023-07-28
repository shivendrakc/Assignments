const btn = document.querySelector(".btn");
const card = document.querySelector(".card");
const close_btn = document.querySelector(".close");

btn.addEventListener("click", ()=>{
    card.classList.add("active");
})
close_btn.addEventListener("click", ()=>{
    card.classList.remove("active");
})