const getComputerChoice = (jogada) => {
   let escolha = Math.floor(Math.random() * (2 - 0 + 1)) // Math.floor(Math.random() * 3)
    if (escolha == 0) {
        return jogada = "Tesoura";
    } else if (escolha == 1) {
        return jogada = "Pedra";
    } else if (escolha == 2) {
        return jogada = "Papel";
    }
    

};

console.log(getComputerChoice());
