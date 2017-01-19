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
        var latlng = position.coords.latitude +","+position.coords.longitude;
      
		// document.getElementById("baidu_street1").value=latlng;
		alert(latlng);
        // alert("111000");
        alert(latlng);

        //解析坐标成地址--------------------------------------------------------------------
         $.ajax({
			  type:"GET", //一定要引号！！
			  dataType:"jsonp",
			  url:"http://api.map.baidu.com/geocoder/v2/?ak=5c8n91nN6cHwRYOWn4v7ZIbu8ZAkQVk5&callback=renderReverse&location="+latlng+"&output=json&pois=0",
			  beforeSend: function(){
			   $("#baidu_street1").html('正在定位...');
			   },
			  success:function(json){
			   if(json.status=='0'){
			    $("#baidu_street1").html(json.result.formatted_address);
			    }
			   },
			  error:function(XMLHttpRequest,textStatus,errorThrown){
			    $("#baidu_street1").html("获取地址失败");
			   }
			  });
         //-------------------------------------------------------------------------------
         //存入数据库坐标范围扩大---------------------------------------------------------
            var lat0=position.coords.latitude+"";
			var lat1=lat0.split(".")[0];
			var lat2=lat0.split(".")[1];
			lat3=lat2.substr(0,3);
			lat=lat1+"."+lat3;
			alert(lat);
			var lon0=position.coords.longitude+"";
			var lon1=lon0.split(".")[0];
			var lon2=lon0.split(".")[1];
			lon3=lon2.substr(0,3);
			lon=lon1+"."+lon3;
			alert(lon);
			latlng1=lat+","+lon;//22.815,108.327
			alert("坐标："+latlng1);
		//---------------------------------------------------------------------------------
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
url=url+"?geo="+latlng1
alert(url);
xmlHttp.onreadystatechange=stateChanged 
xmlHttp.open("GET",url,true)
xmlHttp.send(null)
} 

function stateChanged() 
{ 
if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
 { 
 document.getElementById("bc").innerHTML=xmlHttp.responseText 
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

    }
    
function error(error){           //强调code有3个返回值，分别代表不同的错误

	var err = error.code;

	switch(err){

		case 1:alert("用户拒绝了位置服务");break;

		case 2:alert("获取不到位置信息");break;

		case 3:alert("获取信息超时");break;

		}

	}

Location(); //记得在最后执行一下调用就好了
    
    
	// 百度地图API功能
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(116.331398,39.897445);
	map.centerAndZoom(point,32);

	function myFun(result){
		var cityName = result.name;
		map.setCenter(cityName);
		alert("当前定位城市:"+cityName);
	}
	var myCity = new BMap.LocalCity();
	myCity.get(myFun);

function pubsubmit(){

	var baidu_street1=document.getElementById("baidu_street1").value;
	var message=document.getElementById("message").value;
	alert(baidu_street1);alert(message);
	var pussubmit=document.getElementById("pussubmit");
	if(baidu_street1!=""&&message!=""){
		pussubmit.submit();
	}
}
