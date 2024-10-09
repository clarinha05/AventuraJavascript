// Atributos iniciais de Duda Croft
let duda = {
    nome: "Duda Croft",
    vida: 100,
    forca: 15,
    recursos: 30, // representa recursos como munição ou suprimentos
    inteligencia: 10 // pode representar habilidades de resolver enigmas
};

// Função para mostrar o status da personagem
function mostrarStatus() {
    console.log(`Nome: ${duda.nome}`);
    console.log(`Vida: ${duda.vida}`);
    console.log(`Força: ${duda.forca}`);
    console.log(`Recursos: ${duda.recursos}`);
    console.log(`Inteligência: ${duda.inteligencia}`);
    console.log("-----------------------");
}

// Função para uma rodada de desafio
function rodada(desafio) {
    console.log(`Desafio: ${desafio.descricao}`);
    
    // Escolhas do jogador
    let escolha = prompt("Escolha: 1 para enfrentar, 2 para procurar outra saída");

    if (escolha == 1) {
        duda.vida -= desafio.dano;
        duda.forca += desafio.recompensaForca;
        duda.recursos += desafio.recompensaRecursos;
        console.log("Você escolheu enfrentar o desafio!");
    } else {
        duda.vida -= 5; // perder um pouco de vida por gastar mais tempo
        duda.inteligencia += 2; // ganha inteligência por procurar outra saída
        console.log("Você escolheu procurar outra saída.");
    }

    // Mostra status atualizado
    mostrarStatus();
}

// Função principal do jogo
function start() {
    console.log("Bem-vindo(a) à Aventura de Duda Croft!");

    mostrarStatus();

    // Desafios da aventura
    let desafios = [
        { descricao: "Explorar uma caverna com armadilhas", dano: 20, recompensaForca: 5, recompensaRecursos: 10 },
        { descricao: "Enfrentar guardas de um templo", dano: 30, recompensaForca: 10, recompensaRecursos: 5 },
        { descricao: "Resolver um enigma antigo", dano: 10, recompensaForca: 0, recompensaRecursos: 20, inteligencia: 5 },
        { descricao: "Sobreviver a um desmoronamento", dano: 40, recompensaForca: 15, recompensaRecursos: 0 }
    ];

    // Roda cada desafio
    for (let i = 0; i < desafios.length; i++) {
        rodada(desafios[i]);

        // Se a vida de Duda chegar a zero ou menos, o jogo acaba
        if (duda.vida <= 0) {
            console.log("Duda foi derrotada. Fim de jogo.");
            return;
        }
    }

    console.log("Parabéns! Você completou a aventura de Duda Croft e venceu!");
}