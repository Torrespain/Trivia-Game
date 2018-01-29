$(document).ready(function(){

var dataStructure=[
	{
		question: "Which of these animals is an amphibian: ",
		choices: ["A turtle","A frog","A snake","An iguana"],
		answer: "1",
		picture: "<img src='assets/images/frog.jpg' width='500' height='400'>",
		response:"The correct answer is: Frog"
	},
	{
		question: "What kind of fish is Nemo from the movie Finding Nemo? ",
		choices: ["A Blue Tang fish","A Moorish idol","A Clownfish","a Patrick Star"],
		answer: "2",
		picture: "<img src='assets/images/clownfish.jpg' width='550' height='400'>",
		response:"The correct answer is: Clownfish"
	},
	{
		question: "Which is the only insect that knows Kung Fu?",
		choices: ["The Praying Mantis","The Jumping Spider","The Kung Fu Panda","The Asian Giant Hornet"],
		answer: "0",
		picture: "<img src='assets/images/mantis.jpg' width='550' height='400'>",
		response:"The correct answer is: The Praying Mantis"
	},	

];

var timeLeft=15;
var timerRunning;
var wins=0;
var looses=0;
var counter=0;


function welcome(){
	$(".welcomeMessage").html("<h1>Welcome!<br>Please press me to start the game</h1>")
}

welcome();

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
		clearInterval(timerRunning);
		loose();
		result();
	}		
}

function win(){
	wins++;
	clearTimeout(timerRunning);
	timeLeft=15;
}

function loose(){
	looses++;
	clearTimeout(timerRunning);
	timeLeft=15;
}

function clearScreen(){
	$("#main").empty();

}

function dataSend(){
	//Sending the time left
	$(".timeLeft").html(timeLeft);
	//Sending the question
	$(".question").append(dataStructure[counter].question);

	//This loop is going to send the choices
	for (var i = 0; i < dataStructure[counter].choices.length; i++) {
		$(".choices").append("<p value="+i+">"+dataStructure[counter].choices[i]+"</p>");
	}
}

function result(){
	$(".result").html("<p>"+dataStructure[counter].response+"</p>");
	$(".result").append(dataStructure[counter].picture);
	$(".result").append("<p>Click on the image to continue!</p>");
	$(".question").empty();
	$(".choices").empty();
	$(".timeLeft").empty();
	clearTimeout(timerRunning);
	counter++;
}

function gameOver (){
	$(".gameOver").html("<div class='finalScore'>Your Final Score is: " + ((wins/(counter))*100)+"% </div>" )
	if(wins>looses){
		$(".gameOver").append("<div>Great Job!</div>")
	}
	if(wins<=looses){
		$(".gameOver").append("<div>Keep trying!</div>")
	}

	$(".gameOver").append("<div>Game Over</div>")
}

// On click functions:

$(".welcomeMessage").on("click",function(){
	$(".welcomeMessage").empty();
	start();
});


$(".choices").on("click","p",function(){

	if ($(this).attr("value")===dataStructure[counter].answer) {
		console.log($(this).attr("value"))
		win();
		alert("yes!")
		result()

	}
	else{
		console.log($(this).attr("value"))
		console.log(dataStructure[counter].answer)
		loose();
		alert("no!")
		result()
	}

});

$(".result").on("click", function(){
	if(counter===3){
		$(".result").empty();
		gameOver();
	}
	else{
		$(".result").empty();
		start();
	}
});





 
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
