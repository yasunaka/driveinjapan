$('input[type="button"]').click(function(){

		var $form = $(this);

		var $name = ':text[name="name"]';
		var name = $($name).val();
		var $mail = ':text[name="mailaddress"]';
		var mail = $($mail).val();
		var $message = 'textarea';
		var message = $($message).val();

		var $button = $form.find('button')

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
  	    type: "POST",
    	  url: "//corporate.jpctrade.jp/api/api/SendMailAmazon/yushutu",
	      data: $form.serialize(),
  	    timeout: 2000,
    	  beforeSend: function(xhr, settings) {
   	  		$button.attr('disabled',true);
   	  	},
      	complete: function(xhr, settings) {
        	$button.attr('disabled', false);
      	},
      	success: function(){
        	$($name).val("");
        	$($mail).val("");
        	$($message).val("");
        	alert("Message Sent");
      	},
      	error: function(){
        	alert("Could't send mail. Please resend later.")
     		}
    	});
		}
});
