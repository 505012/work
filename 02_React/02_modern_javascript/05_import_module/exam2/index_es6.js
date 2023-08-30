// 02_exam/index_es5.js
// todo : 아래 지시사항대로 코딩하고, 함수를 가져와서 출력하세요
// 변수 val의 문자열 길이가 홀수이면 ending 함수를 실행하세요
// 입력 : x
// 입력 : x
// 사용법 : import 함수명 from "경로/파일명"
let val = "greetings"; //길이 : 9
import ending from "./var_es6.js";
// todo : val의 문자열 길이가 홀수 인지 판단하여 홀수 이면 ending() 실행하세요
if(val.length%2 != 0){
ending();
}else{
    console.log("짝수");
}