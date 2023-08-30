// document.querySelector("css선택자"); : js선택 함수
// css선택자 : 기본선택자(전체(*), id, class 등)

// id 선택자로(#output) html 태그 선택
// 선택함수(querySelector() return 값 : html 태그 나옴)
// #output : div 태그 => output 변수에 저장됨

// innerHTML : css선택자를 이용해서 그 위치에 글자를 넣는 속성
let output = document.querySelector("#output");
output.innerHTML = "hello world";
output.style.fontSize = "50px"
output.style.textAlign = "center"