let productValue = Number(prompt('Enter the product value: '));

if(productValue >= 20){
    document.getElementsByClassName('result')[0].innerHTML = ` Produto aprovado, valor: $${productValue}`;
    document.getElementsByClassName('result')[0].style.color = 'green'
} else {
    document.getElementsByClassName('result')[0].innerHTML = ` Produto reprovado, valor: $${productValue}`;
    document.getElementsByClassName('result')[0].style.color = 'red'
}