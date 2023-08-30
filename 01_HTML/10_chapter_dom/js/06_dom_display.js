// 버튼을 클릭하면 팝업창이 안보이게 하기
// 1) .popup > button태그 선택해서 클릭(이벤트)
// 2) .popup 태그를 안보이게함
// 클릭 이벤트 : 90% 사용 (.addEventListener() 함수 이용 )
// 사용법document.querySelector("css선택자")
let closeBtn = document.querySelector(".popup > button")//자손 선택자
// 클릭 이벤트 작성
// 사용법 : 변수명.addEventListener("click", function(){})
// 변수명(버튼)클릭하면 funtion(){} 실행됨
// 참고) 다른 언어와 달리(자바) 함수의 매개변수로 함수가 들어올 수 있음
closeBtn.addEventListener("click",function(){
    // 클릭시 실행될 구문
    // 2) .pop태그를 안보이게함
    document.querySelector(".popup").style.display = "none" //사라짐
})