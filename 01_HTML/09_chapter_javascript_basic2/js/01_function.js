// 함수(==메소드) : js 내장함수(js 미리 만들어 놓은 함수들)
//        예) .split() , .toFixed() 등
// 함수 사용 이유(why?) : 코드 재사용(코딩 생산성 증가)
//                     , 코딩 라인이 짧아짐(코딩 효율성 증가)

// TODO: 함수 만드는 법(함수 정의)
// TODO: 1) 함수 1st 형태(패턴)
// 사용법 : (1) 함수 정의
//     function 함수명() {
//        실행문;
//     }
//     (2) 함수 사용(호출)
//     함수명(); // 함수 사용(호출)
// 예제) 안녕하세요 출력하는 함수를 정의하고 사용해 보세요
// 함수 정의 : 1번만 정의(함수명 유일)
// function hello() {
//     alert("안녕하세요");
// }
// 함수 사용(호출)
// hello();
// 코드 재사용(코딩 라인 짧아짐)
// hello();
// hello();

// 예제 1) "hello world" 출력하는 함수를 작성하고 함수를 사용(호출)하세요
// 입력 : 없음
// 출력 : hello world
// 단 함수를 정의해서 출력하세요

// 함수 정의 : 1번만 정의
// function hello() {
//     alert("hello world");
// }
// function hello2() {
//     alert("hello world2");
// }
// 함수 사용(호출), 무조건 hello world 고정됨
// 만약 hello world2 출력하고 싶으면 ?
// 기존에 동작하던 소스가 오류가 발생할 가능성이 커짐(소스 수정 지양)
// hello2();

// TODO: 2) 함수 2nd 형태(패턴), 1st 보다 효율적임
// 사용법 : (1) 함수 정의
//     function 함수명(매개변수, ...) {
//        실행문 = 실행문 + 매개변수; // 실행문에서 매개변수 활용
//     }
//     (2) 함수 사용(호출)
//    함수명(값); // 매개변수에 값을 넣으면서 사용함
// 예제 2) 매개변수를 이용해서 함수를 정의하고 "안녕하세요" 출력해 보세요
// 함수정의 (2nd 형태)
// function hello(params) {
//     alert(params); // 매개변수를 실행문에 활용, alert("안녕하세요")
// }

// 함수 사용(호출)
// hello("안녕하세요 그린컴퓨터 아카데미입니다."); // 매개변수에 값을 넣으면서 사용함(params = "안녕하세요")

// TODO: 3) 함수 3rd 형태
// 변수의 허용범위(스코프) : 항상 중괄호 안에서만 의미가 있음
// 사용법 : () 함수 정의
// function 함수명(매개변수, ....){
//  let 결과 = 실행문(매개변수)
//  return 결과;//r결고 내보내기(함수 밖으로)
// }

// 예제 3) 매개변수와 return 이 있는 함수를 정의해서 hello world출력하세요
// function hello(params) {
//   return params + ' world'; // params + "world" : 결과 내보내기 됨
// }
// 함수 사용(호출)
// let result = hello("hello");//결과가 나와서 result 변수에 저장됨
// alert(result);


// 예제 4) 어떤 수를 매개변수로 받아서 제곱을 구하는 함수를 작성하세요
// 입력 : f(3)
// 출력 : 9
// function f(num){
    // 제곱 : num*num;
    // return : 함수 밖으로 결과 내보내기 예역어
//     return Math.pow(num, 2);
// }

// let num = Number(prompt("숫자를 입력하시오"));
// num2 = f(num);
// console.log(num2);

// 예제 5) 원의 넓이 구하기 함수를 작성하세요
// 입력5 출력 78.5 단, 함수를 사용하시오

// function circle(r){
//     console.log(r*r*3.14)
// }
// let r = Number(prompt("반지름을 입력해 주세요"));
// circle(r);


// 예제 6)원의 둘레 구하기
// 원의 둘레 공식 : 반지름 * 2 * 3.14
// 입력 6, 출력 37.68
// function circle(r){
//     return (r*2*3.14);
// }
// let r = Number(prompt("반지름을 입력해 주세요"));
// let result = circle(r);
// console.log(result);

// 예제 7) 시작수 , 끝수가 주어지면 시작수~끝수까지의 합계를
//     구하는 함수를 작성하세요.
// 입력 1: 100
// 입력 2: 300
// 결과 :  40200
// function sum(num1, num2){
//     let sum = 0;
//     for(num1; num1 <= num2; num1++){
//         sum = num1 + sum;
//     }
//     return sum;
// }

// let num1 = Number(prompt("정수를 입력하시오1"));
// let num2 = Number(prompt("정수를 입력하시오2"));
// let hab = sum(num1,num2);
// console.log(hab);