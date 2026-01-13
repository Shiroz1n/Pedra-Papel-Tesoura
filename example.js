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

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("contentA");
content.textContent = "Um texto ae";
const paragrafo = document.createElement("p");
paragrafo.classList.add("redP");
paragrafo.textContent = "Era pra eu ser vermelho"
paragrafo.style.color = "red"

const til3 = document.createElement("h3");
til3.classList.add("aha3");
til3.textContent = "Eu sou um h3 azul";
til3.style.color = "blue"


container.appendChild(content);
container.appendChild(paragrafo);
container.appendChild(til3);

const newDiv = document.createElement("div");
newDiv.classList.add("divNova");
newDiv.setAttribute("style", "border: black; background: pink;");
const tilH1 = document.createElement("h1");
tilH1.classList.add("tituloDiv");
tilH1.textContent = "Estou em uma div";
const paragrafoTwo = document.createElement("p");
paragrafoTwo.classList.add("outroP");
paragrafoTwo.textContent = "Eu tambem";

container.appendChild(newDiv);
newDiv.appendChild(tilH1)
newDiv.append(paragrafoTwo);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

let fruits = ["Maca", "Banana", "Laranja"]; // Matriz

console.log(fruits[1]); // Estar entre os colchetes para puxar a informacao

fruits[1] = "Morango"; // Alterar item no array

console.log(fruits[1]);

fruits[3] = "Pera";// Adicionar item

console.log(fruits[3]);

console.log(fruits.pop());
console.log(fruits);
console.log(fruits.push("Lixia"));
console.log(fruits);

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[1] = "Classicos";
styles.shift();
console.log(styles);
styles.unshift("RAP", "REGGAE");
console.log(styles);

const sumInput = () => {

    let numbers = [];
    while (true) {
        let value = prompt("Insira um numero", 0);

        if (value == "" || value == "null" || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of number) {
        sum += number;
    }
    return sum;
}

//alert (sumInput());

const numeros = [2, 4, 6];

// O "n" é cada número, um por vez.
const dobrados = numeros.map( n => n * 2 ); 

console.log(dobrados); // [4, 8, 12]
// Perceba: Entraram 3, saíram 3. O map NÃO muda o tamanho da lista.

const precos = [5, 15, 8, 20];

// O "p" é cada preço. Se a conta der TRUE, ele passa.
const caros = precos.filter( p => p > 10 );

console.log(caros); // [15, 20]
// Perceba: Entraram 4, saíram 2. O filter diminui a lista.

const valores = [10, 20, 30];

// total = acumulador (começa em 0)
// atual = valor da vez (10, depois 20, depois 30)
const soma = valores.reduce( (total, atual) => {
    return total + atual;
}, 0); // <--- Esse 0 é onde o total começa.

console.log(soma); // 60
// Perceba: Entraram 3, saiu 1 número só.

const idade = [10, 15, 18, 30]

const maior = idade.map(n => n >= 18); // Retorna apenas quem é maior de 18 e mantem o mesmo numero de saidas
console.log(maior);

const adultos = idade.filter(n => n >= 18); // Retorna os maiores de dezoite mas apenas ele, modificando a saida de 4 pra 2
console.log(adultos);

const somaidade = idade.reduce( (total, somadinha) => {
    return total + somadinha; // Soma tudo e reduz em 1 saida
}, 0);
console.log(somaidade);

let cidades = ["SP", "RJ", "BAHIA", "CEARA"];

for (let i = 0; i < cidades.length; i++) {
    console.log(`Viajando para ${cidades[i]}`);
}

let numerosSoma = [28, 39, 50, 83]
const somanumeros = numerosSoma.reduce( (total, somaa) => {
    return total + somaa;
}, 0);
console.log(somanumeros)

let lista = [10, 29, 50, 50, 89, 100, 50];
for (let i = 0; i < lista.length;i++) {
    if (lista[i] == 50) {
        console.log(`Achei no indice ${i}`);
    }
}

const repeteString = (palavra, num) => {
    let stringFinal = "";

    for (let i = 0; i < num; i++) {
        stringFinal = stringFinal + palavra;
    };

    return stringFinal;
};

console.log(repeteString("Alan", 3));

const reverseString = (palavra) => {
    let resultado = "";
    
    for (let i = palavra.length -1; i >= 0;i--) {
        resultado = resultado + palavra[i] // Precisa do + para concatenar pq significa que
    }                                  // Que cada repeticao ele vai pegar e juntar com o anterior

    return resultado;
}

console.log(reverseString("Caio"))


const playGame = () => {

    let rounds = 0;
    const maxround = 5;

    while (rounds < maxround) {
        const humanSelection = getHumanChoice(); // Nao repetir pois colocando outro console.log se nao vai fazer o prompt 2 vezes
        const computerSelection = getComputerChoice();
        console.log(humanSelection);
        console.log(computerSelection);
        const result = (playRound(humanSelection, computerSelection));
        console.log(humanScore);
        console.log(computerScore);
        console.log(result);
        rounds++;
    }

    if (humanScore > computerScore) {
        return "Párabens você ganhou"
    }else {
        return "Você Perdeu o jogo"
    }
};