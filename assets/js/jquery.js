//USO DE JQUERY PARA CREAR EL ESTILO DE LA PAGINA "NUESTROS SERVICIOS"
$(document).ready(function () {
    // Estilos generales
    $('.datos-servicio').css({
        'background-color': '#f5f5f5',
        'padding': '20px',
        'border-radius': '10px'
    });

    // Estilos específicos para cada sección
    $('.ubicacion, .horario, .pedido, .contacto, .entrega, .pedido-formas, .formas-pago, .promociones, .redes-sociales').css({
        'border-bottom': '1px solid #ddd',
        'padding-bottom': '15px',
        'margin-bottom': '20px'
    });

    $('h3').css({
        'color': '#333'
    });

    $('p').css({
        'color': '#555'
    });
});
