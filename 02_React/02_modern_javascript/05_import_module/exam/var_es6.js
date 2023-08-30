// 01_exam/var_es6.js
// todo : 연습문제 - 아래 지시대로 export 하고 다른 파일에서
// todo: import 해서 코딩을 완선 하세요
// todo: 3의 배수이면 3의 배수입니다. 출력, 아니면 3의 배수가 아닙니다.
const three = "3의 배수입니다";
const notThree = "3의 배수가 아닙니다.";
let func = (num) => {
    if (num % 3 === 0) {
      console.log(three);
    } else {
      console.log(notThree);
    }
  };
// todo: export 하세요
// 사용법 : export {변수명 , 함수명}
export {func};
