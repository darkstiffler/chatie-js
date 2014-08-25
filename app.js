$(document).ready(function(){
	
	var messagesArray = [];
	// set initial UID value at 0
	var uid = 0;

	// click function
	$('#myBtn').click(function(){
		// define variables
		var input = $('#myInp').val();
		var name = $('#myName').val();

		// append item
		$('#theList').append('<li>' + name + ' says:  ' + input + '</li>');

		// add message value to array
		console.log(input);
		messagesArray.push(input);

		// reset input field
		$('#myInp').val('');

		// incriment UID value by 1
		uid++;
		console.log('message number: ' + uid);
	})

	// log all messages
	$('#logMessages').click(function(){
		console.log(messagesArray);
	})
})


