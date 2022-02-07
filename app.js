let totalT1 = 0;
let totalT2 = 0;

function scoreT1() {
  console.log("T1 SCORE!")
  totalT1++
  document.getElementById('totalT1').innerHTML = totalT1;
}

function scoreT2() {
  console.log(" T2 SCORE!")
  totalT2++
  document.getElementById('totalT2').innerHTML = totalT2;
}

function reset() {
  document.getElementById('totalT1').innerHTML = 0;
  document.getElementById('totalT2').innerHTML = 0;
}