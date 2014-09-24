$(document).ready(function(){
	var canineQuiz = [{
		question: "From which species of wild animal are dogs derived?",
		choices: ["Boars", "Bears", "Wolves", "Aliens"],
		question_number: 1,
		correct: 2,
		response: "All household dogs are descended from wolves"
	},
	{
		question: "Which family of dogs do I belong to?",
		choices: ["Gundog Group", "Hound Group", "Terrier Group", "Working Group"],
		question_number: 2,
		correct: 2,
		response: "The Jack Russel is a member of the Terrier Group"
	},
	{
		question: "Which family of dogs do I belong to?",
		choices: ["Gundog Group", "Hound Group", "Terrier Group", "Working Group"],
		question_number: 3,
		correct: 0,
		response: "The Labrador Retriever is a member of the Gundog Group"
	},
	{
		question: "Which family of dogs do I belong to?",
		choices: ["Gundog Group", "Hound Group", "Terrier Group", "Working Group"],
		question_number: 4,
		correct: 1,
		response: "The Blue Tick Coonhound originates in the southern United States"
	},
	{
		question: "What's the best kind of dog?",
		choices: ["A well-behaved one", "A well-loved one", "A tired one", "All of the above"],
		question_number: 5,
		correct: 3,
		response: "Definitely all of the above!  Have you said hi to your doggy today?  Thanks for playing the canine quiz!"
	}]
	
	var numberCorrect = 0;
	var currentQuestion = 0;
	var imgArray = new Array();
	imgArray[0] = new Image();
	imgArray[0].src = 'img/history.jpg';

	imgArray[1] = new Image();
	imgArray[1].src = 'img/jackrussell.jpg';

	imgArray[2] = new Image();
	imgArray[2].src = 'img/lab.jpg';

	imgArray[3] = new Image();
	imgArray[3].src = 'img/bluetick.jpg';

	imgArray[4] = new Image();
	imgArray[4].src = 'img/naptime.jpg';

	$("#start").on("click", function(event) {
		currentQuestion = 0;
		numberCorrect = 0;
		$("#question_count").html('This is question <span id="question_num">1</span> out of 5');
		$("#num_correct").html("0");
		event.preventDefault();
		// Show quiz panels
		$("#quiz_div").css("display", "inline-block");
		$("#num_correct_count").css("display", "inline-block");
		$("#question_count").css("display", "inline-block");
		var newChoices = '<div class="choice_area"><input type="radio" name="choice" class="choice" value="0">'+canineQuiz[currentQuestion].choices[0]+'</br>'+'<input type="radio" name="choice" class="choice" value="0">'+canineQuiz[currentQuestion].choices[1]+'</br>'+'<input type="radio" name="choice" class="choice" value="2">'+canineQuiz[currentQuestion].choices[2]+'</br>'+'<input type="radio" name="choice" class="choice" value="3">'+canineQuiz[currentQuestion].choices[3]+'</br></div>';
		var newPic = imgArray[currentQuestion];
		$("#question_pic_wrap").html("");
		$("#question_pic_wrap").html(newPic);
		$(".choice_area").remove();
		$("#quiz_div").prepend(newChoices);
		$("#question_text").html(canineQuiz[currentQuestion].question);
	});
		


	$("#submit").on("click", function(event){
		event.preventDefault();
		var prevAnswer = $('input:checked').val();
		if (prevAnswer == canineQuiz[currentQuestion].correct) {
			numberCorrect++;
			$("#num_correct").html(numberCorrect);
		};
		currentQuestion++;
		$("#question_num").html(currentQuestion+1);
		nextQuestion();
	});
	
	var nextQuestion = function() {
		if (currentQuestion < 5) {
			$("#question_text").html(canineQuiz[currentQuestion].question);
			var newChoices = '<div class="choice_area"><input type="radio" name="choice" class="choice" value="0">'+canineQuiz[currentQuestion].choices[0]+'</br>'+'<input type="radio" name="choice" class="choice" value="1">'+canineQuiz[currentQuestion].choices[1]+'</br>'+'<input type="radio" name="choice" class="choice" value="2">'+canineQuiz[currentQuestion].choices[2]+'</br>'+'<input type="radio" name="choice" class="choice" value="3">'+canineQuiz[currentQuestion].choices[3]+'</br></div>';
			var newPic = imgArray[currentQuestion];
			$("#question_pic_wrap").html("");
			$("#question_pic_wrap").html(newPic);
			$(".choice_area").remove();
			$("#quiz_div").prepend(newChoices);
		}
		else {
			$("#question_text").html("Thank you for playing the Canine Quiz!")
			$(".choice_area").remove();
			$("#question_count").html("");
			$("#question_count").html('<div id="end">You have reached the end of the quiz</div>');
		};
	}
});