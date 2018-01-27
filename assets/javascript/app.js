$(document).ready(function(){


var dataStructure=[
	{
		question: "Which of this animals is an amphibian: ",
		choices: ["A turtle","A frog","A snake","An iguana"],
		answer: "1"
	},
	{
		question: "Which of this animals is an amphibian: ",
		choices: ["A turtle","A frog","A snake","An iguana"],
		answer: "1"
	},
];

var timeLeft=15;
var timerRunning;
var wins=0;
var looses=0;
var counter=0;

function start(){
	timerRunning=setInterval(crono,1000);
	dataSend();
}

function crono(){
	if (timeLeft>0) {
		timeLeft--;
		$(".timeLeft").text(timeLeft);
	}
	else {
		clearTimeout(timerRunning);
	}		
}

function win(){
	wins++;
	counter++;
}

function loose(){
	looses--;
	counter++;
}

function clearScreen(){
	$("#main").empty();

}

function dataSend(){
	//Sending the time left
	$(".timeLeft").text(timeLeft);
	//Sending the question
	$(".question").append(dataStructure[counter].question);

	//This loop is going to send the choices
	for (var i = 0; i < dataStructure[counter].choices.length; i++) {
		$(".choices").append(dataStructure[counter].choices[i]+"<br>");
	}


}

 
// 
// grab the first object
// grab the question key
// create a h2 element 
// add the text to nthe h2 element apend it to #game-wrap
	// loop choices
	// for each choice 
	// create button element 
	// add choice at choicearr[i] text to button
	// add any ids values and classes to button
	// then append button to #game-wrap
});
