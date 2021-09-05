
// BurgerMenu
   $('.icon-menu').click(function(){
        $('.icon-menu, .menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.goto').click(function() {
		var el=$(this).attr('href').replace('#','');
		var offset=0;
	$('body,html').animate({scrollTop:$('.'+el).offset().top+offset},500, function() {});
	return false;
});

window.onload = function () {
	const headerElement = document.querySelector('.header');
	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else  {
			headerElement.classList.add('_scroll');
		}
	};
	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);
}


