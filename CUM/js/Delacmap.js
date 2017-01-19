alert("11001");

function Location(){//不得不提，我就因为一开始给这个函数起名location,用到了关键字，怎么都不出结果，调了一晚上没找出原因

		if(navigator.geolocation)   //检测当前设备是否支持H5Geolocation API

			{

				navigator.geolocation.getCurrentPosition(showPosition,error); 

				  //检测结果存在地理定位对象的话，navigator.geolocation调用将返回该对象

				 //第一个参数获取当前地理信息成功是执行的回调函数，带3个参数，

				 //第一个参数是必写的，表示获取当前地理位置信息成功时所执行的回调函数，该函数参数position也是必须。

				 //第二个参数是获取地理位置信息失败的回调函数，该函数的参数error也是必写的，第三个参数是一些可选属性列表（2、3个参数可省略）

				}                                                       

		else{

				alert("该浏览器不支持获取地理位置");

			}

	}




function showPosition(position){
	
	var lat0=position.coords.latitude+"";
	var lat1=lat0.split(".")[0];
	var lat2=lat0.split(".")[1];
	lat3=lat2.substr(0,4);
	lat=lat1+"."+lat3;
	// alert(lat);
	var lon0=position.coords.longitude+"";
	var lon1=lon0.split(".")[0];
	var lon2=lon0.split(".")[1];
	lon3=lon2.substr(0,4);
	lon=lon1+"."+lon3;
	// alert(lon);
	latlng=lat+","+lon;
	document.getElementById("baidu_street1").value=latlng;
	alert(latlng);
	//显示地图
		var lonview=position.coords.longitude;
	 	var latview=position.coords.latitude;
	    var map = new AMap.Map('container', {
	        resizeEnable: true,  //启用地图
	        zoom:64,       //放大倍数
	        center: [lonview,latview]    //中心点的经纬度
	        
	    });
					var xmlHttp

					function showHint()
					{
					
					xmlHttp=GetXmlHttpObject()
					if (xmlHttp==null)
					  {
					  alert ("Browser does not support HTTP Request")
					  return
					  } 
					var url="php/dealmap.php"
					url=url+"?geo="+latlng
					// alert(url);
					xmlHttp.onreadystatechange=stateChanged 
					xmlHttp.open("GET",url,true)
					xmlHttp.send(null)
					} 

					function stateChanged() 
					{ 
					if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
					 { 
					 	alert("1");
					 	var acboard=xmlHttp.responseText;
					 	alert(acboard);
					 	var onepeople=acboard.split("<br />");
					 	var num=onepeople.length;
					 	for(var x=0;x<num;x++){
					 		if(x==0){
						 			var people=acboard.split("<br />")[x];
								 	var acname=people.split(",")[0];
								 	var acmessage=people.split(",")[1];
								 	document.cookie="onePeopleNameCokie="+acname;
								 	// document.cookie="onePeopleMessageCokie="+acmessage;
								 	// document.getElementById("row").innerHTML ="111"
								 	document.getElementById("messName").innerHTML=acname;
								 	document.getElementById("messContent").innerHTML=acmessage;
								 }
							else if(x==1){

							}
							else if(x==2){

							}
							else{

							}
							 }
							}
							}
							}
					 } 
					}

					function GetXmlHttpObject()
					{
					var xmlHttp=null;
					try
					 {
					 // Firefox, Opera 8.0+, Safari
					 xmlHttp=new XMLHttpRequest();
					 }
					catch (e)
					 {
					 // Internet Explorer
					 try
					  {
					  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
					  }
					 catch (e)
					  {
					  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
					  }
					 }
					return xmlHttp;
					}
showHint();

	document.getElementById("coordinates").innerHTML=latlng;


	

	var url="http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location="+latlng+"&output=json&pois=0";

	$.ajax({

		type:"GET",

		dataType:"jsonp",

		url:url,

		beforeSend: function(){

			

			document.getElementById("baidu_street").innerHTML="正在定位...";

			},

		success:function(json){

			if(json.status=='0'){

							document.getElementById("baidu_street").innerHTML=json.result.formatted_address;}

							//将JSON返回的地址信息解析赋给id为google_street的p标签

							//formatted_address是一个字符串，包含此位置的人类可读地址。通常该地址相当于“邮政地址”，有时会因不同国家/地区而存在差异。

			},

		error:function(XMLHttpRequest,textStatus, errorThrown){

			//$("#baidu_geo").html(latlon+"地址位置获取失败"); 

			 document.getElementById("baidu_street").innerHTML=

			 "请求对象XMLHttpRequest: "+XMLHttpRequest+"<br/>"+"错误类型textStatus: "+textStatus+"<br/>"+"异常对象errorThrown: "+errorThrown;

			//三个参数：XMLHttpRequest 对象、错误信息、（可选）捕获的异常对象。

			//如果发生了错误，错误信息（第二个参数）除了得到 null 之外，

			//还可能是 "timeout", "error", "notmodified" 和 "parsererror".这是一个 Ajax 事件。

		}

		});

		

		

		

	}

	

function error(error){           //强调code有3个返回值，分别代表不同的错误

	var err = error.code;

	switch(err){

		case 1:alert("用户拒绝了位置服务");

		case 2:alert("获取不到位置信息");

		case 3:alert("获取信息超时");

		}

	}

Location(); //记得在最后执行一下调用就好了

function pubsubmit(){

	var baidu_street1=document.getElementById("baidu_street1").value;
	var message=document.getElementById("message").value;
	alert(baidu_street1);alert(message);
	var pussubmit=document.getElementById("pussubmit");
	if(baidu_street1!=""&&message!=""){
		pussubmit.submit();
	}
}
