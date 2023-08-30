// todo:형제요서
// 선택함수 :li태그중 class=two인것
let liTag = document.querySelector(".two");

// todo: 사용법 : 태그.previousElementSibling
// 태그의 앞에 형제 요소 접근
let siblingPre = liTag.previousElementSibling.innerHTML;
console.log("siblingPre",siblingPre)
// 태그의 뒤에 형재 요소 접근
let silbingNext = liTag.nextElementSibling.innerHTML;
console.log("siblingNext",silbingNext)