function revealOption(option) {
    const result = document.getElementById('result');
    let message = '';

    switch(option) {
        case 1:
            message = 'um beijo meu!';
            break;
        case 2:
            message = '3 beijo meu';
            break;
        case 3:
            message = 'um monte de beijo meu!';
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
