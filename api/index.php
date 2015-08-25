<?php
include_once("allow-access.php");
$Services[1] = array(
	"serviceID"	=>"1", 
	"Title"		=>"Why AngularJs?", 
	"ShortDesc"	=>"HTML is great for declaring static documents...", 
	"LongDesc"	=>"HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop. HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop. HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop. HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.");

$Services[2] = array(
	"serviceID"	=>"2", 
	"Title"		=>"Alternatives", 
	"ShortDesc"	=>"Other frameworks deal with HTML’s shortcomings...", 
	"LongDesc"	=>"Other frameworks deal with HTML’s shortcomings by either abstracting away HTML, CSS, and/or JavaScript or by providing an imperative way for manipulating the DOM. Neither of these address the root problem that HTML was not designed for dynamic views. Other frameworks deal with HTML’s shortcomings by either abstracting away HTML, CSS, and/or JavaScript or by providing an imperative way for manipulating the DOM. Neither of these address the root problem that HTML was not designed for dynamic views. Other frameworks deal with HTML’s shortcomings by either abstracting away HTML, CSS, and/or JavaScript or by providing an imperative way for manipulating the DOM. Neither of these address the root problem that HTML was not designed for dynamic views. Other frameworks deal with HTML’s shortcomings by either abstracting away HTML, CSS, and/or JavaScript or by providing an imperative way for manipulating the DOM. Neither of these address the root problem that HTML was not designed for dynamic views.");

$Services[3] = array(
	"serviceID"	=>"3", 
	"Title"		=>"Extensibility", 
	"ShortDesc"	=>"AngularJS is a toolset for building the framework...", 
	"LongDesc"	=>"AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how. AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how. AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how. AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how.");

if(isset($_REQUEST['serviceID']))
{
	$serviceID = $_REQUEST['serviceID'];
	if($serviceID=='all')
		echo json_encode($Services);
	else
	{
		if(isset($Services[$serviceID]))
			echo json_encode($Services[$serviceID]);
		else
		{
			$Services = array(
			"serviceID"	=>"0", 
			"Title"		=>"Error!", 
			"ShortDesc"	=>"", 
			"LongDesc"	=>"Wrong Request! Serivce does not exist.");

			echo json_encode($Services);
		}
	}
}
?>