const form = document.getElementById('calculadora');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    const imc = (peso / (altura * altura)).toFixed(2);

    const valor = document.getElementById('valor');
    let descricao = '';  

    document.getElementById('caixa-resultado').classList.remove('caixa-resultado');
    
    valor.classList.toggle('normal', imc >= 18.5 && imc <= 25);
    valor.classList.toggle('atencao', imc < 18.5 || (imc > 25));


    if (imc < 18.5 ) {
        descricao = "Atenção! Seu peso está abaixo do normal";
      

    } else if ( imc >= 18.5 && imc <= 25 ) {
        descricao = "Seu peso está ideal!"; 
         

    } else if (imc > 25 && imc <= 30) {
        descricao = "Atenção! Você está com sobrepeso";
             

    } else if (imc > 30 && imc <=40) {
        descricao = "Atenção! Você está com obesidade moderada";
        

    } else {
        descricao = "Muita Atenção! Você está com obesidade mórbida!";
        
    }

    valor.textContent= imc.replace('.', ',');
    document.getElementById('descricao').textContent = descricao;


});