const form = document.getElementById('calculadora');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    const imc = (peso / (altura * altura)).toFixed(2);

    const valor = document.getElementById('valor');
    let descricao = '';

    document.getElementById('descricao').classList.remove('caixa-resultado');

    if (imc < 18.5 ) {
        descricao = "Atenção! Seu peso está abaixo do normal."
    } else if ( imc >= 18.5 && imc <= 25 ) {
        descricao = "Seu peso está ideal!"
    }


});