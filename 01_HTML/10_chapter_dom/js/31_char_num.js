// 예제 : 텍스트에어리어 태그에 입력된 글자수를 출력하는 예제


// 텍스트에어리어 : 게시판 등에 많이 사용
// 선택 함수 : class = textarea 선택
let textarea = document.querySelector(".textarea")
// 입력된 문자수를 출력할 위치 : p태그 안에 span태그(.string_num에 출력
let string_num = document.querySelector(".string_num");

// 키입력(키를 떼었을때) : keyup (bs keydown 등)
textarea.addEventListener("keyup",function(){
    // 글자수 체크 코딩
    // input 태그의 값(value) == textarea 태그의 값(value)
    let inputText = textarea.value;//현재 입력된 값(문자열)
    // 문자열 길이 = 문자열.length
    string_num.innerHTML = inputText.length;//글자수가 span 태그 출력됨
})