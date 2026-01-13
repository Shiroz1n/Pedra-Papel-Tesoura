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

const getHumanChoice = (jogo) => {
    jogof = jogo.charAt(0).toUpperCase() + jogo.slice(1).toLowerCase();
    if (jogof == "Pedra") {
        return "Pedra"
    } else if (jogof == "Papel") {
        return "Papel"
    } else if (jogof == "Tesoura") {
        return "Tesoura"
    } else {
        alert = "Valor incorreto, digite novamente"
        return getHumanChoice();
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
        return "Voce Venceu a rodada";
    } else {
        ++computerScore
        return "Voce perdeu";
    }
};

// Botao Pedra
const btn1 = document.querySelector("#rockBtn");
btn1.addEventListener("click", function (e) {

    if (humanScore >= 5 || computerScore >= 5) {
        console.log("Acabou a partida, reinicie a pagina")
        return
    };

    const humanSelection = getHumanChoice("Pedra"); // Nao repetir pois colocando outro console.log se nao vai fazer o prompt 2 vezes
    const computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);
    const result = (playRound(humanSelection, computerSelection));
    console.log(humanScore);
    console.log(computerScore);
    console.log(result);
});

// Botao Papel
const btn2 = document.querySelector("#paperBtn");
btn2.addEventListener("click", function (e) {

        if (humanScore >= 5 || computerScore >= 5) {
        console.log("Acabou a partida, reinicie a pagina")
        return
    };

    const humanSelection = getHumanChoice("Papel"); // Nao repetir pois colocando outro console.log se nao vai fazer o prompt 2 vezes
    const computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);
    const result = (playRound(humanSelection, computerSelection));
    console.log(humanScore);
    console.log(computerScore);
    console.log(result);
})

// Botao Tesoura
const btn3 = document.querySelector("#scissorBtn");
btn3.addEventListener("click", function (e) {

        if (humanScore >= 5 || computerScore >= 5) {
        console.log("Acabou a partida, reinicie a pagina")
        return
    };

    const humanSelection = getHumanChoice("Tesoura"); // Nao repetir pois colocando outro console.log se nao vai fazer o prompt 2 vezes
    const computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);
    const result = (playRound(humanSelection, computerSelection));
    console.log(humanScore);
    console.log(computerScore);
    console.log(result);
})