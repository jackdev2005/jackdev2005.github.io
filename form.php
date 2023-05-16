<?php
$name= $_POST["nombre"];
$mail= $_POST["correo"];
$phone= $_POST["celular"];
$message= $_POST["msg"];

$header = 'From: '.$mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Mensaje enviado por: " . $name ."\r\n";
$message .= "E-mail:  " . $mail ."\r\n";
$message .= "Télefono de contacto: " . $phone ."\r\n";
$message .= "Mensaje: " . $_POST['msg'] ."\r\n";
$message .= "Enviado el: " . date('d/m/Y',time());

$para = "jacktroncos20@gmail.com";
$asunto = "Asunto del mensaje";

mail($para, $asunto, utf8_decode($message),$header);
header("Location:index.html");

?>
