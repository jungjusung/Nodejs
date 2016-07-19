/*
nodejs에서 개발자가 객체를 정의할 수 있는데, 특히
nodeje에서는 객체를 모듈이라고 한다.

*/

exports.random=function(){
	return parseInt(Math.random()*3);
}