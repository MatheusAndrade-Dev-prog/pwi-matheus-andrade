//Execio2
let num = prompt("Digite um numero positivo ou negativo: ")
num = Number(num)


function numero() {

    if (num % 2 == 0) {
        alert("Esse numero é par")
    } else {
        alert("Esse numero é impar")
    }


    if (num < 0) {
        alert("Esse numero é negativo")
    } else {
        alert("Esse numero é positivo")
    }


}
