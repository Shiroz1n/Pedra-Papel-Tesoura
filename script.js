const getComputerChoice = (jogada) => {
   let escolha = Math.floor(Math.random() * (2 - 0 + 1)) // Math.floor(Math.random() * 3)
    if (escolha == 0) {
        return jogada = "Tesoura";
    } else if (escolha == 1) {
        return jogada = "Pedra";
    } else {
        return jogada = "Papel";
    }
    
};

const getHumanChoice = () => {
    let suaEscolha = prompt("Insira Pedra, Papel ou Tesoura");
    
    if (suaEscolha == "pedra") {
        return `A Maquina jogou: ${getComputerChoice()} e voce jogou ${suaEscolha}`
    } else if (suaEscolha == "papel") {
        return `A Maquina jogou: ${getComputerChoice()} e voce jogou ${suaEscolha}`
    } else if (suaEscolha == "tesoura") {
        return `A Maquina jogou: ${getComputerChoice()} e voce jogou ${suaEscolha}`
    } else {
        return "Valor incorreto"
    }
};



console.log(getHumanChoice());