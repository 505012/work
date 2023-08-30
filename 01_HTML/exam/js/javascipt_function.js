//  TODO: 1615, 1620

// 1615
let num = prompt("숫자 입력").split(" ");
let a = Number(num[0]);
let b = Number(num[1]);
let sum = 0;
let hab = 0;
let arr = [];
let arr2 = [];
let arr3 = [];
let result = 0;
let count = 0;
for (a; a <= b; a++) {
  console.log("b:" + b);
  console.log("a:" + a);
  let c = a;
  for (let i = 0; c > 0; i++) {
    result = c / 10;
    arr[i] = parseInt(result);
    c = c % 10;
    console.log(arr[i]);
    if (c < 10) {
      arr.push(c);
      console.log(arr[i + 1]);
      console.log("길이 : " + arr.length);
      break;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    console.log("sum = " + sum);
    if (arr[i + 1] == null) {
      sum += a;
      console.log(sum);
      arr2[count] = sum;
      console.log("arr2 : " + arr2[count]);
      count++;
    }
    arr = [];
  }
  sum = 0;
  for (let i = 0; arr2[i] <= b; i++) {
    arr3[i] = i;
    for(let j=0;j<=b; j++){
        if(arr3[i] != arr2[j]){
            hab += arr3[i]
        }
    }
    console.log("arr22 : " + arr2[i]);
  }
}
console.log(hab);
