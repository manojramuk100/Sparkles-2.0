$(function(){
	$(document).ready(function() {
		$btncartfab = $('body .btn-cartfab');
		$navbar = $('.navbar');
		onScroll();
		$(document).on('scroll', onScroll);
		
		function onScroll() {
			var currPos = $(window).scrollTop();
			
			if(currPos >= $navbar.offset().top) {
				$btncartfab.addClass('show');
			} else {
				$btncartfab.removeClass('show');
			}
		}
	});
}(jQuery));