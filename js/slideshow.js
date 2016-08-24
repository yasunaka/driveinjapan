var num = 1;
var imgs = 2;
function slideshow() {
				if(num > imgs) {
								num = 1;
				} 
				$('#top-img-sentence').empty();
				document.getElementById('top-img').src = "/images/middle-pic" + num + ".jpg";
				if(num == 1) {
					$('#top-img-sentence').html("Have your own car,<br><p style='margin-left:20px'> and drive it in Japan.</p>");
				} else if (num == 2) {
					$('#top-img-sentence').html("Direct from auction.<br><p style='margin-left:20px'> Drive it in Japan.</p>");
				} else {
					$('#top-img-sentence').html("A lot of cars,<br><p style='margin-left:20px'> and you can find your favorite.</p>");
				}
				num = num + 1;
}

$(function() {
				setInterval("slideshow()",3000);
});
