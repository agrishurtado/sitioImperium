<?php
if(isset($_POST['enviar'])){
    if (!empty($_POST['name'] && !empty($_POST['email'] && !empty($_POST['asunto'] && !empty($_POST['phone'] && !empty($_POST['message'])){
        $name = $_POST['name'];
        $asunto = $_POST['asunto'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        $header = "From: noreply@example.com" . "\r\n";
        $header. = "Reply-To: noreply@example.com" ."\r\n";
        $mail = @mail($email,$asunto,$message,$header);
        if($email){
            echo "<h4> ¡Mail Enviado Exitosamente! </h4>";
        }
    }
}