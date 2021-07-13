function calculateBMI(){
  const cm = document.querySelector("#height").value;
  const kg = document.querySelector("#weight").value;

  let resultBMI = (kg / (cm * cm)).toFixed(2);
  document.getElementById("result").innerHTML = resultBMI;
} 