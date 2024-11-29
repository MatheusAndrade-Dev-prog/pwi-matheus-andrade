// exercio 13

let peso = 85;
let altura = 1.72;

let imc = peso / (altura * 2);
console.log(imc);

if (imc < 18) {
   console.log("Abaixo peso");
}
if (imc >= 18 && imc < 25) {
   console.log("peso ideal (Parabens)");
}
if (imc >= 25 && imc < 35) {
   console.log("levemente acima do peso");
}
if (imc >= 30 && imc < 40) {
   console.log("Obesidade grau II (severa) ");
}
if (imc > 40) {
   console.log("Obesidade grau III (mórbida)");
}
