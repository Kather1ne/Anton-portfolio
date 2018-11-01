$(function() {

	var arr = [];


	$('.slider-main-block').on('click', function(){
		var imgName = $(this).find('img').attr('src').match(/\d+/)[0];
		var i = 0;
		var namesArr = [];
		$.ajax({
			url: 'https://kather1ne.github.io/portfolio/img/1-1.jpg',
			success: function (data) {
				console.log('data -1');
				$(data).find("a:contains(" + imgName + "-)").each(function () {
					var filename = this.href.replace(window.location.host, "").replace("https:///", "");
					namesArr[i] = filename;
					i++;
				});
				arr = namesArr;
				console.log(arr[0]);
				var mainImgContent = '<img src="img/' + arr[0] + '">';	
				$('.big-img').html(mainImgContent);
				$('.bg, .light-box').removeClass('hide');
			}     
		});

		// console.log(arr);
		// var mainImgContent = '<img src="img/' + arr[0] + '">';	
		// $('.big-img').html(mainImgContent);
		// $('.bg, .light-box').removeClass('hide');
	});

	$('.light-box .arrow.right').on('click', function() {
		var imgName = Number($('.light-box img').attr('src').match(/-\d+/)[0].replace("-",""));
		var imgNumber = imgName + 1;
		if (imgNumber <= arr.length) { 
			$('.light-box img').attr('src', 'img/' + arr[imgNumber - 1]);
		}
		else {
			$('.light-box img').attr('src', 'img/' + arr[0]);
		}		
	}); 

	$('.light-box .arrow.left').on('click', function() {
		var imgName = Number($('.light-box img').attr('src').match(/-\d+/)[0].replace("-",""));
		var imgNumber = imgName - 1;
		if (imgNumber < 1) { 
			$('.light-box img').attr('src', 'img/' + arr[arr.length - 1]);
		}
		else {
			$('.light-box img').attr('src', 'img/' + arr[imgNumber - 1]);
		}
	}); 


});
