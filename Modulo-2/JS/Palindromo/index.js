/* Solução 1
function verificaPalindromo(string){
    if(!string) return "String Inexistente" ;

    return string.split("").reverse().join("") === string
    
}
let myVar = null;

console.log(verificaPalindromo("ama"));

// Exercicio 2 - Solução 2
function verificaPalindromo2(string){
    if(!string) return "String Inexistente"

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 - i] ){
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("gabba"));


function verificaArray(array){
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++)
    {
        if(array[i] === 0){
            console.log("Você já é zero!!")
        }else if(array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0`);
            array[i] = 0;
        }
    }

    return array;
}

let array = [1,3,4,6,80,33,23,90];
console.log(verificaArray(false));
//---------------------------------------------------------------------------------------------------

const alunos = [
	{
		nome: 'João',
		nota: 6,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
    {
        nome: 'Amauri',
        nota: 10,
        turma: '2B',     
    },  

	{
		nome: 'Miguel',
		nota: 3,
		turma: '2C',
	},
];

function alunosAprovados(array, media){
    
    let aprovados = [];
    for(let i = 0; i < array.length; i++){

        const {nota, nome} = array[i];

        if(array[i].nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));
//---------------------------------------------------------------------------------------------------

   
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
};

const pessoa2 = {
    nome: 'Carla',
    idade: 26,
};

const animal = {
    nome: 'Fiona',
    idade: 5,
};

//console.log(calculaIdade.call(animal, 7)); //utilizando call
console.log(calculaIdade.apply(pessoa2, [10]));


//---------------------------------------------------------------------------------------------------
//ATIVIDADE MAPS
function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }   
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Amauri','Admin');
usuarios.set('Jorge','User');
usuarios.set('Natalia','Admin');

console.log(getAdmins(usuarios));
*/

//ATIVIDADE SETS

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]; //spread [...]
}

console.log(valoresUnicos(meuArray));


