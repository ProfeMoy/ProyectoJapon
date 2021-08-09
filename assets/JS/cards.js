// Acción de cambio de categorías

// Ocultamos las categorías 2 y 3, inicia en la 1
$("#category2").hide();
$("#category3").hide();

// Botón 1
$("#btn1").click(() => {
    $("#btn1").addClass("selected");
    $("#btn2").removeClass("selected");
    $("#btn3").removeClass("selected");


    // Cambiamos las cards
    $("#category1").fadeIn();
    $("#category2").hide();
    $("#category3").hide();

});

// Botón 2
$("#btn2").click(() => {
    $("#btn1").removeClass("selected");
    $("#btn2").addClass("selected");
    $("#btn3").removeClass("selected");


    // Cambiamos las cards
    $("#category1").hide();
    $("#category2").fadeIn();
    $("#category3").hide();

});

// Botón 3
$("#btn3").click(() => {
    $("#btn1").removeClass("selected");
    $("#btn2").removeClass("selected");
    $("#btn3").addClass("selected");

    // Cambiamos las cards
    $("#category1").hide();
    $("#category2").hide();
    $("#category3").fadeIn();

});


// Cambios en el background

// Por categoría iremos cambiando la imagen en el background en la clase de wrapper

// Historia
$("#cardHistoria").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-historia");
});
$("#cardHistoria").mouseout(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-inicio");
});

// Cultura
$("#cardCultura").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-cultura");
});
$("#cardCultura").mouseout(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-inicio");
});

// Turismo
$("#cardTurismo").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-turismo");
});
$("#cardTurismo").mouseout(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-inicio");
});

// Gastronomía
$("#cardGastronomia").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-gastronomia");
});
$("#cardGastronomia").mouseout(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-inicio");
});

// Festividades
$("#cardFestividades").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-festividades");
});
$("#cardFestividades").mouseout(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-inicio");
});

// Eventos
$("#cardEventos").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-eventos");
});
$("#cardEventos").mouseout(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-inicio");
});

// Urbanización
$("#cardUrbanizacion").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-urbanizacion");
});
$("#cardUrbanizacion").mouseout(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-inicio");
});

// Aportes
$("#cardAportes").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-aportes");
});
$("#cardAportes").mouseout(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-inicio");
});

// Viajes
$("#cardViajes").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-viajes");
});
$("#cardViajes").mouseout(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-inicio");
});

