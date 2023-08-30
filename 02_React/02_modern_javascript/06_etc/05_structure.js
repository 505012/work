// 05_structure.js
// 모던자바스크립트(ECMAScript) 신기능
// todo:1) 배열 구조분해 할당 : 가독성 증가(향상)
// 예제) 일반 코딩
// 변수명만 보고 추측이 가능하게 이름을 짓는 것이 좋음
// let arry = [1, 2]; //숫자 배열 (가독성 저하)
// console.log(arry[0],arry[1]);//1 2

// // 예제) 구조분해 할당 : 위에꺼 고침
// let [firstNum,secondNum] = [1,2]
// // firstNum = 1; secondNum = 2;
// console.log(firstNum,secondNum); // 1 2

// 연습문제 1) 배열 구조분해 할당 문제
// 아래와 같이 배열이 있습니다. 구조 분해 할당 이용해서 출력하세요
// 입력 : x
// 출력 : hello node react
// let arry = ["hello","node","react"]
// // todo : 구조분해 할당 이용 코딩
// let [hello,node,react] = arry;
// console.log(hello,node,react)

// todo: 2) 객체 구조분해할당
// todo: 객체의 속성값을 분해해서 다른 벼수에 저장됨
// let  candy ={
//     name:"캔디",
//     count:5
// }
// // 출력
// console.log(candy.name, candy.count)// 캔디 5

// // 객체 구조분해 할당
// // 객체의 속성명과 동일한 변수명을 찾아서 저장됨
// // todo : 사용법 : let {변수명, 변수명2 .....} = {송성명:값,속성명2:값....}
// let {name, count} = candy;
// console.log(name,count);

// 연습문제 2) 객체 구조분해 할당 문제
// 아래와 같이 객체가 있습니다. 구조분해 할당 이용해서 출력하세요
let dept = {
    no :1,
    dname : "Sales",
    loc : "부산"
}
let {no,dname,loc} = dept
console.log(no,dname,loc)