$(document).ready(function(){
    $('header button').click(function(){
        const nomeDaTarefa = $('#nome-da-tarefa').val();
        const novaTarefa = $(`<li><a href=#>${nomeDaTarefa}</a></li>`)
        $(novaTarefa).appendTo('ul')
    });

    $('#minha-lista').on('click', 'li', function(){
        $(this).css('text-decoration','line-through');
    });

});