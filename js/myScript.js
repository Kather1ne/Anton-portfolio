$(function() {

	var texts = [ "Нежнейший алмаз пустынь",
	"Спальня мечты извращенца",
	"Прост отличный стол",
	"Супер брюлик",
	"Воу, магнитола"
	];

	function increment() {
		let i = 1;
		this.val = function() {
			return i;
		}
		this.inc = function() {
			i += 1;
			if (i > 5) {
				i = 1;
			}
			return i;
		};
		this.dec = function() {
			i -= 1;
			if (i < 1) {
				i = 5;
			}
			return i;
		};
	}

	var number = new increment();	
	var shift1 = true;
	var shift2 = true;
	

	function mainImg(side, i) {
		$('.slider-main-block').prepend('<img src="img/'+ i + '.jpg">');

		var firstWidth = Number("-" + $('.slider-main-block img:nth-child(1)').width());
		var secondWidth = Number("-" + $('.slider-main-block img:nth-child(2)').width());

		var leftPos = (side == "right") ? firstWidth : '100%';

		$('.slider-main-block img:nth-child(1)').css({'left' : leftPos});

		var leftMargin = (secondWidth + Number($('.slider-main-block').width())) / 2; 
		$('.slider-main-block img:nth-child(1)').stop().animate({left: leftMargin}, 1000, function(){});

		$('.slider-count-text .text').fadeOut(500, function(){
			$('.slider-count-text .text').html(i + "/5 - " + texts[i - 1]);			
			$('.slider-count-text .text').fadeIn(500);
		});

		leftPos = (side == "right") ? '100%' : secondWidth; 

		$('.slider-main-block img:nth-child(2)').animate({left: leftPos}, 1000, function(){
			$('.slider-main-block img:nth-child(2)').remove();		
			shift1 = true;			
		});
	}

	function prevImg(side, i) {

			$('.slider-prev-block').prepend('<img src="img/'+ ((i==1)? 5 : (i - 1)) + '.jpg">');

			var firstWidth = Number("-" + $('.slider-prev-block img:nth-child(1)').width());
			var secondWidth = Number("-" + $('.slider-prev-block img:nth-child(2)').width());

			var leftPos = (side == "right") ? firstWidth : '100%'; 

			$('.slider-prev-block img:nth-child(1)').css({'left' : leftPos});
			$('.slider-prev-block img:nth-child(1)').stop().animate({left: '0px'}, 1000, function(){});

			leftPos = (side == "right") ? (-firstWidth) : secondWidth;

			$('.slider-prev-block img:nth-child(2)').stop().animate({left: leftPos}, 1000, function(){
				$('.slider-prev-block img:nth-child(2)').remove();
				shift2 = true;
			});

	}

	$('.slider .arrow.right').on('click', function() {
		
		if (shift1 && shift2) {
			var i = number.inc();
			shift1 = false;
			shift2 = false;
			
			mainImg('right', i);
			prevImg('right', i);

		}
	}); 

	$('.slider .arrow.left').on('click', function() {
		
		if (shift1 && shift2) {
			var i = number.dec();
			shift1 = false;
			shift2 = false;
			mainImg('left', i);
			prevImg('left', i);

		}
		// $('.slider-prev-block').prepend('<img src="img/'+ ((i==1)? 5 : (i - 1)) + '.jpg">');
		// var firstWidth = Number("-" + $('.slider-prev-block img:nth-child(1)').width());
		// var secondWidth = Number("-" + $('.slider-prev-block img:nth-child(2)').width());
		// $('.slider-prev-block img:nth-child(1)').css({'left' : '100%'});
		// $('.slider-prev-block img:nth-child(1)').animate({left: '0'}, 1000, function(){
		// 	$('.slider-prev-block img:nth-child(2)').remove();

		// });
		// $('.slider-prev-block img:nth-child(2)').animate({left: secondWidth}, 1000, function(){});
	}); 

	$('.contact-btn .btn').on('click', function(){
		$('.bg, #mail-form').removeClass('hide');
		$(this).css({
			'animation-fill-mode': 'none',	
			'transform': 'translateY(100%)'});				
	});

	$('.bg, .exit-sign').on('click', function(){
		$('.bg').addClass('hide');
		$('.contact-btn .btn').css({
			'opacity': '1',	
			'transform': 'translateY(0%)'});	

		if (!$('#mail-form').hasClass('hide')) {
			$('#mail-form').addClass('hide');
		}
		else {
			$('.light-box').addClass('hide');
		}
	});

});
