function sum_avg(kor, eng, math) {
  document.querySelector("#kor").innerHTML = kor;
  document.querySelector("#eng").innerHTML = eng;
  document.querySelector("#math").innerHTML = math;
  let sum = kor + eng + math;
  document.querySelector("#sum").innerHTML = sum;
  document.querySelector("#avg").innerHTML = sum / 3;
}
