const loginButton = document.querySelector(".btn-login");
const card = document.querySelector(".forms-container-inner");
const registerBtn = document.querySelector(".btn-register");

loginButton.addEventListener("click", ()=>{
	card.style.transform = ""; 
})

registerBtn.addEventListener("click", ()=>{
	card.style.transform = "rotateY(180deg)";	
})

// Applying the focus and hover design to meet the rubric although this ca be easily achieved by css in 2 lines of code.

const inputs = document.querySelectorAll("input");


inputs.forEach((input)=>{
	if(input.type !== "submit"){
		input.addEventListener("focus", ()=>{
			input.style.backgroundColor = "yellow";
		})
		input.addEventListener("blur", ()=>{
			input.style.backgroundColor = "white";
		})
	}
	if(input.type === "submit"){
		input.addEventListener('mouseover', ()=>{
			input.style.backgroundColor = 'lightblue';
		})
		input.addEventListener('mouseout', ()=>{
			input.style.backgroundColor = 'white';
			input.style.color = 'black';
		})
	}
})

