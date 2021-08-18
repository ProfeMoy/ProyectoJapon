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

var cardSelected = false;

// Historia
$("#cardHistoria").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-historia");
    $(".title").text("Historia");
    $("#cardHistoria").click(() => {
        location.href = "categoria/historia/historia.html";
    });
});
$("#cardHistoria").mouseout(() => {
    goBack();
});


// Cultura
$("#cardCultura").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-cultura");
    $(".title").text("Cultura");
    $("#cardCultura").click(() => {
        location.href = "categoria/cultura/cultura.html";
    });
});
$("#cardCultura").mouseout(() => {
    goBack();
});

// Turismo
$("#cardTurismo").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-turismo");
    $(".title").text("Turismo");
    $("#cardTurismo").click(() => {
        location.href = "categoria/turismo/turismo.html";
    });
});
$("#cardTurismo").mouseout(() => {
    goBack();
});

// Gastronomía
$("#cardGastronomia").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-gastronomia");
    $(".title").text("Gastronomía");
    $("#cardGastronomia").click(() => {
        location.href = "categoria/gastronomia/gastronomia.html";
    });
});
$("#cardGastronomia").mouseout(() => {
    goBack();
});

// Festividades
$("#cardFestividades").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-festividades");
    $(".title").text("Festividades");
    $("#cardFestividades").click(() => {
        location.href = "categoria/festividades/festividades.html";
    });
});
$("#cardFestividades").mouseout(() => {
    goBack();
});

// Eventos
$("#cardEventos").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-eventos");
    $(".title").text("Eventos");
    $("#cardEventos").click(() => {
        location.href = "categoria/eventos/eventos.html";
    });
});
$("#cardEventos").mouseout(() => {
    goBack();
});

// Urbanización
$("#cardUrbanizacion").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-urbanizacion");
    $(".title").text("Urbanización");
    $("#cardUrbanizacion").click(() => {
        location.href = "categoria/urbanizacion/urbanizacion.html";
    });
});
$("#cardUrbanizacion").mouseout(() => {
    goBack();
});

// Aportes
$("#cardAportes").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-aportes");
    $(".title").text("Aportes");
    $("#cardAportes").click(() => {
        location.href = "categoria/aportes/aportes.html";
    });
});
$("#cardAportes").mouseout(() => {
    goBack();
});

// Viajes
$("#cardViajes").mouseover(() => {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-viajes");
    $(".title").text("Viajes");
    $("#cardViajes").click(() => {
        location.href = "categoria/viajes/viajes.html";
    });
});
$("#cardViajes").mouseout(() => {
    goBack();
});

// Funciones

function goBack() {
    $("#wrapper").removeClass();
    $("#wrapper").addClass("background-inicio");
    $(".title").text("Japón");
}