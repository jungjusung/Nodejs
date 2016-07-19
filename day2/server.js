/*
http 내장 모듈만으로는 완전한 웹서버를 구축하기엔 너무나 부족하다.
따라서 express모듈을 사용해보자!!
express모듈이란? 웹서버 구축에 필요한 기능들을 위해 http모듈에 추가시켜놓은 모듈.
추가시켜놓은 외부 모듈..(http의 업그레이드 모듈 but 2모듈은 같이 사용한다..)
*/

//ejs모듈을 이용하면, html문서 내에서 반복문 등의 기초적인 자바스크립트프로그래밍 
//문법이 적용될 수 있다.

var http=require("http"); // 내부
var express=require("express"); // 외부
var fs=require("fs"); // 내부 
var mysql=require("mysql"); // 외부
//express 모듈로 부터 application 객체를 반환 생성하자!!
var bodyParser=require("body-parser"); // 외부
var ejs=require("ejs"); // 외부




var app=express();
app.use(bodyParser.json()); // json 지원
app.use(bodyParser.urlencoded({extended:true}));
//form태그로 전송될 경우 이 속성 지정해야 함.



//mysql 서버에 접속
var client=mysql.createConnection({
	"url":"localhost",
	"user":"root",
	"password":""
});

client.query("use iot"); // 사용할 db선택!
//application 객체란? 웹서버 역할을 담당할 객체..

//게시물 목록 보기 요청 처리
app.route("/list").get(function(request,response){
	//list.html 페이지를 읽어들인 결과를 page변수에 담음
	var page=fs.readFileSync("./list.html","utf8");
	
	//응답전에 이미 데이터베이스 레코드들을 가져왔어야 한다..
	client.query("select * from student",function(error,records,field){
		if(!error){
			response.writeHead(200,{"Content-Type":"text/html; charset=utf8"});
			response.end(ejs.render(page,{dataList:records}));
		}else{
			console.log("망했어요");
		}
	});
});


//app.use()메서드 안에는 미들웨어라고 불리는 각종 express의 지원함수들이 
//자리잡을 수 있다..

//라우팅 미들웨어를 사용해본다.  라우트 :  route란 방향을 잡는 것을 말하고, 
//nodejs에서는 원하는 페이지를 나오게 처리해준다.

//app.use(app.router);//라우팅시 함수() 표시 x

//클라이언트가 get방식으로 요청을 시도하면 동작하게 될 메서드!
app.route("/regist_form").get(function(request,response){
		var data=fs.readFileSync("./regist_form.html","utf8");
		response.writeHead(200,{"Content-Type":"text/html; charset=utf8"});
		response.end(data);
});
//클라이언트가 등록을 원하면 post 방식으로 요청할 경우
//서버에서는 post()메서드로 받아야 한다.
app.route("/regist").post(function(request,response){
	//클라이언트가 보낸 데이터를 받고 
	// express 모듈 사용시 request가 업그레이드가 되었기 때문에
	//param() 메소드를 사용할 수 있다.
	//console.log(request.body);
	var data=request.body;
	
	var id=data.id;
	var pwd=data.pwd;
	var name=data.name;

	console.log("id는 "+id+" pwd는 "+pwd+" name은 "+name);
	//받은 데이터를 데이터베이스에 넣는다!
	//쿼리문 수행후 두번째 인수인 익명함수가 작동한다.. 개발자는 여기서
	//등록 성공 or 실패 여부를 확인할 수 있다.
	client.query("insert into student(id,pwd,name) values('"+id+"','"+pwd+"','"+name+"')",function(error,records,field){
		if(error){
			console.log("등록실패입니다.");
		}else{
			console.log("등록성공힙니다.");


			//리스트 페이지에 대한 요청!!
			//클라이언트의 브라우저로 하여금, 지정한 url로 요청을 다시 시도하라는 명령
			response.redirect("/list");
		}
	});
});

var server=http.createServer(app);
server.listen(8383,function(){
	console.log("Server is running at 8383");
});







