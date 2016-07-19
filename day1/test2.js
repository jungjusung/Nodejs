/*
node JS가 자바스크립트이긴 하나 , 기존 자바스크립트에는 없는 기능들이 많다.
그 중 전역변수와 전역함수를 학습한다.

__filename : 현재 실행하고 있는 파일의 풀 경로  
__dirname : 현재 실행하고 있는 파일의 디렉토리 경로

*/


//console.log("__filename 은"+__filename);
//console.log("__dirname 은"+__dirname);
/*
1.__filename을 이용한 경로에서 파일명만 출력하시오.
2.파일명과 확장자를 분리하여 출력하시오.
*/
var str=__filename;
var last=str.length;
var start=str.lastIndexOf("\\");
var file=str.substring(start+1,last);
var sub=file.split(".");
//var s=str.lastIndexOf("\");
//console.log(s);
console.log(str.substring(start+1,last));
console.log(sub[0]);
console.log(sub[1]);