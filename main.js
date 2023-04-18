$('telefone').mask('(00) 00000-0000')
$('form').validate({
rules: {
    telefone: {
        required:true
    }
    messages: {
        telefone: 'Por favor, insira o telefone'
    },
    submitHandler: function(form) {
        console.log (form)
    },
        invalidHandler: function(eveno, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos Inconrretos`)
        }
        
        }
    }
)}








