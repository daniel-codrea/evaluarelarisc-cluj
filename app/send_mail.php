<?php
 
	$to = "office@evaluarelarisc-cluj.ro"; 
	$from = $_REQUEST['email']; 
	$name = $_REQUEST['name']; 
	$headers = "From: $from"; 
	$subject = "Mesaj primit de pe www.evaluarelarisc-cluj.ro"; 

	$fields = array(); 
	$fields{"name"} = "Nume:"; 
	$fields{"email"} = "Email:"; 
	$fields{"phone"} = "Telefon:"; 
	$fields{"message"} = "Mesaj:\n";

	$body = "Continutul formularului:\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s %s\n",$b,$_REQUEST[$a]); }

	$send = mail($to, $subject, $body, $headers);
 
?>