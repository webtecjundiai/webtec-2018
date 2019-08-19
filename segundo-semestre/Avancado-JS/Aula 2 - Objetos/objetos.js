let pessoa = {
    firstName: 'Luís',
    lastName: 'Lança',
    address: {
        city: 'Jundiaí',
        state: 'São Paulo'
    },
    age: 19,
    animals: ['Atum', 'Batata']
};

console.log(example.firstName);

// Verifica quais são as propriedades do objeto
console.log(Object.keys.pessoa);

// Verifica quais são os valores das propriedades do objeto
console.log(Object.values.pessoa);

// Verifica se tem o valor dentro do objeto
console.log(pessoa.hasOwnProperty('Atum'));



