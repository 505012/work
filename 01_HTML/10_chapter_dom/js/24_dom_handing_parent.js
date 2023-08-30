// todo : 부모 요소 접근
// 선택함수 : le 태그 중 class=two 인 것
let liTag = document.querySelector(".two");

// todo : 사용법 : 태그.parentElement;//태그의 부모태그
let parent = liTag.parentElement;

console.log("parent",parent);