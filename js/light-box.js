$(function() {

	var arr = { '1':3, '2':3, '3':2};


	
	$('.slider-main-block').on('click', function(){
		var imgName = $(this).find('img').attr('src').match(/\d+/)[0];
		var i = 0;
		var namesArr = [];
		var mainImgContent = '<img src="img/' + imgName + '-1.jpg">';	
		$('.big-img').html(mainImgContent);
		$('.bg, .light-box').removeClass('hide');
	});

	$('.light-box .arrow.right').on('click', function() {
		var imgNameFirst = Number($('.light-box img').attr('src').match(/\d/)[0]);
		var imgName = Number($('.light-box img').attr('src').match(/-\d+/)[0].replace("-",""));
		var imgNumber = imgName + 1;
		if (imgNumber <= arr[imgName]) { 
			$('.light-box img').attr('src', 'img/' + imgNameFirst + '-' + imgNumber + '.jpg');
		}
		else {
			$('.light-box img').attr('src', 'img/' + imgNameFirst + '-' + '1' + '.jpg');
		}		
	}); 

	$('.light-box .arrow.left').on('click', function() {
		var imgNameFirst = Number($('.light-box img').attr('src').match(/\d/)[0]);		
		var imgName = Number($('.light-box img').attr('src').match(/-\d+/)[0].replace("-",""));
		var imgNumber = imgName - 1;
		if (imgNumber < 1) { 
			$('.light-box img').attr('src', 'img/' + imgNameFirst + '-' + arr[imgName] + '.jpg');
		}
		else {
			$('.light-box img').attr('src', 'img/' + imgNameFirst + '-' + imgNumber + '.jpg');
		}
	}); 


});
