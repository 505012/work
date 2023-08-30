// 함수 문제 풀이
// 연습문제 1
// 함수를 사용해서 출력하세요
// 입력 : 10
// 출력 : 20

// function sum(num) {
//     num+=num;
//     return num;
// }
// let num = Number(prompt("숫자를 입력하세요"));
// console.log(sum(num));

// 연습문제 2
// 함수를 사용해서 출력하세요.
// 짝수이면 "even" 출력하고, 홀수이면 "odd" 출력하세요.
// 입력 : 2
// 출력 : even

// function eo(num){
//     if(num%2 === 0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// }
// let num = Number(prompt("숫자를 입력하세요"));
// eo(num);

// 함수를 이용해서 아래를 작성하세요.
// 1 ~ 10 까지의 합을 출력하세요.
// 입력 : 10
// 출력 : 55

// function sum(){
//     let hab = 0;
//     for(let i = 1; i <= 10; i++){
//         hab = hab + i;
//     }
//     return hab;
// }
// let result = sum();
// console.log(result);

// 4) 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 3
// 출력 : 1
// 최소값 구하기

// function min(num1, num2, num3){
//     console.log(Math.min(num1,num2,num3));
// }
// let num = prompt("숫자 3개 입력").split(" ");
// let a = Number(num[0]);
// let b = Number(num[1]);
// let c = Number(num[2]);
// min(a,b,c);

// 5) 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 5의 배수이면 "5의 배수이다" 출력하고,
// 아니면 "5의 배수가 아니다" 라고 출력하세요.
// 입력 : 5
// 출력 : 5의 배수이다.
// 입력값 : 5

// function five(num){
//     if(num%5 === 0){
//         console.log("5의 배수이다")
//     }else{
//         console.log("5의 배수가 아니다.")
//     }
// }
// let num = Number(prompt("숫자 입력"));
// five(num);

// 6) 함수를 이용해서 코딩하세요
// 3다지 숫자를 입력받아 합계와 평균 구하기
// 입력 : 80 , 90, 100
function sumAvg(num1, num2, num3){
    hab = num1+num2+num3;
    avg = hab/3;
    console.log("합" + hab + "\n" + "평균" + avg);
}

let num = prompt("숫자 3개 입력").split(" ");
sumAvg(Number(num[0]), Number(num[1]),Number(num[2]));
