// const form = document.querySelector("form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//     const height = parseInt(document.querySelector("#height").value);

//     const weight = parseInt(document.querySelector("#weight").value);

//     const result = document.querySelector("#result");

//   if (height === "" || height < 0 || isNaN(height)) {
//     result.innerHTML = `input valide number${height}`;
//   } else if (weight === " " || weight < 0 || isNaN(weight)) {
//     result.innerHTML = `input valide number${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);

//     result.innerHTML = `<span>${bmi}</span>`;
//   }
// });

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("result");

  if (height === "" || height < 0 || isNaN(height)) {
    height.innerHTML = `input valied number${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    weight.innerHTML = `input valied number${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
  }
});
