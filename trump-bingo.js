var usedNums = new Array(76);
var terms = ["Witch Hunt", "Guiliani", "Mulvaney", "Barr", "Joe Biden", "Joe Biden", "High Crimes and Misdemeanors", "Fake News", "Ukraine", "Unprecedented", "Coverup", "Scandal", "Senate", "Whistle-Blower", "Mitch McConnell", "Resignation", "Personal Gain", "2020 Election", "Classified", "Fraud", "Constitution", "Article Two", "Inquiry", "Conviction", "Hillary", "Nixon", "Johnson", "Coverup", "James Maquire", "Zelensky", "Putin", "Republicans", "Corruption", "The House", "Two-thirds", "Nadler","Schiff", "Pelosi","Clinton", "Mike Pence", "Transcript", "Fixer", "Treason", "White House"];

function newCard() {
	//Starting loop through each square card
	for(var i=0; i < 24; i++) {  //<--always this code for loops. change in red
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newNum;
	
	var colPlace =new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	
	// prevent duplicate numbers?
	do {
		newNum =getNewNum();
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = terms[newNum];
}

function getNewNum(){
	console.log("terms length: " + terms.length);
	var ranNum = Math.floor(Math.random() * terms.length);
	return ranNum;
}


function anotherCard() {
	for(var i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
	}
	
	newCard();
}

function printWindow(){
	window.print();
}
