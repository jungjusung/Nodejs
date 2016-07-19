/*

원격지의 브라우저들이 내컴퓨터를 접속할 수 있도록 웹서버를 구축한다!

서버 구축을 위해서는 내장모듈 중 http 모듈을 사용해야 한다.

*/


var http=require("http");
//http 모듈의 createServer() 메소드를 호출하면,
//server 객체를 반환해준다.
var server=http.createServer(function(request,response){
	//클라이언트의 브라우저에 보내게 될 요청헤더 정보 구성..
	//200 웹서버가 요청을 성공적으로 처리했다는 응답결과 코드(web표준)
	respose.writeHead(200,{"Content-Type":"text/html"});

	response.end("웹서버 구축 성공 입니다.");
});

//서버가동

server.listen(9999,function(){
	console.log("서버가 9999번 포트에서 실행중입니다.");
});
