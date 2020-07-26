const cells = document.querySelectorAll('.cell');
const humanPlayer = "X";
const aiPlayer = "O";
let origBoardT0 = [] , origBoardT1 = [] , origBoardT2 = [] ,
	origBoardT3 = [] , origBoardT4 = [] , origBoardT5 = [] ,
	origBoardT6 = [] , origBoardT7 = [] , origBoardT8 = []
;
let aiInt = 2;
let aiVar;

const p1TurnDiv = document.getElementById('p1-turn-div');
const aiTurnDiv = document.getElementById('ai-turn-div');
const p1PointsText = document.getElementById('p1-points');
const aiPointsText = document.getElementById('ai-points');
let p1Points = 0 , aiPoints = 0;
const aiThinking = document.querySelector('.ai-think-div');
let p1Name = document.getElementById('p1-name');
let aiName = document.getElementById('ai-name');
let timerTurn = document.querySelector('.timer-turn');
let p1TimerTxt = document.getElementById('p1-timer-turn');
let timerTurnInt = 2;
let timerTurnVar;
let btnPlay = document.getElementById('btn-play');
let breakInt = 5;
let breakVar;
const breakTxt = document.getElementById('break-txt');
const breakDiv = document.getElementById('break-div-id');
var unclickTable = 0;
const bigTable = document.querySelector('.big-table');
const bigTableTxt = document.querySelector('.text-animation');
const table = document.getElementsByTagName('table');
var hadWon = false;
var hadWonTable;
var freeTable = [ 0 , 1 , 2 , 3 , 4,  5 , 6 , 7 , 8];
let bigTableInt = 3;
let bigTableVar;
let bigTableBoard = Array.from(Array(9).keys());
var hadBigTableWon = false;

const tutorialDiv = document.querySelector('.tutorial');

//slide 2
//A
const cellsTutor = document.querySelectorAll('.cell-tutor-1');
const playTutor1 = document.getElementById('play-img-1');
let tutorialOneInt = 20;
let tutorialOneVar;
//B
const cellsTutor2 = document.querySelectorAll('.cell-tutor-2');
const playTutor2 = document.getElementById('play-img-2');
let tutorialTwoInt = 20;
let tutorialTwoVar;
const bigTableTutorial = document.querySelectorAll('.big-table-tutor-2');

//slide 3
//A
const timerTutor3 = document.querySelector('.timer-tutor-3');
let tutorialThreeInt = 2;
let tutorialThreeVar;
const playTutor3 = document.getElementById('play-img-3');
const aiTurnTutor = document.querySelector('.ai-tutor-turn');

//slide 1
const xo = document.getElementById('xo');
const xo1 = document.getElementById('xo1');
let xoVar;

const gotItBtn = document.getElementById('got-it-btn');
const circles = document.querySelectorAll('.circles');
let circleInt = 0;

const slides = document.querySelectorAll('.slides');
let slidesInt = 0;

const cards = [];
for(var i = 0; i < 3; ++i){
	cards[i] = document.getElementById("face-" + (i + 1));
}

const playBtn = document.querySelector('.play-btn');
const winDiv = document.querySelector('.win-div');
const playAgainBtn = document.getElementById('play-again-btn');
const exitBtn = document.getElementById('exit-btn');

let p1NameArr;
let aiNameArr;
let p1NameInput;
let p1NameChild = [];
let p2NameChild = [];
let aniDelay = ["0.25s" , "0.5s" , "0.75s" , "1s" , "1.25s" , "1.5s" , "1.75s" , "2s" , "2.5s" , "2.7s"];

var stop = false;

const t0WinCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

const bigTableWinCombos = t0WinCombos;

const t1WinCombos = [
	[9, 10, 11],
	[12, 13, 14],
	[15, 16, 17],
	[9, 12, 15],
	[10, 13, 16],
	[11, 14, 17],
	[9, 13, 17],
	[11, 13, 15]
]

const t2WinCombos = [
	[18, 19, 20],
	[21, 22, 23],
	[24, 25, 26],
	[18, 21, 24],
	[19, 22, 25],
	[20, 23, 26],
	[18, 22, 26],
	[20, 22, 24]
]

const t3WinCombos = [
	[27, 28, 29],
	[30, 31, 32],
	[33, 34, 35],
	[27, 30, 33],
	[28, 31, 34],
	[29, 32, 35],
	[27, 31, 35],
	[29, 31, 33]
]

const t4WinCombos = [
	[36, 37, 38],
	[39, 40, 41],
	[42, 43, 44],
	[36, 39, 42],
	[37, 40, 43],
	[38, 41, 44],
	[36, 40, 44],
	[38, 40, 42]
]

const t5WinCombos = [
	[45, 46, 47],
	[48, 49, 50],
	[51, 52, 53],
	[45, 48, 51],
	[46, 49, 52],
	[47, 50, 53],
	[45, 49, 53],
	[47, 49, 51]
]

const t6WinCombos = [
	[54, 55, 56],
	[57, 58, 59],
	[60, 61, 62],
	[54, 57, 60],
	[55, 58, 61],
	[56, 59, 62],
	[54, 58, 62],
	[56, 58, 60]
]

const t7WinCombos = [
	[63, 64, 65],
	[66, 67, 68],
	[69, 70, 71],
	[63, 66, 69],
	[64, 67, 70],
	[65, 68, 71],
	[63, 67, 71],
	[65, 67, 69]
]

const t8WinCombos = [
	[72, 73, 74],
	[75, 76, 77],
	[78, 79, 80],
	[72, 75, 78],
	[73, 76, 79],
	[74, 77, 80],
	[72, 76, 80],
	[74, 76, 78]
]

function mainFunc(){
	
	playerName();
	startGame();
	xoMarquee();

	//remove transition css
	cards[0].style.transition = "0s ease-in-out";
	cards[1].style.transition = "0s ease-in-out";
	cards[2].style.transition = "0s ease-in-out";

	tutorialDiv.style.visibility = "hidden";

	playBtn.addEventListener('click' , function(){
		tutorialDiv.style.visibility = "hidden";
		slides[3].style.visibility = "hidden";

		for(var i = 0; i < cells.length; ++i){
			cells[i].style.pointerEvents = "auto";
		}
		timerTurnVar = setInterval(p1Timer , 1000);
	} , false)

	///////////////////////////////////////////////////////////////

	gotItBtn.addEventListener('click' , function(){
		circlesEffect();

		slidesEffect();
	}, false)

	//defaut circles effect
	for(var i = 1; i < circles.length; ++i){
		circles[i].style.opacity = "0.2";
	}

	//default slides options
	for(var i = 1; i < slides.length; ++i){
		slides[i].style.visibility = "hidden";
	}

	//slide 1 tutorial one and two
	playTutor1.addEventListener('click' , function(){
		tutorialOne();
	}, false)

	playTutor2.addEventListener('click' , function(){
		tutorialTwo();
	}, false)

	playTutor3.addEventListener('click' , function(){
		tutorialThree();
	}, false)

	///////////////////////////////
	playAgainBtn.addEventListener('click' , function(){
		startGame();
		winDiv.style.visibility = "hidden";
	} , false)
}

function xoMarquee(){
	var counter = 0;
	var counter1 = -250;
	xoVar = setInterval(frame , 50);
	function frame(){
		if(counter == -100){
			counter = 0;
			counter1 = -200;
		}else{
			counter--;
			counter1++;
			xo.style.marginLeft = counter + "px";
			xo1.style.marginLeft = counter1 + "px";
		}
	}
}

function circlesEffect(){
	circleInt++;

	if(circleInt >= circles.length){
		circleInt = 0;
	}

	for(var i = 0; i < circles.length; ++i){
		if(i == circleInt){
			circles[i].style.opacity = "1";
		}else{
			circles[i].style.opacity = "0.2";
		}
	}
}

function slidesEffect(){
	slidesInt++;

	switch(slidesInt){
		case 0:
			cards[0].style.transition = "0s ease-in-out";
			cards[1].style.transition = "0s ease-in-out";
			cards[2].style.transition = "0s ease-in-out";
		break;
		case 1:
			cards[0].style.transition = "2s ease-in-out";
			cards[1].style.transition = "2s ease-in-out";
			cards[2].style.transition = "0s ease-in-out";
		break;
		case 2:
			cards[0].style.transition = "0s ease-in-out";
			cards[1].style.transition = "0s ease-in-out";
			cards[2].style.transition = "2s ease-in-out";
		break;
		case 3:
			cards[0].style.transition = "0s ease-in-out";
			cards[1].style.transition = "0s ease-in-out";
			cards[2].style.transition = "0s ease-in-out";
		break;

	}

	if(slidesInt >= slides.length){
		slidesInt = 0;
	}

	for(var i = 0; i < slides.length; ++i){
		if(slidesInt == i){
			slides[i].style.visibility = "visible";
		}else{
			slides[i].style.visibility = "hidden"
		}
	}
}

function tutorialOne(){
	playTutor1.style.visibility = "hidden";
	tutorialOneVar = setInterval(tutorialOneTimer , 300);
}

function tutorialOneTimer(){
	
	switch(tutorialOneInt){
		case 20: cellsTutor[41].textContent = "X"; cellsTutor[41].style.color = "#B1D877";break;
		case 19: cellsTutor[42].textContent = "0"; cellsTutor[42].style.color = "#F16A70";break;
		case 18: cellsTutor[48].textContent = "X"; cellsTutor[48].style.color = "#B1D877";break;
		case 17: cellsTutor[47].textContent = "O"; cellsTutor[47].style.color = "#F16A70";break;
		case 16: cellsTutor[60].textContent = "X"; cellsTutor[60].style.color = "#B1D877";break;
		case 15: cellsTutor[62].textContent = "O"; cellsTutor[62].style.color = "#F16A70";break;
		case 14: cellsTutor[65].textContent = "X"; cellsTutor[65].style.color = "#B1D877"; break;
		case 13: cellsTutor[66].textContent = "O"; cellsTutor[66].style.color = "#F16A70";break;
		case 12: cellsTutor[36].textContent = "X"; cellsTutor[36].style.color = "#B1D877";break;
		case 11: cellsTutor[37].textContent = "O"; cellsTutor[37].style.color = "#F16A70";break;
		case 10: cellsTutor[0].textContent = "X"; cellsTutor[0].style.color = "#B1D877";break;
		case 9: cellsTutor[1].textContent = "0"; cellsTutor[1].style.color = "#F16A70";break;
		case 8: cellsTutor[21].textContent = "X"; cellsTutor[21].style.color = "#B1D877";break;
		case 7: cellsTutor[22].textContent = "O"; cellsTutor[22].style.color = "#F16A70";break;
		case 6: cellsTutor[52].textContent = "X"; cellsTutor[52].style.color = "#B1D877";break;
		case 5: cellsTutor[53].textContent = "O"; cellsTutor[53].style.color = "#F16A70";break;
		case 4: cellsTutor[3].textContent = "X"; cellsTutor[3].style.color = "#B1D877";break;
		case 3: cellsTutor[6].textContent = "O"; cellsTutor[6].style.color = "#F16A70";break;
		case 2: cellsTutor[4].textContent = "X"; cellsTutor[4].style.color = "#B1D877";break;
		case 1: cellsTutor[28].textContent = "O"; cellsTutor[28].style.color = "#F16A70";break;
		case 0: cellsTutor[17].textContent = "X"; cellsTutor[17].style.color = "#B1D877";break;
	}

	tutorialOneInt--;

	if(tutorialOneInt == -3){
		tutorialOneInt = 20;
		playTutor1.style.visibility = "visible";

		for(var i = 0; i < cellsTutor.length; ++i){
			cellsTutor[i].textContent = "";
		}

		clearInterval(tutorialOneVar);
	}
}

function tutorialTwo(){
	playTutor2.style.visibility = "hidden";
	tutorialTwoVar = setInterval(tutorialTwoTimer , 300);
}

function tutorialTwoTimer(){
	switch(tutorialTwoInt){
		case 20: cellsTutor2[0].textContent = "X"; cellsTutor2[0].style.color = "#B1D877";break;
		case 19: cellsTutor2[7].textContent = "0"; cellsTutor2[7].style.color = "#F16A70";break;
		case 18: cellsTutor2[1].textContent = "X"; cellsTutor2[1].style.color = "#B1D877";break;
		case 17: cellsTutor2[6].textContent = "O"; cellsTutor2[6].style.color = "#F16A70";break;
		case 16: cellsTutor2[2].textContent = "X"; cellsTutor2[2].style.color = "#B1D877";break;

		case 15: cellsTutor2[0].style.backgroundColor = "#394f17";
				 cellsTutor2[1].style.backgroundColor = "#394f17";
				 cellsTutor2[2].style.backgroundColor = "#394f17";
			break;

		case 14: bigTableTutorial[0].style.visibility = "visible"; break;
	
		case 13: cellsTutor2[36].textContent = "X"; cellsTutor2[36].style.color = "#B1D877";break;
		case 12: cellsTutor2[37].textContent = "O"; cellsTutor2[37].style.color = "#F16A70"; break;
		case 11: cellsTutor2[39].textContent = "X"; cellsTutor2[39].style.color = "#B1D877";break;
		case 10: cellsTutor2[41].textContent = "O"; cellsTutor2[41].style.color = "#F16A70";break;
		case 9: cellsTutor2[42].textContent = "X"; cellsTutor2[42].style.color = "#B1D877";break;
		case 8: cellsTutor2[44].textContent = "O"; cellsTutor2[44].style.color = "#F16A70";break;

		case 7: cellsTutor2[36].style.backgroundColor = "#394f17";
				cellsTutor2[39].style.backgroundColor = "#394f17";
				cellsTutor2[42].style.backgroundColor = "#394f17";
			break;

		case 6: bigTableTutorial[1].style.visibility = "visible"; break;

		case 5: cellsTutor2[72].textContent = "X"; cellsTutor2[72].style.color = "#B1D877";break;
		case 4: cellsTutor2[74].textContent = "O"; cellsTutor2[74].style.color = "#F16A70";break;
		case 3: cellsTutor2[76].textContent = "X"; cellsTutor2[76].style.color = "#B1D877";break;
		case 2: cellsTutor2[75].textContent = "O"; cellsTutor2[75].style.color = "#F16A70";break;
		case 1: cellsTutor2[80].textContent = "X"; cellsTutor2[80].style.color = "#B1D877";break;
		case 0: cellsTutor2[79].textContent = "O"; cellsTutor2[79].style.color = "#F16A70";break;

		case -1: cellsTutor2[72].style.backgroundColor = "#394f17";
				 cellsTutor2[76].style.backgroundColor = "#394f17";
				 cellsTutor2[80].style.backgroundColor = "#394f17";
			break;

		case -2: bigTableTutorial[2].style.visibility = "visible"; break;
			break;

		case -3: bigTableTutorial[0].style.backgroundColor = "#394f17";
				 bigTableTutorial[1].style.backgroundColor = "#394f17";
				 bigTableTutorial[2].style.backgroundColor = "#394f17";
	}

	tutorialTwoInt--;

	if(tutorialTwoInt == -6){
		tutorialTwoInt = 20;
		playTutor2.style.visibility = "visible";

		for(var i = 0; i < cellsTutor2.length; ++i){
			cellsTutor2[i].textContent = "";
		}

		clearInterval(tutorialTwoVar);
	}
}

function tutorialThree(){
	playTutor3.style.visibility = "hidden";
	tutorialThreeVar = setInterval(tutorialThreeTimer , 1000);
}

function tutorialThreeTimer(){
	tutorialThreeInt--;

	if(tutorialThreeInt >= 0){
		timerTutor3.textContent = "0:0" + tutorialThreeInt;
	}

	if(tutorialThreeInt == -1){
		aiTurnTutor.style.visibility = "visible";
	}

	if(tutorialThreeInt == -6){
		playTutor3.style.visibility = "visible";
		aiTurnTutor.style.visibility = "hidden";
		timerTutor3.textContent = "0:02";
		tutorialThreeInt = 2;
		clearInterval(tutorialThreeVar);
	}

	
}

function playerName(){
	p1Name.textContent = localStorage.getItem("player");
}

function startGame(){
	for(var i = 0; i <= 8; ++i){
		origBoardT0[i] = i;
	}
	for(var i = 9; i <= 17; ++i){
		origBoardT1[i] = i;
	}
	for(var i = 18; i <= 26; ++i){
		origBoardT2[i] = i;
	}
	for(var i = 27; i <= 35; ++i){
		origBoardT3[i] = i;
	}
	for(var i = 36; i <= 44; ++i){
		origBoardT4[i] = i;
	}
	for(var i = 45; i <= 53; ++i){
		origBoardT5[i] = i;
	}
	for(var i = 54; i <= 62; ++i){
		origBoardT6[i] = i;
	}
	for(var i = 63; i <= 71; ++i){
		origBoardT7[i] = i;
	}
	for(var i = 72; i <= 80; ++i){
		origBoardT8[i] = i;
	}

	setDefaultCells(0 , 8);
	setDefaultCells(9 , 17);
	setDefaultCells(18 , 26);
	setDefaultCells(27 ,35);
	setDefaultCells(36 , 44);
	setDefaultCells(45 , 53);
	setDefaultCells(54 , 62);
	setDefaultCells(63 , 71);
	setDefaultCells(72 , 80);

	//p1TurnDiv.style.visibility = "hidden";
	aiTurnDiv.style.visibility = "hidden";

	aiThinking.style.visibility = "hidden";

	//timerTurn.style.visibility = "hidden";

	breakDiv.style.visibility = "hidden";

	bigTable.style.visibility = "hidden";
}

function setDefaultCells(start , limit){
	for(var i = start; i <= limit; ++i){
		cells[i].textContent = '';
		cells[i].style.fontSize = "26pt";
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click' , turnClick , false);
	}
}

function turnClick(square){
	let whatTable;
	let squareInt = parseInt(square.target.id); 

	aiThinking.style.visibility = "visible";

	clearInterval(timerTurnVar);

	for(var i = 0; i < cells.length; ++i){
		cells[i].style.pointerEvents = "none";
	}

	if(squareInt >= 0 && squareInt <= 8){
		if (typeof origBoardT0[square.target.id] == 'number'){

			turn_0(square.target.id , humanPlayer);
			
			unclickTable = 0;


			p1TurnDiv.style.visibility = "hidden";
			aiTurnDiv.style.visibility = "visible";

			whatTable = 0;

			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);
		}
	}else if(squareInt >= 9 && squareInt <= 17){
		if (typeof origBoardT1[square.target.id] == 'number'){

			turn_1(square.target.id , humanPlayer);

			p1TurnDiv.style.visibility = "hidden";
			aiTurnDiv.style.visibility = "visible";

			unclickTable = 1;

			whatTable = 1;
			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);
		}
	}else if(squareInt >= 18 && squareInt <= 26){
		if (typeof origBoardT2[square.target.id] == 'number'){
			turn_2(square.target.id , humanPlayer);

			p1TurnDiv.style.visibility = "hidden";
			aiTurnDiv.style.visibility = "visible";

			unclickTable = 2;
			
			whatTable = 2;
			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);
		}
	}else if(squareInt >= 27 && squareInt <= 35){
		if (typeof origBoardT3[square.target.id] == 'number'){
			turn_3(square.target.id , humanPlayer);

			p1TurnDiv.style.visibility = "hidden";
			aiTurnDiv.style.visibility = "visible";

			unclickTable = 3;
			
			whatTable = 3;
			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);
		}
	}else if(squareInt >= 36 && squareInt <= 44){
		if (typeof origBoardT4[square.target.id] == 'number'){
			turn_4(square.target.id , humanPlayer);

			p1TurnDiv.style.visibility = "hidden";
			aiTurnDiv.style.visibility = "visible";

			unclickTable = 4;
			
			whatTable = 4;
			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);
		}
	}else if(squareInt >= 45 && squareInt <= 53){
		if (typeof origBoardT5[square.target.id] == 'number'){
			turn_5(square.target.id , humanPlayer);

			p1TurnDiv.style.visibility = "hidden";
			aiTurnDiv.style.visibility = "visible";

			unclickTable = 5;
			
			whatTable = 5;
			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);
		}
	}else if(squareInt >= 54 && squareInt <= 62){
		if (typeof origBoardT6[square.target.id] == 'number'){
			turn_6(square.target.id , humanPlayer);

			p1TurnDiv.style.visibility = "hidden";
			aiTurnDiv.style.visibility = "visible";

			unclickTable = 6;
			
			whatTable = 6;
			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);
		}
	}else if(squareInt >= 63 && squareInt <= 71){
		if (typeof origBoardT7[square.target.id] == 'number'){
			turn_7(square.target.id , humanPlayer);

			p1TurnDiv.style.visibility = "hidden";
			aiTurnDiv.style.visibility = "visible";

			unclickTable = 7;
			
			whatTable = 7;
			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);
		}
	}else if(squareInt >= 72 && squareInt <= 80){
		if (typeof origBoardT8[square.target.id] == 'number'){
			turn_8(square.target.id , humanPlayer);

			p1TurnDiv.style.visibility = "hidden";
			aiTurnDiv.style.visibility = "visible";

			unclickTable = 8;
			
			whatTable = 8;
			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);
		}
	}
	timerTurnInt = 2;
	p1TimerTxt.textContent = "0:0" + timerTurnInt;
}

function unClick(unclickTable){
	aiThinking.style.visibility = "visible";

	p1TurnDiv.style.visibility = "hidden";
	aiTurnDiv.style.visibility = "visible";

	if(unclickTable == 0){

			if(typeof freeTable[0] != 'number'){
				var freeTableCont = freeTable.filter(elem => typeof elem == 'number');
				whatTable = freeTableCont[Math.floor(Math.random() * freeTableCont.length)];
			}else{
				whatTable = 0;
			}
			console.log("denzelle");
			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);		

	}else if(unclickTable == 1){

			if(typeof freeTable[1] != 'number'){
				var freeTableCont = freeTable.filter(elem => typeof elem == 'number');
				whatTable = freeTableCont[Math.floor(Math.random() * freeTableCont.length)];
			}else{
				whatTable = 1;
			}

			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);

	}else if(unclickTable == 2){
			if(typeof freeTable[2] != 'number'){
				var freeTableCont = freeTable.filter(elem => typeof elem == 'number');
				whatTable = freeTableCont[Math.floor(Math.random() * freeTableCont.length)];
			}else{
				whatTable = 2;
			}
			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);
	}else if(unclickTable == 3){

			if(typeof freeTable[3] != 'number'){
				var freeTableCont = freeTable.filter(elem => typeof elem == 'number');
				whatTable = freeTableCont[Math.floor(Math.random() * freeTableCont.length)];
			}else{
				whatTable = 3;
			}

			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);

	}else if(unclickTable == 4){

			if(typeof freeTable[4] != 'number'){
				var freeTableCont = freeTable.filter(elem => typeof elem == 'number');
				whatTable = freeTableCont[Math.floor(Math.random() * freeTableCont.length)];
			}else{
				whatTable = 4;
			}

			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);

	}else if(unclickTable == 5){

			if(typeof freeTable[5] != 'number'){
				var freeTableCont = freeTable.filter(elem => typeof elem == 'number');
				whatTable = freeTableCont[Math.floor(Math.random() * freeTableCont.length)];
			}else{
				whatTable = 5;
			}

			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);

	}else if(unclickTable == 6){

			if(typeof freeTable[6] != 'number'){
				var freeTableCont = freeTable.filter(elem => typeof elem == 'number');
				whatTable = freeTableCont[Math.floor(Math.random() * freeTableCont.length)];
			}else{
				whatTable = 6;
			}

			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);

	}else if(unclickTable == 7){

			if(typeof freeTable[7] != 'number'){
				var freeTableCont = freeTable.filter(elem => typeof elem == 'number');
				whatTable = freeTableCont[Math.floor(Math.random() * freeTableCont.length)];
			}else{
				whatTable = 7;
			}

			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);

	}else if(unclickTable == 8){

			if(typeof freeTable[8] != 'number'){
				var freeTableCont = freeTable.filter(elem => typeof elem == 'number');
				whatTable = freeTableCont[Math.floor(Math.random() * freeTableCont.length)];
			}else{
				whatTable = 8;
			}

			aiVar = setInterval(function() {aiTimer(whatTable);} , 1000);

	}
}

function p1Timer(){
	//console.log(hadBigTableWon);
	if(hadBigTableWon == false && stop == false){
		timerTurnInt--;

		p1TimerTxt.textContent = "0:0" + timerTurnInt;

		if(timerTurnInt == 0){
			for(var i = 0; i < cells.length; ++i){
				cells[i].style.pointerEvents = "none";
			}
			timerTurnInt = 2;
			p1TimerTxt.textContent = "0:0" + timerTurnInt;
			if(hadBigTableWon == false){
				unClick(unclickTable);
			}
			clearInterval(timerTurnVar);
			return 0;
		}
	}
}

function aiTimer(whatTable){

	//console.log(aiInt);
	//console.log("ai TImer");
	if(true){
	aiInt--;
	if(hadBigTableWon == false){
		if(aiInt == 0){
			switch(whatTable){
				case 0: if (!checkWin_0(origBoardT0, humanPlayer) && !checkTie_0(0 , 8)){
						console.log("KYLA DENZELLE SAMSON OLMO");
						turn_0(bestSpot_0(), aiPlayer);
						if(hadWon == false){
							timerTurnVar = setInterval(p1Timer , 1000);
						}else{
							hadWon = false;
						}
					}else{
						console.log("tie");
						clearInterval(aiVar);
					}
					break;
				case 1: if (!checkWin_1(origBoardT1, humanPlayer) && !checkTie_1(9 , 17)){
							turn_1(bestSpot_1(), aiPlayer);
							if(hadWon == false){
								timerTurnVar = setInterval(p1Timer , 1000);
							}else{
								hadWon = false;
							}
						} 
					break;
				case 2: if (!checkWin_2(origBoardT2, humanPlayer) && !checkTie_2(18 , 26)){
							turn_2(bestSpot_2(), aiPlayer);
							if(hadWon == false){
								timerTurnVar = setInterval(p1Timer , 1000);
							}else{
								hadWon = false;
							}
						} 
					break;
				case 3: if (!checkWin_3(origBoardT3, humanPlayer) && !checkTie_3(27 , 35)){
							turn_3(bestSpot_3(), aiPlayer);
							if(hadWon == false){
								timerTurnVar = setInterval(p1Timer , 1000);
							}else{
								hadWon = false;
							}
						} 
					break;
				case 4: if (!checkWin_4(origBoardT4, humanPlayer) && !checkTie_4(36 , 44)){
							turn_4(bestSpot_4(), aiPlayer);
							if(hadWon == false){
								timerTurnVar = setInterval(p1Timer , 1000);
							}else{
								hadWon = false;
							}
						} 
					break;
				case 5: if (!checkWin_5(origBoardT5, humanPlayer) && !checkTie_5(45 , 53)){
							turn_5(bestSpot_5(), aiPlayer);
							if(hadWon == false){
								timerTurnVar = setInterval(p1Timer , 1000);
							}else{
								hadWon = false;
							}
						} 
					break;
				case 6: if (!checkWin_6(origBoardT6, humanPlayer) && !checkTie_6(54 , 62)){
							turn_6(bestSpot_6(), aiPlayer);
							if(hadWon == false){
								timerTurnVar = setInterval(p1Timer , 1000);
							}else{
								hadWon = false;
							}
						} 
					break;
				case 7: if (!checkWin_7(origBoardT7, humanPlayer) && !checkTie_7(63 , 71)){
							turn_7(bestSpot_7(), aiPlayer);
							if(hadWon == false){
								timerTurnVar = setInterval(p1Timer , 1000);
							}else{
								hadWon = false;
							}
						} 
					break;
				case 8: if (!checkWin_8(origBoardT8, humanPlayer) && !checkTie_8(72 , 80)){
							turn_8(bestSpot_8(), aiPlayer);
							if(hadWon == false){
								timerTurnVar = setInterval(p1Timer , 1000);
							}else{
								hadWon = false;
							}
						} 
					break;
			}
			for(var i = 0; i < cells.length; ++i){
				cells[i].style.pointerEvents = "auto";
			}
			p1TurnDiv.style.visibility = "visible";
			aiTurnDiv.style.visibility = "hidden";
			aiThinking.style.visibility = "hidden";
		}
		if(aiInt == -1){
			aiInt = 2;
			console.log("end of ai timer");
			clearInterval(aiVar);
		}
	}	
	}
}


function turn_0(squareID , player){
	origBoardT0[squareID] = player;
	(player == "X") ? cells[squareID].style.color = "#B1D877" : cells[squareID].style.color = "#F16A70";
	cells[squareID].textContent = player;

	let gameWon = checkWin_0(origBoardT0, player)
	if (gameWon) gameOver(gameWon , 0 , 8)
}

function checkWin_0(board , player){
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of t0WinCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {winCombos: t0WinCombos, index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function turn_1(squareID , player){
	origBoardT1[squareID] = player;
	(player == "X") ? cells[squareID].style.color = "#B1D877" : cells[squareID].style.color = "#F16A70";
	cells[squareID].textContent = player;

	let gameWon = checkWin_1(origBoardT1, player)
	if (gameWon) gameOver(gameWon , 9 , 17)
}

function checkWin_1(board , player){
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of t1WinCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {winCombos: t1WinCombos, index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function turn_2(squareID , player){
	origBoardT2[squareID] = player;
	(player == "X") ? cells[squareID].style.color = "#B1D877" : cells[squareID].style.color = "#F16A70";
	cells[squareID].textContent = player;

	let gameWon = checkWin_2(origBoardT2, player)
	if (gameWon) gameOver(gameWon , 18 , 26)
}

function checkWin_2(board , player){
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of t2WinCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {winCombos: t2WinCombos, index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function turn_3(squareID , player){
	origBoardT3[squareID] = player;
	(player == "X") ? cells[squareID].style.color = "#B1D877" : cells[squareID].style.color = "#F16A70";
	cells[squareID].textContent = player;

	let gameWon = checkWin_3(origBoardT3, player)
	if (gameWon) gameOver(gameWon , 27 , 35)
}

function checkWin_3(board , player){
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of t3WinCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {winCombos: t3WinCombos, index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function turn_4(squareID , player){
	origBoardT4[squareID] = player;
	(player == "X") ? cells[squareID].style.color = "#B1D877" : cells[squareID].style.color = "#F16A70";
	cells[squareID].textContent = player;

	let gameWon = checkWin_4(origBoardT4, player)
	if (gameWon) gameOver(gameWon , 36 , 44)
}

function checkWin_4(board , player){
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of t4WinCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {winCombos: t4WinCombos, index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function turn_5(squareID , player){
	origBoardT5[squareID] = player;
	(player == "X") ? cells[squareID].style.color = "#B1D877" : cells[squareID].style.color = "#F16A70";
	cells[squareID].textContent = player;

	let gameWon = checkWin_5(origBoardT5, player)
	if (gameWon) gameOver(gameWon , 45 , 53)
}

function checkWin_5(board , player){
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of t5WinCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {winCombos: t5WinCombos, index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function turn_6(squareID , player){
	origBoardT6[squareID] = player;
	(player == "X") ? cells[squareID].style.color = "#B1D877" : cells[squareID].style.color = "#F16A70";
	cells[squareID].textContent = player;

	let gameWon = checkWin_6(origBoardT6, player)
	if (gameWon) gameOver(gameWon, 54 , 62)
}

function checkWin_6(board , player){
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of t6WinCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {winCombos: t6WinCombos, index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function turn_7(squareID , player){
	origBoardT7[squareID] = player;
	(player == "X") ? cells[squareID].style.color = "#B1D877" : cells[squareID].style.color = "#F16A70";
	cells[squareID].textContent = player;

	let gameWon = checkWin_7(origBoardT7, player)
	if (gameWon) gameOver(gameWon , 63 , 71)
}

function checkWin_7(board , player){
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of t7WinCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {winCombos: t7WinCombos, index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function turn_8(squareID , player){
	origBoardT8[squareID] = player;
	(player == "X") ? cells[squareID].style.color = "#B1D877" : cells[squareID].style.color = "#F16A70";
	cells[squareID].textContent = player;

	let gameWon = checkWin_8(origBoardT8, player)
	if (gameWon) gameOver(gameWon , 72 , 80)
}

function checkWin_8(board , player){
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of t8WinCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {winCombos: t8WinCombos, index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function bigTableTimer(bTable){
	bTable.style.visibility = "visible";
	bTable.style.opacity = "0";

	let counter = 0;

	bigTableVar = setInterval(frame , 500);
	function frame(){
		if(counter == 8){
			timerTurnVar = setInterval(p1Timer , 1000);
			for(var i = 0; i < cells.length; ++i){
				cells[i].style.pointerEvents = "auto";
			}
			clearInterval(bigTableVar);
		}else{
			counter++;
			bTable.style.opacity = "0." + counter;
			for(var i = 0; i < cells.length; ++i){
				cells[i].style.pointerEvents = "none";
			}

		}
	}
}

function gameOver(gameWon , start , limit) {

	let obj = 0;
	for (let index of gameWon.winCombos[gameWon.index]) {
		document.getElementById(index).style.backgroundColor =
			gameWon.player == humanPlayer ? "#2a3b11" : "#46070a";
	}
	for (var i = start; i <= limit; i++) {
		cells[i].removeEventListener('click', turnClick, false);
	}

	p1TurnDiv.style.visibility = "visible";
	aiTurnDiv.style.visibility = "hidden";

	hadWon = true;

	if(start >= 0 && limit <= 8){
		table[0].style.opacity = "0.2";

		bigTable.style.top = bigTableData[obj].top;
		bigTable.style.left = bigTableData[obj].left;
		(gameWon.player == "X") ? bigTableTxt.textContent = "X" : bigTableTxt.textContent = "O";

		bigTableTimer(bigTable);

		hadWonTable = 0;
		freeTable[0] = false;
		bigTableBoard[0] = gameWon.player;

	}else if(start >= 9 && limit <= 17){
		table[1].style.opacity = "0.2";

		obj = 1;

		var bigTableCreate = document.createElement("DIV"); 
		bigTableCreate.setAttribute("id" , "bigTable1");
		bigTableCreate.style.position = "absolute";
		bigTableCreate.style.width = "13%";
		bigTableCreate.style.height = "180px";
		bigTableCreate.style.backgroundColor = "#4D4D4D";
		bigTableCreate.style.top = bigTableData[obj].top;
		bigTableCreate.style.left = bigTableData[obj].left;
		document.body.appendChild(bigTableCreate);  

		var textAnimationCreate = document.createElement("H4"); 
		textAnimationCreate.style.color = "#F16A70";
		textAnimationCreate.style.fontSize = "120pt";
		textAnimationCreate.style.textAlign = "center";
		textAnimationCreate.style.fontFamily = "Agency FB";
		(gameWon.player == "X") ? textAnimationCreate.textContent = "X" : textAnimationCreate.textContent = "O";

		bigTableCreate.appendChild(textAnimationCreate);

		bigTableTimer(bigTableCreate);

		hadWonTable = 1;

		freeTable[1] = false;
		bigTableBoard[1] = gameWon.player;
		
	}else if(start >= 18 && limit <= 26){
		table[2].style.opacity = "0.2";

		obj = 2;
		
		var bigTableCreate = document.createElement("DIV"); 
		bigTableCreate.setAttribute("id" , "bigTable2");
		bigTableCreate.style.position = "absolute";
		bigTableCreate.style.width = "13%";
		bigTableCreate.style.height = "180px";
		bigTableCreate.style.backgroundColor = "#4D4D4D";
		bigTableCreate.style.top = bigTableData[obj].top;
		bigTableCreate.style.left = bigTableData[obj].left;
		document.body.appendChild(bigTableCreate);  

		var textAnimationCreate = document.createElement("H4"); 
		textAnimationCreate.style.color = "#F16A70";
		textAnimationCreate.style.fontSize = "120pt";
		textAnimationCreate.style.textAlign = "center";
		textAnimationCreate.style.fontFamily = "Agency FB";
		(gameWon.player == "X") ? textAnimationCreate.textContent = "X" : textAnimationCreate.textContent = "O";

		bigTableCreate.appendChild(textAnimationCreate);

		bigTableTimer(bigTableCreate);

		hadWonTable = 2;

		freeTable[2] = false;
		bigTableBoard[2] = gameWon.player;
		
	}else if(start >= 27 && limit <= 35){
		table[3].style.opacity = "0.2";

		obj = 3;
		
		var bigTableCreate = document.createElement("DIV"); 
		bigTableCreate.setAttribute("id" , "bigTable3");
		bigTableCreate.style.position = "absolute";
		bigTableCreate.style.width = "13%";
		bigTableCreate.style.height = "180px";
		bigTableCreate.style.backgroundColor = "#4D4D4D";
		bigTableCreate.style.top = bigTableData[obj].top;
		bigTableCreate.style.left = bigTableData[obj].left;
		document.body.appendChild(bigTableCreate);  

		var textAnimationCreate = document.createElement("H4"); 
		textAnimationCreate.style.color = "#F16A70";
		textAnimationCreate.style.fontSize = "120pt";
		textAnimationCreate.style.textAlign = "center";
		textAnimationCreate.style.fontFamily = "Agency FB";
		(gameWon.player == "X") ? textAnimationCreate.textContent = "X" : textAnimationCreate.textContent = "O";

		bigTableCreate.appendChild(textAnimationCreate);

		bigTableTimer(bigTableCreate);

		hadWonTable = 3;

		freeTable[3] = false;
		bigTableBoard[3] = gameWon.player;
		
	}else if(start >= 36 && limit <= 44){
		table[4].style.opacity = "0.2";

		obj = 4;
		
		var bigTableCreate = document.createElement("DIV"); 
		bigTableCreate.setAttribute("id" , "bigTable4");
		bigTableCreate.style.position = "absolute";
		bigTableCreate.style.width = "13%";
		bigTableCreate.style.height = "180px";
		bigTableCreate.style.backgroundColor = "#4D4D4D";
		bigTableCreate.style.top = bigTableData[obj].top;
		bigTableCreate.style.left = bigTableData[obj].left;
		document.body.appendChild(bigTableCreate);  

		var textAnimationCreate = document.createElement("H4"); 
		textAnimationCreate.style.color = "#F16A70";
		textAnimationCreate.style.fontSize = "120pt";
		textAnimationCreate.style.textAlign = "center";
		textAnimationCreate.style.fontFamily = "Agency FB";
		(gameWon.player == "X") ? textAnimationCreate.textContent = "X" : textAnimationCreate.textContent = "O";

		bigTableCreate.appendChild(textAnimationCreate);

		bigTableTimer(bigTableCreate);

		hadWonTable = 4;

		freeTable[4] = false;
		bigTableBoard[4] = gameWon.player;
		
	}else if(start >= 45 && limit <= 53){
		table[5].style.opacity = "0.2";

		obj = 5;
		
		var bigTableCreate = document.createElement("DIV"); 
		bigTableCreate.setAttribute("id" , "bigTable5");
		bigTableCreate.style.position = "absolute";
		bigTableCreate.style.width = "13%";
		bigTableCreate.style.height = "180px";
		bigTableCreate.style.backgroundColor = "#4D4D4D";
		bigTableCreate.style.top = bigTableData[obj].top;
		bigTableCreate.style.left = bigTableData[obj].left;
		document.body.appendChild(bigTableCreate);  

		var textAnimationCreate = document.createElement("H4"); 
		textAnimationCreate.style.color = "#F16A70";
		textAnimationCreate.style.fontSize = "120pt";
		textAnimationCreate.style.textAlign = "center";
		textAnimationCreate.style.fontFamily = "Agency FB";
		(gameWon.player == "X") ? textAnimationCreate.textContent = "X" : textAnimationCreate.textContent = "O";

		bigTableCreate.appendChild(textAnimationCreate);

		bigTableTimer(bigTableCreate);

		hadWonTable = 5;

		freeTable[5] = false;
		bigTableBoard[5] = gameWon.player;
	
	}else if(start >= 54 && limit <= 62){
		table[6].style.opacity = "0.2";

		obj = 6;
		
		var bigTableCreate = document.createElement("DIV"); 
		bigTableCreate.setAttribute("id" , "bigTable6");
		bigTableCreate.style.position = "absolute";
		bigTableCreate.style.width = "13%";
		bigTableCreate.style.height = "180px";
		bigTableCreate.style.backgroundColor = "#4D4D4D";
		bigTableCreate.style.top = bigTableData[obj].top;
		bigTableCreate.style.left = bigTableData[obj].left;
		document.body.appendChild(bigTableCreate);  

		var textAnimationCreate = document.createElement("H4"); 
		textAnimationCreate.style.color = "#F16A70";
		textAnimationCreate.style.fontSize = "120pt";
		textAnimationCreate.style.textAlign = "center";
		textAnimationCreate.style.fontFamily = "Agency FB";
		(gameWon.player == "X") ? textAnimationCreate.textContent = "X" : textAnimationCreate.textContent = "O";

		bigTableCreate.appendChild(textAnimationCreate);

		bigTableTimer(bigTableCreate);

		hadWonTable = 6;

		freeTable[6] = false;
		bigTableBoard[6] = gameWon.player;
		
	}else if(start >= 63 && limit <= 71){
		table[7].style.opacity = "0.2";

		obj = 7;
		
		var bigTableCreate = document.createElement("DIV"); 
		bigTableCreate.setAttribute("id" , "bigTable7");
		bigTableCreate.style.position = "absolute";
		bigTableCreate.style.width = "13%";
		bigTableCreate.style.height = "180px";
		bigTableCreate.style.backgroundColor = "#4D4D4D";
		bigTableCreate.style.top = bigTableData[obj].top;
		bigTableCreate.style.left = bigTableData[obj].left;
		document.body.appendChild(bigTableCreate);  

		var textAnimationCreate = document.createElement("H4"); 
		textAnimationCreate.style.color = "#F16A70";
		textAnimationCreate.style.fontSize = "120pt";
		textAnimationCreate.style.textAlign = "center";
		textAnimationCreate.style.fontFamily = "Agency FB";
		(gameWon.player == "X") ? textAnimationCreate.textContent = "X" : textAnimationCreate.textContent = "O";

		bigTableCreate.appendChild(textAnimationCreate);

		bigTableTimer(bigTableCreate);

		hadWonTable = 7;

		freeTable[7] = false;
		bigTableBoard[7] = gameWon.player;
		
	}else if(start >= 72 && limit <= 80){
		table[8].style.opacity = "0.2";

		obj = 8;
		
		var bigTableCreate = document.createElement("DIV"); 
		bigTableCreate.setAttribute("id" , "bigTable8");
		bigTableCreate.style.position = "absolute";
		bigTableCreate.style.width = "13%";
		bigTableCreate.style.height = "180px";
		bigTableCreate.style.backgroundColor = "#4D4D4D";
		bigTableCreate.style.top = bigTableData[obj].top;
		bigTableCreate.style.left = bigTableData[obj].left;
		document.body.appendChild(bigTableCreate);  

		var textAnimationCreate = document.createElement("H4"); 
		textAnimationCreate.style.color = "#F16A70";
		textAnimationCreate.style.fontSize = "120pt";
		textAnimationCreate.style.textAlign = "center";
		textAnimationCreate.style.fontFamily = "Agency FB";
		(gameWon.player == "X") ? textAnimationCreate.textContent = "X" : textAnimationCreate.textContent = "O";

		bigTableCreate.appendChild(textAnimationCreate);

		bigTableTimer(bigTableCreate);

		hadWonTable = 8;

		freeTable[8] = false;
		bigTableBoard[8] = gameWon.player;
	}

	let bigGameWon = bigTableCheckWin(bigTableBoard , gameWon.player);
	if(bigGameWon) bigGameOver(bigGameWon);
}

function bigTableCheckWin(board , player){
	let bigPlays = board.reduce((a , e , i) => (e === player) ? a.concat(i) : a, []);

	let bigGameWon = null;

	for(let [index , win] of bigTableWinCombos.entries()){
		if(win.every(elem => bigPlays.indexOf(elem) > -1)){
			bigGameWon = {index: index , player: player}
		}
	}

	return bigGameWon;
}

function bigGameOver(bigGameWon){
	let bigGameOverInt = 4;
	let bigGameOverVar = setInterval(function(){
		bigGameOverInt--;

		if(bigGameOverInt == 0){
			if(bigGameWon.index == 0){
				bigTable.style.backgroundColor = "#5d090d";
				bigTable1.style.backgroundColor = "#5d090d";
				bigTable2.style.backgroundColor = "#5d090d";
			}
			else if(bigGameWon.index == 1){
				bigTable3.style.backgroundColor = "#5d090d";
				bigTable4.style.backgroundColor = "#5d090d";
				bigTable5.style.backgroundColor = "#5d090d";
			}
			else if(bigGameWon.index == 2){
				bigTable6.style.backgroundColor = "#5d090d";
				bigTable7.style.backgroundColor = "#5d090d";
				bigTable8.style.backgroundColor = "#5d090d";
			}
			else if(bigGameWon.index == 3){
				bigTable.style.backgroundColor = "#5d090d";
				bigTable3.style.backgroundColor = "#5d090d";
				bigTable6.style.backgroundColor = "#5d090d";
			}
			else if(bigGameWon.index == 4){
				bigTable1.style.backgroundColor = "#5d090d";
				bigTable4.style.backgroundColor = "#5d090d";
				bigTable7.style.backgroundColor = "#5d090d";
			}
			else if(bigGameWon.index == 5){
				bigTable2.style.backgroundColor = "#5d090d";
				bigTable5.style.backgroundColor = "#5d090d";
				bigTable8.style.backgroundColor = "#5d090d";
			}
			else if(bigGameWon.index == 6){
				bigTable.style.backgroundColor = "#5d090d";
				bigTable4.style.backgroundColor = "#5d090d";
				bigTable8.style.backgroundColor = "#5d090d";
			}
			else if(bigGameWon.index == 7){
				bigTable2.style.backgroundColor = "#5d090d";
				bigTable4.style.backgroundColor = "#5d090d";
				bigTable6.style.backgroundColor = "#5d090d";
			}

			for (var i = 0; i < cells.length; ++i) {
				cells[i].removeEventListener('click', turnClick, false);
				cells[i].style.pointerEvents = "none";
			}

			hadBigTableWon = true;
			winDiv.style.visibility = "visible";
			bigGameOverInt = 4;
			clearInterval(bigGameOverVar);
		}
	} , 1000);

}

function emptySquares_0(){
	return origBoardT0.filter(s => typeof s == 'number');
}

function emptySquares_1(){
	return origBoardT1.filter(s => typeof s == 'number');
}

function emptySquares_2(){
	return origBoardT2.filter(s => typeof s == 'number');
}

function emptySquares_3(){
	return origBoardT3.filter(s => typeof s == 'number');
}

function emptySquares_4(){
	return origBoardT4.filter(s => typeof s == 'number');
}

function emptySquares_5(){
	return origBoardT5.filter(s => typeof s == 'number');
}

function emptySquares_6(){
	return origBoardT6.filter(s => typeof s == 'number');
}

function emptySquares_7(){
	return origBoardT7.filter(s => typeof s == 'number');
}

function emptySquares_8(){
	return origBoardT8.filter(s => typeof s == 'number');
}

function bestSpot_0() {
	return minimax_0(origBoardT0, aiPlayer).index;
}

function bestSpot_1() {
	return minimax_1(origBoardT1, aiPlayer).index;
}

function bestSpot_2() {
	return minimax_2(origBoardT2, aiPlayer).index;
}

function bestSpot_3() {
	return minimax_3(origBoardT3, aiPlayer).index;
}

function bestSpot_4() {
	return minimax_4(origBoardT4, aiPlayer).index;
}

function bestSpot_5() {
	return minimax_5(origBoardT5, aiPlayer).index;
}

function bestSpot_6() {
	return minimax_6(origBoardT6, aiPlayer).index;
}

function bestSpot_7() {
	return minimax_7(origBoardT7, aiPlayer).index;
}

function bestSpot_8() {
	return minimax_8(origBoardT8, aiPlayer).index;
}

function breakTimer(start , limit){
	breakInt--;
	console.log(breakInt);
	breakTxt.textContent = breakInt;

	if(breakInt == 0){
		for (var i = start; i <= limit; i++) {
			cells[i].textContent ='';
			cells[i].style.removeProperty('background-color');
			cells[i].style.pointerEvents = "auto";
			cells[i].addEventListener('click', turnClick, false);
		}

		if(start >= 0 && limit <= 8){
			for(var i = start; i <= limit; ++i){
				origBoardT0[i] = i;
			}
		}else if(start >= 9 && limit <= 17){
			for(var i = start; i <= limit; ++i){
				origBoardT1[i] = i;
			}
		}else if(start >= 18 && limit <= 26){
			for(var i = start; i <= limit; ++i){
				origBoardT2[i] = i;
			}
		}else if(start >= 27 && limit <= 35){
			for(var i = start; i <= limit; ++i){
				origBoardT3[i] = i;
			}
		}else if(start >= 36 && limit <= 44){
			for(var i = start; i <= limit; ++i){
				origBoardT4[i] = i;
			}
		}else if(start >= 45 && limit <= 53){
			for(var i = start; i <= limit; ++i){
				origBoardT5[i] = i;
			}
		}else if(start >= 54 && limit <= 62){
			for(var i = start; i <= limit; ++i){
				origBoardT6[i] = i;
			}
		}else if(start >= 63 && limit <= 71){
			for(var i = start; i <= limit; ++i){
				origBoardT7[i] = i;
			}
		}else if(start >= 72 && limit <= 80){
			for(var i = start; i <= limit; ++i){
				origBoardT8[i] = i;
			}
		}
		breakInt = 5;
		breakTxt.textContent = breakInt;
		breakDiv.style.visibility = "hidden";

		timerTurnVar = setInterval(p1Timer , 1000);
		clearInterval(breakVar);
	}
}

function trying(){
	for (var i = 0; i <= 8; i++){
		cells[i].textContent = "";
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click' , turnClick , false);
	}
	for(var i = 0; i <= 8; ++i){
		origBoardT0[i] = i;
	}
	//aiInt = 2;
	clearInterval(aiVar);
}

function checkTie_0(start , limit){
	if (emptySquares_0().length == 0) {
		for (var i = start; i <= limit; i++) {
			cells[i].style.backgroundColor = "green";
			cells[i].removeEventListener('click', turnClick, false);
		}
		stop = true;
		clearInterval(timerTurnVar);
		clearInterval(aiVar);
		return true;
	}else{
		return false;

	}
	
}

function checkTie_1(start , limit){
	if (emptySquares_1().length == 0) {
		breakTxt.textContent = "TIE";

		p1TurnDiv.style.visibility = "visible";
		aiThinking.style.visibility = "hidden";
		aiTurnDiv.style.visibility = "hidden";

		for (var i = start; i <= limit; i++) {
			cells[i].style.backgroundColor = "#4D4D4D";
			cells[i].removeEventListener('click', turnClick, false);
		}

		breakDiv.style.top = "80px";
		breakDiv.style.left = "645px";

		breakDiv.style.visibility = "visible";
		clearInterval(timerTurnVar);
		clearInterval(aiVar);
		breakVar = setInterval(function(){breakTimer(start , limit)} , 1000);

		return true;
	}
	return false;
}

function checkTie_2(start , limit){
	if (emptySquares_2().length == 0) {
		breakTxt.textContent = "TIE";

		p1TurnDiv.style.visibility = "visible";
		aiThinking.style.visibility = "hidden";
		aiTurnDiv.style.visibility = "hidden";

		for (var i = start; i <= limit; i++) {
			cells[i].style.backgroundColor = "#4D4D4D";
			cells[i].removeEventListener('click', turnClick, false);
		}

		breakDiv.style.top = "80px";
		breakDiv.style.left = "845px";

		breakDiv.style.visibility = "visible";
		clearInterval(timerTurnVar);
		clearInterval(aiVar);
		breakVar = setInterval(function(){breakTimer(start , limit)} , 1000);

		return true;
	}
	return false;
}

function checkTie_3(start , limit){
	if (emptySquares_3().length == 0) {
		breakTxt.textContent = "TIE";

		p1TurnDiv.style.visibility = "visible";
		aiThinking.style.visibility = "hidden";
		aiTurnDiv.style.visibility = "hidden";

		for (var i = start; i <= limit; i++) {
			cells[i].style.backgroundColor = "#4D4D4D";
			cells[i].removeEventListener('click', turnClick, false);
		}

		breakDiv.style.top = "280px";
		breakDiv.style.left = "435px";

		breakDiv.style.visibility = "visible";
		clearInterval(timerTurnVar);
		clearInterval(aiVar);
		breakVar = setInterval(function(){breakTimer(start , limit)} , 1000);

		return true;
	}
	return false;
}

function checkTie_4(start , limit){
	if (emptySquares_4().length == 0) {
		breakTxt.textContent = "TIE";

		p1TurnDiv.style.visibility = "visible";
		aiThinking.style.visibility = "hidden";
		aiTurnDiv.style.visibility = "hidden";

		for (var i = start; i <= limit; i++) {
			cells[i].style.backgroundColor = "#4D4D4D";
			cells[i].removeEventListener('click', turnClick, false);
		}

		breakDiv.style.top = "280px";
		breakDiv.style.left = "645px";

		breakDiv.style.visibility = "visible";
		clearInterval(timerTurnVar);
		clearInterval(aiVar);
		breakVar = setInterval(function(){breakTimer(start , limit)} , 1000);

		return true;
	}
	return false;
}

function checkTie_5(start , limit){
	if (emptySquares_5().length == 0) {
		breakTxt.textContent = "TIE";

		p1TurnDiv.style.visibility = "visible";
		aiThinking.style.visibility = "hidden";
		aiTurnDiv.style.visibility = "hidden";

		for (var i = start; i <= limit; i++) {
			cells[i].style.backgroundColor = "#4D4D4D";
			cells[i].removeEventListener('click', turnClick, false);
		}

		breakDiv.style.top = "280px";
		breakDiv.style.left = "845px";

		breakDiv.style.visibility = "visible";
		clearInterval(timerTurnVar);
		clearInterval(aiVar);
		breakVar = setInterval(function(){breakTimer(start , limit)} , 1000);

		return true;
	}
	return false;
}

function checkTie_6(start , limit){
	if (emptySquares_6().length == 0) {
		breakTxt.textContent = "TIE";

		p1TurnDiv.style.visibility = "visible";
		aiThinking.style.visibility = "hidden";
		aiTurnDiv.style.visibility = "hidden";

		for (var i = start; i <= limit; i++) {
			cells[i].style.backgroundColor = "#4D4D4D";
			cells[i].removeEventListener('click', turnClick, false);
		}

		breakDiv.style.top = "480px";
		breakDiv.style.left = "435px";

		breakDiv.style.visibility = "visible";
		clearInterval(timerTurnVar);
		clearInterval(aiVar);
		breakVar = setInterval(function(){breakTimer(start , limit)} , 1000);

		return true;
	}
	return false;
}

function checkTie_7(start , limit){
	if (emptySquares_7().length == 0) {
		breakTxt.textContent = "TIE";

		p1TurnDiv.style.visibility = "visible";
		aiThinking.style.visibility = "hidden";
		aiTurnDiv.style.visibility = "hidden";

		for (var i = start; i <= limit; i++) {
			cells[i].style.backgroundColor = "#4D4D4D";
			cells[i].removeEventListener('click', turnClick, false);
		}

		breakDiv.style.top = "480px";
		breakDiv.style.left = "645px";

		breakDiv.style.visibility = "visible";
		clearInterval(timerTurnVar);
		clearInterval(aiVar);
		breakVar = setInterval(function(){breakTimer(start , limit)} , 1000);
		return true;
	}
	return false;
}

function checkTie_8(start , limit){
	if (emptySquares_8().length == 0) {
		breakTxt.textContent = "TIE";

		p1TurnDiv.style.visibility = "visible";
		aiThinking.style.visibility = "hidden";
		aiTurnDiv.style.visibility = "hidden";

		for (var i = start; i <= limit; i++) {
			cells[i].style.backgroundColor = "#4D4D4D";
			cells[i].removeEventListener('click', turnClick, false);
		}

		breakDiv.style.top = "480px";
		breakDiv.style.left = "845px";

		breakDiv.style.visibility = "visible";
		clearInterval(timerTurnVar);
		clearInterval(aiVar);
		breakVar = setInterval(function(){breakTimer(start , limit)} , 1000);
		return true;
	}
	return false;
}


function minimax_0(newBoard, player) {
	var availSpots = emptySquares_0();

	if (checkWin_0(newBoard, humanPlayer)) {
		return {score: -10};
	} else if (checkWin_0(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			var result = minimax_0(newBoard, humanPlayer);
			move.score = result.score;
		} else {
			var result = minimax_0(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}

function minimax_1(newBoard, player) {
	var availSpots = emptySquares_1();

	if (checkWin_1(newBoard, humanPlayer)) {
		return {score: -10};
	} else if (checkWin_1(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			var result = minimax_1(newBoard, humanPlayer);
			move.score = result.score;
		} else {
			var result = minimax_1(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}

function minimax_2(newBoard, player) {
	var availSpots = emptySquares_2();

	if (checkWin_2(newBoard, humanPlayer)) {
		return {score: -10};
	} else if (checkWin_2(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			var result = minimax_2(newBoard, humanPlayer);
			move.score = result.score;
		} else {
			var result = minimax_2(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}

function minimax_3(newBoard, player) {
	var availSpots = emptySquares_3();

	if (checkWin_3(newBoard, humanPlayer)) {
		return {score: -10};
	} else if (checkWin_3(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			var result = minimax_3(newBoard, humanPlayer);
			move.score = result.score;
		} else {
			var result = minimax_3(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}

function minimax_4(newBoard, player) {
	var availSpots = emptySquares_4();

	if (checkWin_4(newBoard, humanPlayer)) {
		return {score: -10};
	} else if (checkWin_4(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			var result = minimax_4(newBoard, humanPlayer);
			move.score = result.score;
		} else {
			var result = minimax_4(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}

function minimax_5(newBoard, player) {
	var availSpots = emptySquares_5();

	if (checkWin_5(newBoard, humanPlayer)) {
		return {score: -10};
	} else if (checkWin_5(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			var result = minimax_5(newBoard, humanPlayer);
			move.score = result.score;
		} else {
			var result = minimax_5(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}

function minimax_6(newBoard, player) {
	var availSpots = emptySquares_6();

	if (checkWin_6(newBoard, humanPlayer)) {
		return {score: -10};
	} else if (checkWin_6(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			var result = minimax_6(newBoard, humanPlayer);
			move.score = result.score;
		} else {
			var result = minimax_6(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}

function minimax_7(newBoard, player) {
	var availSpots = emptySquares_7();

	if (checkWin_7(newBoard, humanPlayer)) {
		return {score: -10};
	} else if (checkWin_7(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			var result = minimax_7(newBoard, humanPlayer);
			move.score = result.score;
		} else {
			var result = minimax_7(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}

function minimax_8(newBoard, player) {
	var availSpots = emptySquares_8();

	if (checkWin_8(newBoard, humanPlayer)) {
		return {score: -10};
	} else if (checkWin_8(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			var result = minimax_8(newBoard, humanPlayer);
			move.score = result.score;
		} else {
			var result = minimax_8(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}

const bigTableData = {
	0 : {
		top : "6.2%",
		left : "29.7%"
	} , 
	1 : {
		top : "6.2%",
		left : "44.25%"
	} , 
	2 : {
		top : "6.2%",
		left : "58.8%"
	} ,

	3 : {
		top : "35.9%",
		left : "29.7%"
	} , 
	4 : {
		top : "35.9%",
		left : "44.25%"
	} , 
	5 : {
		top : "35.9%",
		left : "58.8%"
	} , 

	6 : {
		top : "65.9%",
		left : "29.7%"
	} , 
	7 : {
		top : "65.9%",
		left : "44.25%"
	} , 
	8 : {
		top : "65.9%",
		left : "58.8%"
	}
}
