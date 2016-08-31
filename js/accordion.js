$(function() {
//				var display = $('.nav-toggle').css("display");
				$('.nav-toggle').click( function() {
								$('.global-nav-for-cellphone').slideToggle();
								$('.nav-toggle').slideToggle();
								$('.nav-toggle-left').slideToggle();
				});
				$('#chinese').click( function() {
								$('.lang-box').slideToggle();
				});
				$('.nav-toggle-left').click( function() {
								$('.global-nav-for-cellphone').slideToggle();
								$('.nav-toggle').slideToggle();
								$('.nav-toggle-left').slideToggle();
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
