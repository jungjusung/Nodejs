/*

내장 모듈 중 OS 모듈을 사용해보기!1

*/


var os=require("os");

//cpu정보
//console.log(os.cpus());

//메모리 정보
//console.log(os.freemem()/1024/1024+"MB");

//플랫폼

console.log(os.platform());