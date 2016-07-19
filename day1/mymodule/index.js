/*
nodejs에서 개발자가 객체를 정의할 수 있는데, 특히
nodeje에서는 객체를 모듈이라고 한다.

*/

exports.getRandom=function(n){
	return parseInt(Math.random()*n);
}
//파일의 확장자를 반환해주는 메소드
exports.getExtend=function(path){
	var filename=path.substring(path.lastIndexOf("\\")+1,path.length);
	return filename.split(".")[1];
}