<?php
include_once("allow-access.php");
$_POST = json_decode(file_get_contents('php://input'), true);

if(
	isset($_POST['Name']) && $_POST['Name']!='' && 
	isset($_POST['Email']) && $_POST['Email']!='' && 
	isset($_POST['Phone']) && $_POST['Phone']!='' && 
	isset($_POST['Subject']) && $_POST['Subject']!='' && 
	isset($_POST['Message']) && $_POST['Message']!='')
{
	$Return['Error']=0;
	$Return['Msg']='Thank you for contacting us.';
	echo json_encode($Return);
}
else
{
	$Return['Error']=1;
	$Return['Msg']='Please enter form details correctly.';
	echo json_encode($Return);
}
?>