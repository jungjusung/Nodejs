/*
nodejs 내장 객체 중 query 내장객체를 학습
*/


var query=require("querystring");

var result=query.parse("http://news.naver.com/main/read.nhn?mode=LPOD&mid=sec&oid=001&aid=0008548934&isYeonhapFlash=Y");

console.log(result);