function revealOption(option) {
    const result = document.getElementById('result');
    let message = '';

    switch(option) {
        case 1:
            message = 'Você vai me dar o anel PARABÉNS!';
            break;
        case 2:
            message = 'Você vai me dar o anel PARABÉNS!';
            break;
        case 3:
            message = 'Você vai me dar o anel PARABÉNS!';
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
