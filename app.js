function revealOption(option) {
    const result = document.getElementById('result');
    let message = '';

    switch(option) {
        case 1:
            message = 'Vão me dar o salário do dia 20, PARABÉNS!';
            break;
        case 2:
            message = 'Vão me enviar o salário do dia 5 PARABÉNS!';
            break;
        case 3:
            message = 'Vão me dar o salário inteiro PARABÉNS!';
            break;
        default:
            message = 'Opção inválida!';
    }

    result.textContent = message;
    result.classList.remove('hidden');

    // Exibir fogos de artifício
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
