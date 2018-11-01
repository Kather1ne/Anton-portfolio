<?php 

$post = (!empty($_POST)) ? true : false;
if($post) {
	$email = htmlspecialchars(trim($_POST['email']));
	$name = htmlspecialchars(trim($_POST['name']));
	$sub = "Новое письмо с сайта";
	$message = htmlspecialchars(trim($_POST['message']));
	$error = '';
	if(!$name) {$error .= 'Укажите свое имя.'."\n";}
	if(!$email) {$error .= 'Укажите электронную почту.'."\n";}
	if(!$message || strlen($message) < 1) {$error .= 'Введите сообщение.'."\n";}	
	if(!$error) {
		$address = "epedanova@gmail.com";
		$mes = "Почта: ".$email."\n\nИмя: ".$name."\n\nТема: " ."Письмо с сайта"."\n\nСообщение: ".$message."\n\n";
		$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nReply-To:$email\r\nFrom:$name <contact>");
		if($send) {echo 'OK';}
	}
	else {echo $error;}
}

?>