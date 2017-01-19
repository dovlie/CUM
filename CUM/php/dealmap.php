<?php

	header("Content-type:text/html;charset=utf-8");
	$geo=$_GET['geo'];

	$con=mysql_connect("127.0.0.1:3307","root","sa123");
	if (!$con) {
	  die('Could not connect: ' . mysql_error());
	  } 

	mysql_select_db("Miu", $con);


	$result = mysql_query("SELECT * FROM map where geo='$geo'");

	while($row = mysql_fetch_array($result))
	  {
	  	  // echo "<br/>";
	  	  // echo $row['name'];
		  echo $row['name'] . "," . $row['board'];
		  echo "<br />";
	  }

	mysql_close($con);

	// if(mysql_query("Select *from map 
	// where geo='$geo'")){
	// 	echo "成功！"; 
	// 	// echo "111";
	// }
	// else{
	// 	echo "失败！";
	// }
?>