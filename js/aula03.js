//OPERADORES E OPERAÇÕES NO JAVASCRIPT

let n1 = 10; //Numero inteiro
let n2 = 2; //Numero inteiro
let n3 = "2" //String texto

document.write(`N1 ${n1} <br>`);
document.write(`N2 ${n2} <br>`);
document.write(`N3 ${n3} <br>`);    

//OPERADORES ARITIMETICOS

console.log(n1 + n2); //SOMA
console.log(n1 - n2); //SUBTRAÇÃO
console.log(n1 / n2); //DIVISÃO
console.log(n1 * n2); //MULTIPLICAÇÃO
console.log(n1 % n2); //RESTO OU MODULO


//OPERADORES DE COMPARAÇÃO

console.log(n1 == n2) //IGUAL 
console.log(n1 === n2) //IDENTICO
console.log(n1 != n2) //DIFERENTE
console.log(n1 !== n2) //NÃO IDENTICO

//OPERADORES LOGICOS

let a = true;
let b = false;

console.log(a && b); //OPERADOR E AND (SE A E B SÃO VERDADEIROS)
console.log(a || b); //OPERADOR OU OR (SE A OU B SÃO VERDADEIROS)
console.log(!a); //OPERADOR NÃO NOT NEGAÇÃO SE A NÃO FOR VERDADEIRO PASSE SE FOR NÃO PASSE
console.log(!b); // SE B NÃO FOR VERDADEIRO PASSE

//OPERADORES RELACIONAIS

console.log(n1 > n2);
console.log(n1 < n2);
console.log(n1 >= n2);
console.log(n1 <= n2);