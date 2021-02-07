<?php
$message = $_POST['message'];
$subject = $_POST['subject'];
$to = 'tianirika@gmail.com';
mail($to, $subject, $message);