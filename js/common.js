//A slideshow at section of commentaries
var index = 1;
Show(index);

function Plus(n) {
	Show(index += n);
}

function Show (n) {
	var i;
	var slides = document.getElementsByClassName('comment-box');
	if (n < 1) { index = slides.length }
	if (n > slides.length) { index = 1 }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slides[index - 1].style.display = 'block';
}