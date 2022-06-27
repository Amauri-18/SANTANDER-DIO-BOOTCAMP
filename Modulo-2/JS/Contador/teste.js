
/*
// Variavel e Constante

const PRECO = 2;
//var preco = 2;
var desconto = 0.2;

preco = preco - desconto;
var total = preco - descont


//FUNCÕES
function soma(a, b) {
    console.log(a + b);
    return a + b; //8
}

soma(3,5);
*/

function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} nao é par!`)
        }
    }

    console.log('Os números pares são: ', evenNums);
}

let array = [1,2,3,4,5,6,7,8,9,10];

returnEvenValues(array);



 

