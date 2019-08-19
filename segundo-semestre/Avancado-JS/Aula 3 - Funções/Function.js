// Função sem parâmetro
function somar (){

    let v1=2, 
        v2=3, 
        soma;

    soma = v1 + v2;

    console.log(soma);
}

//chama o metodo
somar();

// Função com parâmetro
function subtrair (n1,n2){

    let sub = n1 - n2;
    console.log(sub);

}

//chama o metodo e passa os valores por parametro
subtrair (5,3);

// Função com parâmetro com retorno
function multiplicar (n1,n2){

    let mult = n1*n2;

    return mult;
}

console.log(multiplicar (6,3));

// Função sem parâmetro com retorno
function dividir (){

    let v1=4, 
        v2=2, 
        div;

    div = v1/v2;

    return div;
}

//chama o metodo e passa os valores por parametro
console.log(dividir());

//Arrow Function sem parametro. obs: o return é implicito
let somar = () => 2 + 3;
console.log(somar);

//Arrow Function com parametro
let subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(5, 3));

//Nessa situação o return é explicito
let somar2 = () => { 
    return 2 + 3
};
console.log(somar2);

//Operador condicional(ternário). sem paramentro
let status = (15 >= 18) ? "adulto" : "menor de idade";

//Operador condicional(ternário). com paramentro
let simples = a => (a > 15) ? 15 : a;
console.log(simples(15));