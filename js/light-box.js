$(function() {

	var arr = { '1':3, '2':3, '3':2};


	$('.slider-main-block').on('click', function(){
		var imgName = $(this).find('img').attr('src').match(/\d+/)[0];
		var i = 0;
		var namesArr = [];
<<<<<<< HEAD
		var mainImgContent = '<img src="img/' + imgName + '-1.jpg">';	
		$('.big-img').html(mainImgContent);
		$('.bg, .light-box').removeClass('hide');
=======
		$(".thumbnails").load("img/ a[href$='.jpg']", function() {
			
			$('.thumbnails').find("a:contains(" + imgName + "-)").each(function () {
				var filename = this.href.replace(window.location.host, "").replace("http:///", "");
				namesArr[i] = filename;
				i++;
			});
			arr = namesArr;
			console.log(arr[0]);
			var mainImgContent = '<img src="img/' + arr[0] + '">';	
			$('.big-img').html(mainImgContent);
			$('.bg, .light-box').removeClass('hide');
		});
			 

		// console.log(arr);
		// var mainImgContent = '<img src="img/' + arr[0] + '">';	
		// $('.big-img').html(mainImgContent);
		// $('.bg, .light-box').removeClass('hide');
>>>>>>> 0d25c25870dbf06d6f616485785d43a47729b342
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
