    let humanScore = 0;
    let computerScore = 0;

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
    
    if (suaEscolha == "Pedra") {
        return "Pedra"
    } else if (suaEscolha == "Papel") {
        return "Papel"
    } else if (suaEscolha == "Tesoura") {
        return "Tesoura"
    } else {
        return "Valor incorreto"
    }
};

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return "Empate"
    } else if (
        (humanChoice === "Papel" && computerChoice === "Pedra")||
        (humanChoice === "Pedra" && computerChoice === "Tesoura") ||
        (humanChoice === "Tesoura" && computerChoice === "Papel") )
    {
        ++humanScore // Se add depois, nao funciona
        return "Voce Venceu";
    } else {
        ++computerScore
        return "Voce perdeu";
    }
};

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

console.log(playGame());