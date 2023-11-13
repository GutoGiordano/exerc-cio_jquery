$(document).ready(function() {
    $('#addLinha').click(function(event) { //Cria a nova linha qdo o user clica no botão
        event.preventDefault(); //Evitando o comportamento padrão do formulário
        var linha = $('#criaLinha').val(); //criação de variável var linha que lê o valor digitado na linha
        if(linha !== '') {
            var listaItem = $('<li></li>').text(linha);
            $('#addLista').append(listaItem);
            $('#criaLinha').val('');
            $(listaItem).click(function() { //adiciona o risco na tarefa quando clica por ter concluído
                $(this).toggleClass('completo');
            });
        }
    });
});