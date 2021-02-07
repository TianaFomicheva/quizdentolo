<?php
$message = $_POST['message'];
$to = 'tianirika@gmail.com';
$subject = 'Вам пришла заявка';
mail($to, $subject, $message);