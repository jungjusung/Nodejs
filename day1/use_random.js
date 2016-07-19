


// 외부의 필요한 모듈을 사용하기 위해서는 require 함수안에
// 필요한 모듈명을 명시하면 된다.

var mm=require("./mymodule");

//모듈 사용해보기
//var r=mm.getRandom(5);
//console.log("5에대한 랜덤 값은 : "+r);

//console.log(mm.getExtend("test.png"));

function set()
{
	var r=mm.getRandom(5);
	console.log("5에대한 랜덤 값은 : "+r);

	setTimeout(function(){
		set();
	},500);
}
set();