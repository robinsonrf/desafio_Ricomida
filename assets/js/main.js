
$(function () {

    $('#EnviarCorreo').click(function () {
    alert('El correo fue enviado correctamente');
    });

    $('.color_rojo').click(function(){
        $(this).css({color: "red",});
        });


     $('.card-title').click(function () {
         $('.card-text').toggle();
         });

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
});
