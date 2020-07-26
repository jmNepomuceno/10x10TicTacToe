const main = document.getElementById('main-div-id');
const cells = document.querySelectorAll('.cells');
const p1PointsLbl = document.getElementById('p1-points');
const p2PointsLbl = document.getElementById('p2-points');
const p1 = 'X';
const p2 = 'O';
let turnCounter = 0;
let origBoard;
let p1Points = 0;
let p2Points = 0;
let p1HorizontalCombos = [];
let p1VerticalCombos = [];
let p1LeftSlantCombos = [];
let p1RightSlantCombos = [];
let p2HorizontalCombos = [];
let p2VerticalCombos = [];
let p2LeftSlantCombos = [];
let p2RightSlantCombos = [];
const p1Fire = document.querySelector('.p1-fire');
const p2Fire = document.querySelector('.p2-fire');
const p1FireRight = document.getElementById('p1-fire-right');
const p1FireBottom = document.getElementById('p1-fire-bottom');
const p1FireLeft = document.getElementById('p1-fire-left');
const p2FireRight = document.getElementById('p2-fire-right');
const p2FireBottom = document.getElementById('p2-fire-bottom');
const p2FireLeft = document.getElementById('p2-fire-left');
const p1PlusPoints = document.getElementById('p1-plus-points');
const p2PlusPoints = document.getElementById('p2-plus-points');
const p1TurnDiv = document.getElementById('p1-turn-div');
const p1TurnTxt = document.getElementById('p1-turn');
const p2TurnDiv = document.getElementById('p2-turn-div');
const p2TurnTxt = document.getElementById('p2-turn');
let p1Name = document.getElementById('p1-name');
let p2Name = document.getElementById('p2-name');
let breakInt = 5;
const breakDiv = document.getElementById('break-div-id');
const breakTxt = document.getElementById('break-txt');
var breakVar;
const backHomeBtn = document.getElementById('back-home-btn');

//horizontal win combos
var horizontalWinCombos = [];
let limitHori = 7;
for(var i = 0; i <= 98; ++i){
	if(i <= limitHori){
		horizontalWinCombos.push([i , (i + 1) , (i + 2)]); 
	}else{
		i += 1;
		limitHori += 10
	}
}

//console.log(horizontalWinCombos);

//vertical win combos
var verticalWinCombos = [];
for(var i = 0; i <= 79; ++i){
	verticalWinCombos.push([i , (i + 10) , (i + 20)]); 
}

//left slant win combos
var leftSlantWinCombos = [];
let limit_L_Slant = 7;
for(var i = 0; i <= 77; ++i){
	if(i <= limit_L_Slant){
		leftSlantWinCombos.push([i , (i + 11) , (i + 22)]); 
	}else{
		i += 1;
		limit_L_Slant += 10;
	}
}

//console.log(leftSlantWinCombos);

//right slant win combos
var rightSlantWinCombos = [];
let limit_R_Slant = 9;
for(var i = 2; i <= 79; ++i){
	if(i <= limit_R_Slant){
		rightSlantWinCombos.push([i , (i + 9) , (i + 18)]); 
	}else{
		i += 1;
		limit_R_Slant += 10;
	}
}

//console.log(rightSlantWinCombos);

//horizontal two pattern combos
var horizontal_2_winCombos = [];
let hori_2_limit = 4;
for(var i = 0; i < 100; ++i){
	if(i <= hori_2_limit){
		horizontal_2_winCombos.push([i , (i + 3)]);
	}else{
		i += 4;
		hori_2_limit += 10;
	}
	
}

//console.log(horizontal_2_winCombos);

//vertical two pattern combos
var vertical_2_winCombos = [];
let verti_2_limit = 0;
for(var i = 0; i < 50; ++i){
	if(true){
		vertical_2_winCombos.push([i , (i + 30)]);
	}
}

//console.log(vertical_2_winCombos);

//left slant two pattern combos
var leftSlant_2_winCombos = [];
let leftSlant_2_limit = 4;
for(var i = 0; i < 45; ++i){
	if(i <= leftSlant_2_limit){
		leftSlant_2_winCombos.push([i , (i + 33)]);
	}else{
		i += 4;
		leftSlant_2_limit += 10;
	}
}

//console.log(leftSlant_2_winCombos);

//right slant two pattern combos
var rightSlant_2_winCombos = [];
let rightSlant_2_limit = 9;
for(var i = 5; i < 50; ++i){
	if(i <= rightSlant_2_limit){
		rightSlant_2_winCombos.push([i , (i + 27)]);
	}else{
		i += 4;
		rightSlant_2_limit += 10;
	}
}

//console.log(rightSlant_2_winCombos);

let p1NameArr;
let p2NameArr;
let p1NameInput;
let p2NameInput;
let p1NameChild = [];
let p2NameChild = [];
let aniDelay = ["0.25s" , "0.5s" , "0.75s" , "1s" , "1.25s" , "1.5s" , "1.75s" , "2s" , "2.5s" , "2.7s"];

function mainFunc(){
	startGame();
	playerName();
}

function playerName(){
	p1Name.textContent = localStorage.getItem("p1-name");
	p2Name.textContent = localStorage.getItem("p2-name");
}


//board functions
function startGame(){
	origBoard = Array.from(Array(99).keys());

	//for replay button when it clicked
	for(var i = 0; i < cells.length; ++i){
		cells[i].textContent = "";
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click' , turnClick , false);
	}

	p1PointsLbl.textContent = "SCORE: " + 0;
	p2PointsLbl.textContent = "SCORE: " + 0;
	p1PointsLbl.style.fontWeight = "bold";
	p2PointsLbl.style.fontWeight = "bold";

	p1Fire.style.visibility = "hidden";
	p2Fire.style.visibility = "hidden";

	p1TurnDiv.style.visibility = "visible";
	p1TurnTxt.style.visibility = "visible";


	p2TurnDiv.style.visibility = "hidden";
	p2TurnTxt.style.visibility = "visible";
	p2TurnTxt.style.opacity = "0.05";

	//for break timer on every player who wins
	breakDiv.style.visibility = "hidden";

}

function getBackHome(){
	if (confirm('Are you sure you want to leave this game?')) {
	  backHomeBtn.href = "index.html";
	}
}

function turnClick(square){
	if(turnCounter == 0){
		turn(square.target.id , p1);
		turnCounter = 1;
		p1TurnDiv.style.visibility = "hidden";
		p1TurnTxt.style.opacity = "0.05";

		p2TurnDiv.style.visibility = "visible";
		p2TurnTxt.style.opacity = "1";
		
	}else{
		turn(square.target.id , p2);
		turnCounter = 0;
		p2TurnDiv.style.visibility = "hidden";
		p2TurnTxt.style.opacity = "0.05";

		p1TurnDiv.style.visibility = "visible";
		p1TurnTxt.style.opacity = "1";
	}
}

function turn(squareID, player){
	origBoard[squareID] = player;
	cells[squareID].textContent = player;
	(player == "X") ? cells[squareID].style.color = "#B1D877" : cells[squareID].style.color = "#F16A70";
	cells[squareID].removeEventListener('click' , turnClick, false);

	let gameWon = playersTagBoard(origBoard , player);
	if(gameWon) winner(gameWon);
}

function playersTagBoard(board , player){
	if(player === "X"){
		let p1Plays = board.reduce((a , e , i) => (e == player && cells[i].style.backgroundColor == "") ? a.concat(i) : a , []);
		return checkWin(p1Plays , player);
	}else{
		let p2Plays = board.reduce((a , e , i) => (e == player && cells[i].style.backgroundColor == "") ? a.concat(i) : a , []);
		return checkWin(p2Plays , player);
	}
}

function checkWin(plays , player){
	let gameWon = null;
	for(let [index , win] of horizontalWinCombos.entries()){
		if(win.every(elem => plays.indexOf(elem) > -1)){
			gameWon = {index: index , player: player , winCombos: horizontalWinCombos , wcIndex: 0};
		}
	}

	for(let [index , win] of verticalWinCombos.entries()){
		if(win.every(elem => plays.indexOf(elem) > -1)){
			gameWon = {index: index , player: player , winCombos: verticalWinCombos , wcIndex: 1};
		}
	}

	for(let [index , win] of leftSlantWinCombos.entries()){
		if(win.every(elem => plays.indexOf(elem) > -1)){
			gameWon = {index: index , player: player , winCombos: leftSlantWinCombos , wcIndex: 2};
		}
	}

	for(let [index , win] of rightSlantWinCombos.entries()){
		if(win.every(elem => plays.indexOf(elem) > -1)){
			gameWon = {index: index , player: player , winCombos: rightSlantWinCombos , wcIndex: 3};
		}
	}

	return gameWon;
}

function winner(gameWon){
	let combos = 0;
	
	
	for( let index of gameWon.winCombos[gameWon.index]){
		cells[index].removeEventListener('click' , turnClick , false);
		cells[index].style.backgroundColor = (gameWon.player === "X") ? "#394f17" : "#5d090d"; 
	}

	if(gameWon.wcIndex == 0){
		linePattern(gameWon.winCombos , gameWon.index , gameWon.player ,  156 , 5 , 420 , 120 , 0);
		(gameWon.player == "X") ? p1HorizontalCombos.push(gameWon.index) : p2HorizontalCombos.push(gameWon.index);
	}

	if(gameWon.wcIndex == 1){
		linePattern(gameWon.winCombos , gameWon.index , gameWon.player ,5 , 156 , 444, 99 , 0);
		(gameWon.player == "X") ? p1VerticalCombos.push(gameWon.index) : p2VerticalCombos.push(gameWon.index);
	}

	if(gameWon.wcIndex == 2){
		linePattern(gameWon.winCombos , gameWon.index , gameWon.player ,218 , 5 , 390 , 173 , 45);
		(gameWon.player == "X") ? p1LeftSlantCombos.push(gameWon.index) : p2LeftSlantCombos.push(gameWon.index);
	}

	if(gameWon.wcIndex == 3){
		linePattern(gameWon.winCombos , gameWon.index , gameWon.player , 218 , 5 , 290 , 173 , -45);
		(gameWon.player == "X") ? p1RightSlantCombos.push(gameWon.index) : p2RightSlantCombos.push(gameWon.index);
	}

	

	if(gameWon.player == "X"){
		if(gameWon.wcIndex == 0){
			combos = colorCombosHorizontal(p1HorizontalCombos , gameWon.player);
		}
		if(gameWon.wcIndex == 1){
			combos = colorCombosVertical(p1VerticalCombos , gameWon.player);
		}
		if(gameWon.wcIndex == 2){
			combos = colorCombosLeftSlant(p1LeftSlantCombos , gameWon.player);
		}
		if(gameWon.wcIndex == 3){
			combos = colorCombosRightSlant(p1RightSlantCombos , gameWon.player);
		}
	}else{
		if(gameWon.wcIndex == 0){
			combos = colorCombosHorizontal(p2HorizontalCombos , gameWon.player);
		}
		if(gameWon.wcIndex == 1){
			combos = colorCombosVertical(p2VerticalCombos , gameWon.player);
		}
		if(gameWon.wcIndex == 2){
			combos = colorCombosLeftSlant(p2LeftSlantCombos , gameWon.player);
		}
		if(gameWon.wcIndex == 3){
			combos = colorCombosRightSlant(p2RightSlantCombos , gameWon.player);
		}
	}
	
	scoring(gameWon , combos);		
}
function linePattern(arrCombo , gameWonIndex , player , width , height , left , top , deg){
	var line = document.createElement('div');
	let index = arrCombo[gameWonIndex][0];

	line.style.position = "absolute";
	line.style.width = width + "px";
	line.style.height = height + "px";
	line.style.backgroundColor = (player == "X") ? "#c6e29c" : "#f48a90";
	line.style.opacity = "0.7";
	line.style.borderRadius = "15%";
	line.style.left = (cells[index].offsetLeft + left) + "px";
	line.style.top = (cells[index].offsetTop + top) + "px";
	line.style.transform = "rotate(" + deg + "deg)";

	console.log(cells[index].offsetLeft);

	document.getElementById('body').appendChild(line);
}

function colorCombosHorizontal(arr, player){
	let combos = 0;
	let twoPatterns = [];
	let firstVal_patterns = [];
	
	for(var i = 0; i < arr.length; ++i){
		for(var j = 0; j < arr.length; ++j){
			if(arr[i] + 3 == arr[j]){ // 
				twoPatterns.push(arr[i]);
				twoPatterns.push(arr[j]);
			}
		}
	}

	twoPatterns = [...new Set(twoPatterns)];
	twoPatterns.sort((a , b) => a - b);

	//console.log(twoPatterns);

	for(var i = 0; i < twoPatterns.length; ++i){
		firstVal_patterns.push(horizontalWinCombos[twoPatterns[i]][0]);
	}

	//console.log(firstVal_patterns);
	
	
	for(let [index , pattern] of horizontal_2_winCombos.entries()){
		if(pattern.every(elem => firstVal_patterns.indexOf(elem) > -1)){
			//console.log(index);
			combos++;
		}
	}

	if(player == "X"){
		p1HorizontalCombos.sort((a , b) => a - b);

		for(var i = 0; i < twoPatterns.length && combos > 0; ++i){
			for(var j = 0; j < p1HorizontalCombos.length; ++j){
				if(twoPatterns[i] == p1HorizontalCombos[j]){
					p1HorizontalCombos.splice(j , 1);
				}
			}
		}
	}else{
		p2HorizontalCombos.sort((a , b) => a - b);

		for(var i = 0; i < twoPatterns.length && combos > 0; ++i){
			for(var j = 0; j < p2HorizontalCombos.length; ++j){
				if(twoPatterns[i] == p2HorizontalCombos[j]){
					p2HorizontalCombos.splice(j , 1);
				}
			}
		}
	}

	
	//console.log(p1WinCombosIndex);
	return combos;	
}

function colorCombosVertical(arr , player){
	let combos = 0;
	let twoPatterns = [];
	let firstVal_patterns = [];
	
	for(var i = 0; i < arr.length; ++i){
		for(var j = 0; j < arr.length; ++j){
			if(arr[i] + 30 == arr[j]){ //
				twoPatterns.push(arr[i]);
				twoPatterns.push(arr[j]);
			}
		}
	}

	twoPatterns = [...new Set(twoPatterns)];
	twoPatterns.sort((a , b) => a - b);

	
	//console.log(twoPatterns);
	
	for(var i = 0; i < twoPatterns.length; ++i){
		firstVal_patterns.push(verticalWinCombos[twoPatterns[i]][0]);
	}

	//console.log(firstVal_patterns);
	
	
	for(let [index , pattern] of vertical_2_winCombos.entries()){
		if(pattern.every(elem => firstVal_patterns.indexOf(elem) > -1)){
			//console.log(index);
			combos++;
		}
	}

	if(player == "X"){
		p1VerticalCombos.sort((a , b) => a - b);

		for(var i = 0; i < twoPatterns.length && combos > 0; ++i){
			for(var j = 0; j < p1VerticalCombos.length; ++j){
				if(twoPatterns[i] == p1VerticalCombos[j]){
					p1VerticalCombos.splice(j , 1);
				}
			}
		}
	}else{
		p2VerticalCombos.sort((a , b) => a - b);

		for(var i = 0; i < twoPatterns.length && combos > 0; ++i){
			for(var j = 0; j < p2VerticalCombos.length; ++j){
				if(twoPatterns[i] == p2VerticalCombos[j]){
					p2VerticalCombos.splice(j , 1);
				}
			}
		}
	}
	
	return combos;	
}

function colorCombosLeftSlant(arr , player){
	let combos = 0;
	let twoPatterns = [];
	let firstVal_patterns = [];
	//console.log(arr);
	for(var i = 0; i < arr.length; ++i){
		for(var j = 0; j < arr.length; ++j){
			if(arr[i] + 27 == arr[j]){ //
				twoPatterns.push(arr[i]);
				twoPatterns.push(arr[j]);
			}
		}
	}

	twoPatterns = [...new Set(twoPatterns)];
	twoPatterns.sort((a , b) => a - b);

	
	//console.log(twoPatterns);
	
	
	for(var i = 0; i < twoPatterns.length; ++i){
		firstVal_patterns.push(leftSlantWinCombos[twoPatterns[i]][0]);
	}

	//console.log(firstVal_patterns);
	
	
	for(let [index , pattern] of leftSlant_2_winCombos.entries()){
		if(pattern.every(elem => firstVal_patterns.indexOf(elem) > -1)){
			//console.log(index);
			combos++;
		}
	}

	if(player == "X"){
		p1LeftSlantCombos.sort((a , b) => a - b);

		for(var i = 0; i < twoPatterns.length && combos > 0; ++i){
			for(var j = 0; j < p1LeftSlantCombos.length; ++j){
				if(twoPatterns[i] == p1LeftSlantCombos[j]){
					p1LeftSlantCombos.splice(j , 1);
				}
			}
		}
	}else{
		p2LeftSlantCombos.sort((a , b) => a - b);

		for(var i = 0; i < twoPatterns.length && combos > 0; ++i){
			for(var j = 0; j < p2LeftSlantCombos.length; ++j){
				if(twoPatterns[i] == p2LeftSlantCombos[j]){
					p2LeftSlantCombos.splice(j , 1);
				}
			}
		}
	}
	
	return combos;	
}
	
function colorCombosRightSlant(arr , player){
	let combos = 0;
	let twoPatterns = [];
	let firstVal_patterns = [];
	console.log(arr);
	for(var i = 0; i < arr.length; ++i){
		for(var j = 0; j < arr.length; ++j){
			if(arr[i] + 21 == arr[j]){ //
				twoPatterns.push(arr[i]);
				twoPatterns.push(arr[j]);
			}
		}
	}

	twoPatterns = [...new Set(twoPatterns)];
	twoPatterns.sort((a , b) => a - b);

	
	//console.log(twoPatterns);
	
	
	for(var i = 0; i < twoPatterns.length; ++i){
		firstVal_patterns.push(rightSlantWinCombos[twoPatterns[i]][0]);
	}

	//console.log(firstVal_patterns);
	
	
	for(let [index , pattern] of rightSlant_2_winCombos.entries()){
		if(pattern.every(elem => firstVal_patterns.indexOf(elem) > -1)){
			//console.log(index);
			combos++;
		}
	}

	if(player == "X"){
		p1RightSlantCombos.sort((a , b) => a - b);

		for(var i = 0; i < twoPatterns.length && combos > 0; ++i){
			for(var j = 0; j < p1RightSlantCombos.length; ++j){
				if(twoPatterns[i] == p1RightSlantCombos[j]){
					p1RightSlantCombos.splice(j , 1);
				}
			}
		}
	}else{
		p2RightSlantCombos.sort((a , b) => a - b);

		for(var i = 0; i < twoPatterns.length && combos > 0; ++i){
			for(var j = 0; j < p2RightSlantCombos.length; ++j){
				if(twoPatterns[i] == p2RightSlantCombos[j]){
					p2RightSlantCombos.splice(j , 1);
				}
			}
		}
	}
	
	return combos;	
}

function scoring(gameWon, combos){

	for(var i = 0; i < cells.length; ++i){
		cells[i].style.pointerEvents = "none";
	}
	breakVar = setInterval(breakTimer , 1000);
	breakDiv.style.visibility = "visible";
	

	switch(combos){
		case 0: points = 100;
				milliSecs = 50;
			break;
		case 1: points = 300;
				milliSecs = 20;
			break;
		case 2: points = 500;
			break;
	}

	if(gameWon.player == "X"){
		p1Fire.style.visibility = "visible";

		if(points == 100){
			p1FireRight.style.height = fire100Stats.p1Right.height;
			p1FireRight.style.top = fire100Stats.p1Right.top;
			p1FireRight.style.left = fire100Stats.p1Right.left;

			p1FireBottom.style.height = fire100Stats.p1Bottom.height;
			p1FireBottom.style.top = fire100Stats.p1Bottom.top;
			p1FireBottom.style.left = fire100Stats.p1Bottom.left;

			p1FireLeft.style.height = fire100Stats.p1Left.height;
			p1FireLeft.style.top = fire100Stats.p1Left.top;
			p1FireLeft.style.left = fire100Stats.p1Left.left;

			p1PlusPoints.style.opacity = "1";
			p1PlusPoints.textContent = "+" + points;
		}
		if(points == 300){
			p1FireRight.style.height = fire300Stats.p1Right.height;
			p1FireRight.style.top = fire300Stats.p1Right.top;
			p1FireRight.style.left = fire300Stats.p1Right.left;

			p1FireBottom.style.height = fire300Stats.p1Bottom.height;
			p1FireBottom.style.top = fire300Stats.p1Bottom.top;
			p1FireBottom.style.left = fire300Stats.p1Bottom.left;

			p1FireLeft.style.height = fire300Stats.p1Left.height;
			p1FireLeft.style.top = fire300Stats.p1Left.top;
			p1FireLeft.style.left = fire300Stats.p1Left.left;

			p1PlusPoints.style.opacity = "1";
			p1PlusPoints.textContent = "+" + points;
		}
	}
	if(gameWon.player == "O"){
		p2Fire.style.visibility = "visible";

		if(points == 100){
			p2FireRight.style.height = fire100Stats.p2Right.height;
			p2FireRight.style.top = fire100Stats.p2Right.top;
			p2FireRight.style.left = fire100Stats.p2Right.left;

			p2FireBottom.style.height = fire100Stats.p2Bottom.height;
			p2FireBottom.style.top = fire100Stats.p2Bottom.top;
			p2FireBottom.style.left = fire100Stats.p2Bottom.left;

			p2FireLeft.style.height = fire100Stats.p2Left.height;
			p2FireLeft.style.top = fire100Stats.p2Left.top;
			p2FireLeft.style.left = fire100Stats.p2Left.left;

			p2PlusPoints.style.opacity = "1";
			p2PlusPoints.textContent = "+" + points;
		}else if(points == 300){
			p2FireRight.style.height = fire300Stats.p2Right.height;
			p2FireRight.style.top = fire300Stats.p2Right.top;
			p2FireRight.style.left = fire300Stats.p2Right.left;

			p2FireBottom.style.height = fire300Stats.p2Bottom.height;
			p2FireBottom.style.top = fire300Stats.p2Bottom.top;
			p2FireBottom.style.left = fire300Stats.p2Bottom.left;

			p2FireLeft.style.height = fire300Stats.p2Left.height;
			p2FireLeft.style.top = fire300Stats.p2Left.top;
			p2FireLeft.style.left = fire300Stats.p2Left.left;


			p2PlusPoints.style.opacity = "1";
			p2PlusPoints.textContent = "+" + points;
		}
	}

	let counter = (gameWon.player == "X") ? p1Points : p2Points;
	var pointsRun = setInterval(frame , milliSecs);
	function frame(){
		if(points == 0){
			clearInterval(pointsRun);
			(gameWon.player == "X") ? p1Fire.style.visibility = "hidden" : p2Fire.style.visibility = "hidden";
			(gameWon.player == "X") ? p1PlusPoints.textContent = "+0" : p2PlusPoints.textContent = "+0";

			p1PlusPoints.style.opacity = "0.05";
			p2PlusPoints.style.opacity = "0.05";
		}else{
			counter++;
			points--;
			(gameWon.player == "X") ? p1PointsLbl.textContent = "SCORE: " + counter : p2PointsLbl.textContent = "SCORE: " + counter;
		}
	}
	(gameWon.player == "X") ? p1Points += points : p2Points += points;
}

function breakTimer(){
	breakInt--;

	breakTxt.textContent = breakInt;

	if(breakInt == 0){
		for(var i = 0; i < cells.length; ++i){
			cells[i].style.pointerEvents = "auto";
		}
		breakTxt.textContent = "GO";
	}

	if(breakInt == -1){
		breakDiv.style.visibility = "hidden";
		breakInt = 5;
		breakTxt.textContent = 5;
		clearInterval(breakVar);
	}
}

const fire300Stats = {
	p1Right : {
		height : "20%",
		top : "480px",
		left : "300px" 
	} ,
	p1Bottom : {
		height : "20%",
		top : "542px",
		left : "71px" 
	},
	p1Left : {
		height : "20%",
		top : "480px",
		left : "42px" 
	} ,

	p2Right : {
		height : "20%",
		top : "480px",
		right : "307px" 
	} ,
	p2Bottom : {
		height : "20%",
		top : "542px",
		right : "71px" 
	},
	p2Left : {
		height : "20%",
		top : "480px",
		right : "42px" 
	}
};

const fire100Stats = {
	p1Right : {
		height : "10%",
		top : "552px",
		left : "280px" 
	} ,
	p1Bottom : {
		height : "10%",
		top : "595px",
		left : "71px" 
	},
	p1Left : {
		height : "10%",
		top : "552px",
		left : "63px" 
	} ,

	p2Right : {
		height : "10%",
		top : "552px",
		right : "280px" 
	} ,
	p2Bottom : {
		height : "10%",
		top : "595px",
		right : "71px" 
	},
	p2Left : {
		height : "10%",
		top : "552px",
		right : "63px" 
	}
};