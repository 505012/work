// todo:클래스 리스트 조작
// 선택함수 : #content선택
let content = document.querySelector("#content");//div태그

// todo 빨간색 클래스 추가
// .red css 클래스를 div태그에 추가
// 사용법 : 태그.classList.add("클래스명");
content.classList.add("red")

// todo 빨간색 -> 하늘색 교체
// 사용방법 : 태그.content.classList.replace("원클래스","바꿀클래스");
// content.classList.add("skyblue")
content.classList.replace("red","skyblue");

// todo : 하늘색 클래스 삭제
// 사용법 : 태그..classList.remove("삭제할 클래스");
content.classList.remove("skyblue");

// todo : 클래스 있는지 확인(있으면 true, 없으면 false) : contain()
// 사용법 : 태그.classList.contains("확인할 대상클래스");
let bResult = content.classList.contains("skyblue");
// 출력
console.log("bResult",bResult);//false

// todo: 클래스가 있으면 삭제 없으면 추가
content.classList.toggle("skyblue");//추가됨