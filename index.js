let p1Name = document.getElementById('p1-name-input');
let p2Name = document.getElementById('p2-name-input');
const playerName = document.getElementById('name-input');
const btn = document.getElementById('vs-human-button');
//const easy = document.getElementById("easy-txt");
const hard = document.getElementById("hard-txt");
const vsAIBtn = document.getElementById('vsAi-btn');
const updateTxt = document.getElementById('update-txt');
const cancelTxt = document.getElementById('cancel-txt');
const sideBar = document.querySelector('.side-bar');

//designs function
updateTxt.addEventListener('click' , function(){
	sideBar.style.visibility = "visible";
	updateTxt.style.visibility = "hidden";
} , false)

cancelTxt.addEventListener('click' , function(){
	sideBar.style.visibility = "hidden";
	updateTxt.style.visibility = "visible";
} , false)


/**********vs AI functions*********/
/*easy.addEventListener('click' , function(){
	easy.style.backgroundColor = "#a30f17";
	hard.style.pointerEvents = "none";
})*/

hard.addEventListener('click' , function(){
	hard.style.backgroundColor = "#a30f17";
	//easy.style.pointerEvents = "none";
})

function getNameVsAI(){
	if(playerName.value == null || playerName.value == " "){
		playerName.style.border = "2px solid red";
		playerName.placeholder = "Enter your name";
		console.log("hre");
	}else{
		localStorage.setItem("player" , playerName.value);
		playerName.textContent = "";
		vsAIBtn.href = "vsAI.html";
	}
}

/*********1v1 human functions***************/
function getName(){
	

	if((p1Name.value == null || p1Name.value == "") && (p2Name.value == null || p2Name.value == "")){
		p1Name.style.border = "2px solid red";
		p2Name.style.border = "2px solid red";
	}else{
		localStorage.setItem("p1-name" , p1Name.value);
		localStorage.setItem("p2-name" , p2Name.value);
		p1Name.textContent = "";
		p2Name.textContent = "";
		btn.href = "play.html";
	}

	if(p1Name.value == null || p1Name.value == ""){
		p1Name.style.border = "2px solid red";
		p1Name.placeholder = "Enter your name";
	}else{
		p1Name.style.border = "0";
	}

	if(p2Name.value == null || p2Name.value == ""){
		p2Name.style.border = "2px solid red";
		p2Name.placeholder = "Enter your name";
	}else{
		p2Name.style.border = "0";
	}
}
