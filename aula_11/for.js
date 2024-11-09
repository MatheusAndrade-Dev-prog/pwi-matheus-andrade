const cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

console.log(cars[3])
let text = " ";
for (let i = 0; i < cars.length; i++) {
    text += cars[i]
    console.log(`agora foi o
        ${cars[i]} na variavel texte`)
}
console.log(text);
console.log('------------------------------------');
console.log('------------------------------------');
console.log(
    '------------------------------------'
);

cars.forEach((car, i) => {
    console.log(`O carro ${car} está na posição ${i} do array`)
})