//Main structure: 
	// -Part1: Variable declaration
	// -Part2: functions
	// -Part3: on click functions

$(document).ready(function(){
//Variable declaration
var dataStructure=[ //This is the array of objects with all the information
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
var counter=0;	//This counter will be used to iterate through the dataStructure array. It will increase 

function welcome(){	//This function will start when the game is first loaded
	$(".welcomeMessage").html("<h1>Welcome!<br>Please press me to start the game</h1>")
}
welcome();

function start(){	//This function will start the interval for the time left and activate the data send
	timerRunning=setInterval(crono,1000);
	dataSend();
}

function crono(){		//Function for the 15s that the player has to answer
	if (timeLeft>0) {
		timeLeft--;
		$(".timeLeft").text("Time remaining: "+timeLeft+" seconds");
	}
	else {
		clearInterval(timerRunning);
		loose();
		result();
		setTimeout(fourSeconds, 1000*4); 
	}		
}

function win(){		//Function for correct answers
	wins++;
	clearInterval(timerRunning);
	timeLeft=15;
}

function loose(){		//Function for incorrect answers
	looses++;
	clearInterval(timerRunning);
	timeLeft=15;
}

function dataSend(){	//This function will send all the info bellow:
	//Sending the time left
	$(".timeLeft").html("Time remaining: "+timeLeft+" seconds");
	//Sending the question
	$(".question").append(dataStructure[counter].question);
	//This loop is going to send the choices
	for (var i = 0; i < dataStructure[counter].choices.length; i++) {
		$(".choices").append("<p class='button' value="+i+">"+dataStructure[counter].choices[i]+"</p>");
	}
}

function result(){	//This function will send the result of the question. It also gives the user the option of waiting 5 seconds for the next screen or click to continue
	$(".result").html("<p class='answer'>"+dataStructure[counter].response+"</p>");	//The function also clears the divs that were previously used
	$(".result").append(dataStructure[counter].picture);
	$(".result").append("<p>Please, wait 4 seconds</p>");
	$(".question").empty();
	$(".choices").empty();
	$(".timeLeft").empty();
	clearInterval(timerRunning);
	counter++;
}

function fourSeconds(){		//This function waits 4 seconds between the results screen and the next round
	if (counter===dataStructure.length) {	//If the counter is = to the object lenght it calls the game over function
		$(".result").empty();
		clearInterval(timerRunning);
		gameOver();		
	}
	else{								//If not it continues to the next screen calling the start function
		$(".result").empty();
		start();
	}
}

function gameOver (){	//This function compares the wins and looses and displays the results
	$(".gameOver").append("<div>Game Over</div>")
	$(".gameOver").append("<div class='finalScore'>Your Final Score is: " + (Math.ceil((wins/(counter))*100))+"% </div>" )
	if(wins>looses){
		$(".gameOver").append("<div>Great Job!</div>")
	}
	if(wins<=looses){
		$(".gameOver").append("<div>Keep trying!</div>")
	}
}

// On click functions:
$(".welcomeMessage").on("click",function(){
	$(".welcomeMessage").empty();
	start();
});

$(".choices").on("click","p",function(){ //Once pressed, it compares the appended value to the answer from the array
	if ($(this).attr("value")===dataStructure[counter].answer) {
		console.log($(this).attr("value"))
		win();
		result()
		setTimeout(fourSeconds, 1000*4); //It also starts the 4 seconds counter to go to the next round
	}
	else{
		console.log($(this).attr("value"))
		console.log(dataStructure[counter].answer)
		loose();
		result()
		setTimeout(fourSeconds, 1000*4);
	}
});

});
