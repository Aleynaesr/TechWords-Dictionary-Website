
$(document).ready(function(){

      //Check Answers button
	  $('#quiz-submit').on('click', function(){

	  //alert
	  var score = 0;
	  
	  // Loop through each question
	  $('.question').each(function(){

	  // hide quiz msg
	  $('.quiz-msg', this).remove();
		
	  // find correct option with data-correct
	  var correct = $(this).find(':checked[data-correct]').length;
		
		// check if correct or not
		if( correct == 1){
		  // correct!
		  score++;    // add 1 point to the score
		  var msgHTML = '<div class="quiz-msg correct">Nice job! You answered correctly.!</div>';
		  $(this).append(msgHTML);
		}
		else{
		  // incorrect!
		  //alert("incorrect!");
		  var msgHTML = '<div class="quiz-msg incorrect">Incorrect! Try Again.!</div>';
		  $(this).append(msgHTML);
		}
		
	  });
	  
	  // Display Output score
	  $('#score').text(score);
	  	  
	});
	
  }); // end document ready