// index_es6.js
// import 받을 js 파일
// import : 기능(변수/함수)를 다른 js파일에서 가져오기
// 사용법 : import {변수명,함수명...} from "js파일경로/파일명"
import { odd, even, hello } from "./var_es6.js";

// 예제 : 값이 홀수 인지 짝수 인지 판단하기
let num = 3; //기본값
// 짝수
if (num % 2 == 0) {
  console.log(even); //짝수입니다.
  hello(); //다른 js에서 정의된 함수 실행
} else {
  console.log(odd); //홀수입니다.
  hello(); //다른 js에서 정의된 함수 실행
}
