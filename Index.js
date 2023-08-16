const loginButton = document.querySelector(".btn-login");
const card = document.querySelector(".forms-container-inner");
const backBtn = document.querySelector(".btn-back");

loginButton.addEventListener("click", ()=>{
	card.style.transform = "rotateY(180deg)";
})

backBtn.addEventListener("click", ()=>{
	card.style.transform = ""; 
})