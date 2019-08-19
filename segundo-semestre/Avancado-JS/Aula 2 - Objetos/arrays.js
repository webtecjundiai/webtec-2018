let example = [4, 5, 3];

// O que está dentro de [] acessa o número da lista de arrays
console.log(example[0]);

// Adiciona um elemento dentro do array
example.push(2, 9, 6);

// Elimina o último elemento dentro do array
example.pop();

// Altera o valor do índice
example[0] = 1;

// Roda todos os índices sem ser em um array
example.forEach((element) => {
    console.log(element);
    
});

// Referenciando variáveis sem alterar a mesma
let example2 = ['Lança', 19, true]
let example3 = [...example2]; // Pega os valores da example2 mas não os altera
example3.push(42);

let example4 = example2.map((element) => {
    return element;
});