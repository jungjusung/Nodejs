/*
nodejs는 완제품이 아니다 !! 따라서 서버를 내가 직접 코드로 작성해야 한다.
하지만, nodejs자체의 문법 및 내장, 외부 모듈들을 이용하면 서버구축은 상당히 쉬워진다.
*/
// http모듈을 가져오기


var http=require("http");
var fs=require("fs");

//서버객체 생성
var server=http.createServer(function(request,response){
	//서버는 이미 W3C 정해놓은 형식에 맞춰서 클라이언트에게 응답해야 하므로 아래와 같은 코드가 작성되야 한다.
	response.writeHead(200,{"Content-Type":"text/html; charset=utf8"});
	
	//end() 메소드는 클라이언트가 받게 될 콘텐츠를 넣을 수 있다.
	//response.end("<marquee>노드js 서버 응답한 결과물</marquee>");
	console.log(request.url);
	//var data=fs.readFileSync("."+request.url,"utf8");
	var data;
	if(request.url!="/favicon.ico")
	{
		data=fs.readFileSync("."+request.url,"utf8");	
	}
	/*if(request.url=="/green.html")
	{
		//클라이언트가 green.html을 원하면
		console.log("녹색페이지를 원해?");
	}
	else if(request.url=="/yellow.html")
	{
		//클라이언트가 yellow.html을 원하면
		console.log("노란색 페이지를 원해?");
	}
	*/
	response.end(data);

});



//서버가동
server.listen(8383,function(){
	console.log("Sever is running at 8383..");
});



