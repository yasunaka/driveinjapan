$('#sentmail').submit(function(e){

		e.preventDefault();
		var $form = $(this);

		var name = $(':text[name="name"]').val();
		var mail = $(':text[name="mailaddress"]').val();
		var message = $('textarea').val();

		var $button = $form.find('submit')

		$("#name_error").empty();		
		$("#mail_error").empty();		
		$("#message_error").empty();		

		var result = true;

		if(name == "") {
			$("#name_error").html("<i class='fa fa-exclamation-circle'> Please enter your name.</i>");
			result = false;
		} if (mail == "") {
			$("#mail_error").html("<i class='fa fa-exclamation-circle'> Please enter your email address.</i>");
			result = false;
		} if (message == "") {
			$("#message_error").html("<i class='fa fa-exclamation-circle'> Please enter your message.</i><br>");
			result = false;
		}

		if(result == true) {
	    $.ajax({
    	  url: "//corporate.jpctrade.jp/api/api/SendMailAmazon/yushutu",
  	    type: "POST",
	      data: $form.serialize(),
  	    timeout: 10000,
    	  beforeSend: function(xhr, settings) {
   	  		$button.attr('disabled',true);
   	  	},
      	complete: function(xhr, settings) {
        	$button.attr('disabled', false);
      	},
      	success: function(xhr, setteings){
					$form[0].reset();
					alert("Message Sent");
      	},
      	error: function(xhr, settings){
        	alert("Couldn't send mail. Please resend later.")
     		}
    	});
		}
});
