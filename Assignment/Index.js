const loginButton = document.querySelector(".btn-login");
const card = document.querySelector(".forms-container-inner");
const registerBtn = document.querySelector(".btn-register");

loginButton.addEventListener("click", ()=>{
	card.style.transform = ""; 
})

registerBtn.addEventListener("click", ()=>{
	card.style.transform = "rotateY(180deg)";	
})