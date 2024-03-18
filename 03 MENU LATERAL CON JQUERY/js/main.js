// Código JQuery

$(document).ready(function () {
    $('#burguer').click(function () {
        $('.menu').toggleClass('abierto');
        $('#burguer').toggleClass('abierto');
    });
});