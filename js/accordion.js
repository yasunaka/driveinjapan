$(function() {
//				var display = $('.nav-toggle').css("display");
				$('.nav-toggle').click( function() {
								$('.global-nav-for-cellphone').slideToggle();
				});

});
$(function() {
				var width = $(document).width()
				var theDropDown = document.querySelector('.global-nav');
				if (width > 640 ) {
								theDropDown.classList.add("display-block");
				} else {
								theDropDown.classList.remove("display-block");
				}
});
