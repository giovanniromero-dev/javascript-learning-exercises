// Código JQuery

$(document).ready(function () {
    // Selector mediante id
    $('#vg').hide(3000);
    // Selector mediante clase
    $('.escritores').css('font-size', '24px');
    // Selector mediante clase y posición
    $('.escritores:eq(2)').css('color', 'violet');
    // Selector mediante una combinación de selectores
    $('#directores li').addClass('cine');
});