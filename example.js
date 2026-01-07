let firstname = "John"; // Variavel mutavel
let lastname = "Doe";

console.log(firstname);
console.log(lastname);

let age = 11;
console.log(age);

age = 54;

console.log(age);

const pi = 3.14; // Variavel imutavel e se tentar mudar da erro

// pi = 11; (vai dar erro)

console.log(pi);

console.log((4+6+9) / 77);

let a = 10
console.log(a);
a = 11;
console.log(a);
let b = 7 * a
console.log(b)

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);

const primeiroNome = "Alan";
const segundoNome = "Inhuma";
const anonasc = 2004;
const anoatual = 2026;
const niver = anoatual - anonasc;

const agradecimento = "Olá, meu nome é " + primeiroNome + " " + segundoNome + " e eu tenho " + niver + " " + "anos de idade";

console.log(agradecimento);

const fullname = primeiroNome + " " + segundoNome;

const agradecimento2 = "Olá, meu nome é " + fullname + " e eu tenho " + niver + " anos de idade";

console.log(agradecimento2);

function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

const message = favoriteAnimal("Cabra");
const message2 = favoriteAnimal("Cavalo");
console.log(message2);
console.log(message);
console.log(favoriteAnimal('Goat'))

function add7(num) {
    return num + 7
}
console.log(add7(10));

function multiply(num1, num2) {
    return num1 * num2
}
console.log(multiply(3, 2));

function capitalize(letras) {
    return letras.charAt(0).toUpperCase() + letras.slice(1); // charAt vai pegar a letra do indice q eu quiser, esta 0 ent a primeira
                                                            // O toUpperCase vai transformar em maiuscula a letra escolhida no indice.
                                                            // slice extrai as letras a partir do indice q vc seleciona
}
console.log(capitalize("javascript"));

function lastLetter(letras) {
    return letras.slice(-1); // Slice com indice -1 extrai sempre a ultima letra da string
}
console.log(lastLetter("AUE"));

const videoGame = (console) => {
    return `Seu console preferido e o ${console}`; // Função de seta, é mais moderna de se utilizar
};
console.log(videoGame("Xbox"));

const videoGame2 = (console) => `E o ${console}`; // Função de seta mas com return implícito

console.log(videoGame2("PSP"));

const calcular = (a = 2, b = 2) => { // Boa pratica colocar o igual e um valor nos paramentros como se fosse um reserva se a pessoa nao passar argumento
    const somar = a + b;        // Return explicitos e funcoes maiores precisam das chaves
    const dob = somar * 2;      // Essas variaveis so existem aqui dentro dessa funcao
    return dob;
};

console.log(calcular());

const celular = () => {
    return ['samsung','motorola','nokia','iphone'];
};

console.log(celular());