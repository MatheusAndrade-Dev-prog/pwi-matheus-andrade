// exercio 12 
let compra = 12.90;
let op = prompt("Escolha uma opcão de compra(Dinheiro,pix,Credito a vista,Credito parcelado duas vezes ou Cretido parcelado Três vezes): ");


if (op == "Dinheiro" && "Pix"); {
    total = compra - (compra * 0.15);
    console.log("O valor com o desconto de 15% é:" ,total);
}
if (op == "Cretido a Vista") {
    total = compra - (compra * 0.10);
    console.log("O valor da compra com o desconto de 10% é ", total)
}
if (op == "Credito parcelado duas vezes") {
    console.log("Preço normal sem juros");
}
if (op == "Credito parcelado três vezes") {
    total = compra * 0.10
    console.log('O valor da compra com acresimo de 10% é de', total)
}

