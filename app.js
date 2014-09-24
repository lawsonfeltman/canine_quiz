$(document).ready(function(){
	var canineQuiz = [{
		question: "From which wild species of animal are dogs derived?",
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

	$("#start").on("click", function() {
		$("#quiz_div").css("display", "inline-block");
		$("#num_correct_count").css("display", "inline-block");
		$("#question_count").css("display", "inline-block");
		for (i = 0; i <= canineQuiz.length; i++) {
			$("#question_text").html(canineQuiz[i].question);
			$("#choice1").htmlString.replace('y', canineQuiz[i].choices[0])
			// $("#choice1").html(canineQuiz[i].choices[0]);
			// $("#choice2").html(canineQuiz[i].choices[1]);
			// $("#choice3").html(canineQuiz[i].choices[2]);
			// $("#choice4").html(canineQuiz[i].choices[3]);
			
		};
	});
});