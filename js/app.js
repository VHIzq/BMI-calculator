function calculateBMI(){
  const cm = document.querySelector("#height").value;
  const kg = document.querySelector("#weight").value;

  let resultBMI = (kg / (cm * cm)).toFixed(2);
  document.getElementById("result").innerHTML = resultBMI;
  if(resultBMI > 26.0){
    alert("Please take action and get better your feeding style & do exercise!");
  }
} 