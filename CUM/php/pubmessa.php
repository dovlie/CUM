<?php
	
	header("Content-type:text/html;charset=utf-8");
	$name=$_POST['name'];
	// echo $name;
	$geo=$_POST['geo'];
	$message=$_POST['message'];

	$con=mysql_connect("127.0.0.1:3307","root","sa123");
	if (!$con) {
	  die('Could not connect: ' . mysql_error());
	  } 

	mysql_select_db("Miu", $con);

	if(mysql_query("INSERT INTO map (name,geo,board) 
	VALUES ('$name','$geo','$message')")){
		echo "成功！<META HTTP-EQUIV=\"refresh\" CONTENT=\"0;url='../MisU.html'\">"; 
		// echo "111";
	}
	else{
		echo "失败！";
	}

?>