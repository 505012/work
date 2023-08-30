// todo: 선택 태그 앞/뒤 추가
// 선택함수 li태그중 class=two
// 사용법 : document.querySelector(".선택자");
// 1) 선택한 태그
let liTag = document.querySelector(".two");
// 2) 이동할 태그
let movingTag = document.querySelector(".movingTag")

// todo : 선택한 요소(태그)의 앞에 추가 : 문자열/태그 모두 이동가능
// 사용법 : 태그.before(이동할 태그)
liTag.before(movingTag);

// todo : 선택한 요소(태그)의 뒤에 추가 : 문자열/태그 모두 이동가능
// 사용법 : 태그.after(이동할 태그)
liTag.after(movingTag);

// todo : 자바스크립트 특징 : 스크립트언어, line by line으로 실행됨(컴파일 없음)
//  line by line 으로 실행 : 1라인을 읽으면 문법 해석 -> 바로 실행됨
// 컴파일 언어 vs 스크립트 언어 속도 차이 : 컴파일 언어 빠름, 미리 분법해석함 -> 바로 실행