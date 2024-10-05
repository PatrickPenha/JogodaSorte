function sorteiaNumero(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener('DOMContentLoaded', function () {
    const numeroCorreto = sorteiaNumero(5);
    const mensagemResultado = document.getElementById('mensagemResultado');

    document.querySelectorAll('.btn-group button').forEach(function (botao, index) {
        botao.addEventListener('click', function () {
            if (index === numeroCorreto) {
                mensagemResultado.innerHTML = `Você acertou! O botão correto é o ${index + 1}.`;
                mensagemResultado.classList.remove('text-danger');
                mensagemResultado.classList.add('text-success');
            } else {
                mensagemResultado.innerHTML = `Você errou! O botão ${index + 1} não é o correto.`;
                mensagemResultado.classList.remove('text-success');
                mensagemResultado.classList.add('text-danger');
            }
        });
    });
});