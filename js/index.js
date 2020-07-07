$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
        interval: 3000
    });

    $('#reserva').on('show.bs.modal', function (e) {
        console.log('El modal reserva se abrió');
    });

    $('#reserva').on('hidden.bs.modal', function (e) {
        console.log('El modal reserva se cerró');
    });
});