jQuery(function($) {

	$('.slider_wrapper').children().last().addClass('big');

	var _onBeforeRight = function( data ) {
		var first = $('.slider_wrapper').children().first();
		var last = $('.slider_wrapper').children().last();
			
			$(first).removeClass('small').addClass('big');
			$(last).removeClass('big').addClass('small');
		};

	var _onBeforeLeft = function( data ) {
		var first = $('.slider_wrapper').children().first();
		var last = $('.slider_wrapper').children().last();
			
			$(first).removeClass('big').addClass('small');
			$(last).removeClass('small').addClass('big');
		};

	var _onAfter = function( data ) {
		var first = $('.slider_wrapper').children().first();
		var last = $('.slider_wrapper').children().last();

			$('.slider_wrapper').children().removeClass('small').removeClass('big');
		};
	
	$('#carousel').carouFredSel({
		items: 3,
		height: 300,
		width: '100%',
		auto: false,
		scroll: {
			duration: 2000,
			// timeoutDuration: 1000,
			items: 1,
		},
		prev: {
			items: 1,
			onBefore: _onBeforeRight,
			onAfter: _onAfter,
			button: '#next'
		},
		next: {
			items: 1,
			onBefore: _onBeforeLeft,	
			onAfter: _onAfter,
			button: '#prev'
		},
	});

});