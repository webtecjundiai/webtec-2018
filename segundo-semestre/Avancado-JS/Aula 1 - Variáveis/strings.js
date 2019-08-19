let fruta = "Abacaxi";
let fruta2 = "Banana";

// Quando inserimos o atributo typeof, descobrimos qual o tipo da variável
console.log(typeof fruta);

// o sinal de + concatena as coisas 
console.log(fruta + fruta2);

// Concatena strings (string interpolation)
console.log(`${fruta} ${fruta2}`);

// O atributo length exibi o comprimento de algo
console.log(fruta.length);

// O método .trim() elimina espaços em branco 
console.log(`      ${fruta}    ${fruta2}`.trim());

// Deixa tudo em CAPSLOCK ou em minúsculo toLowerCase()
console.log(`${fruta} ${fruta2}`.toUpperCase());

// Separa as strings em arrays, porém separa por palavras
console.log(`${fruta} ${fruta2}`.split(' '));

// Separa as strings em arrays, porém separa por letras
console.log(`${fruta} ${fruta2}`.split(''));

