$('telefone').mask('(00) 00000-0000')
$('cpf').mask('000.000.000-00')
$('cep').mask('00000000')
$('form').validate({
    rules: {
        telefone: {
            required: true
        },
        cpf: {
            required:true, 
            cpf: true
        },
        cep: {
            required: true,
            cep:true
        }
    },
        messages: {
            telefone: 'Por favor, insira o telefone'
        },
        

        submitHandler: function(form) {
            console.log (form)
        },
            invalidHandler: function(evento, validador) {
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos){
                    alert(`Existem ${camposIncorretos} campos Inconrretos`)
            }
            }
})


