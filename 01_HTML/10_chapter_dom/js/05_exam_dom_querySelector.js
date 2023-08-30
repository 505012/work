// // 1) 연습문제
// // h1 태그 1개만 선택해서 아래와 같이 변경하세요
// // style.color = "orange"
// // style.background = "red"
// // innerHTML = "From JavaScript"
// // 힌트 : querySelector()
// // window(생략) - document - html ...(dom 트리)
// let header = document.querySelector("h1"); // h1 태그 선택

// // 디자인 조작 : h1 태그 , 속성(style)
// header.style.color = "orange";
// header.style.background = "red";
// // 문자열 조작 : h1 태그 사이의 문자열 변경(innerHTML(Header))
// header.innerHTML = "From JavaScript";

// 2) h1 태그 모두 선택해서 아래와 같이 조작하세요
// h1 태그 1개만 선택해서 아래와 같이 변경하세요
// style.color = "orange"
// style.background = "red"
// innerHTML = "From JavaScript"
// 힌트 : querySelector()

let all = document.querySelectorAll("h1");

for (let i = 0; i < all.length; i++) {
  all[i].style.color = "orange";
  all[i].style.background = "red";
  all[i].innerHTML = "From JavaScript";
}
