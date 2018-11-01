$(function($) {

	$("#mail-form").submit(function() {
		var str = $("#mail-form").serialize();
		$.ajax({
			type: "POST",
			url: "js/post-mail.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					$("#note").removeClass("error");
					result = '<div class="ok">Сообщение успешно отправлено</div>';
				}
				else {
					result = msg;
					$("#note").addClass("error");
				}
				
				$('#note').html(result);
			}
		});
		return false;	
	});
});

