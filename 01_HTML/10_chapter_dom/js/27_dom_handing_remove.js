// todo 선택한 자기자신 삭제
// 선택함수 class가 one인것
// 사용법 : document.querySelector("css선택자");
let liOne = document.querySelector(".one");
liOne.remove();

// todo 부모의 자식중 1개를 삭제
// 부모 선택
let ulTag = document.querySelector("ul");
let removeTarget = document.querySelector(".removeTarget");
ulTag.removeChild(removeTarget)