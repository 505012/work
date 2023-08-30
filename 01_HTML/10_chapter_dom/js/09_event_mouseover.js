// js 함수 정의
function changeText(event) {
    // event.target == 현재 클릭한 태그
    event.target.innerHTML = "클릭하셨네요";

}

// 마우스 위로 함수 : 배경색을 변경
function mouseOver(event){
    // event.target ==연재 마우스위로 올라간 태그
    event.target.style.backgroundColor ="orange";
}
// 마우스 나갔을때 함수 : 배경색을 변경(하늘색)
function mouseOut(event){
    // event.target ==연재 마우스위로 올라간 태그
    event.target.style.backgroundColor ="blue";
}
