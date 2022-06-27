/*
function comparar(num1, num2) {    

    let soma = num1 + num2;
    console.log(`Input: ${num1}, ${num2}`);

    if (num1 == num2) {
        console.log(`Output: Os números ${num1} e ${num2} são iguais.`)
    } else {
        console.log(`Output: Os números ${num1} e ${num2} não são iguais.`)
    }

    if(soma > 10 && soma <20 ) {
        console.log(`Sua soma é ${soma}, que é maior que 10 e menor que 20.`) 
    }       
    
    if(soma > 20) {
        console.log(`Sua soma é ${soma}, que é maior que 10 e maior que 20.`) 
    }
    
    if(soma < 10 ) {
        console.log(`Sua soma é ${soma}, que é menor que 10 e menor que 20.`) 
    }
}

comparar(11, 9);
*/

function compararNumeros(num1, num2) {

    const primeiraFrase= criaPrimeiraFrase(num1, num2);
    const segundaFrase = criarSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';
    if(num1 !== num2) {
        saoIguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criarSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = 'maior';
    }

    if(compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

let num1 = 50;
let num2 = 2;

if (num1 == 0 || num2 == 0){
    return console.log('Defina dois números maiores que 0');
} else {
    console.log(compararNumeros(num1, num2));
}




