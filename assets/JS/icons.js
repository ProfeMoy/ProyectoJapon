/* Cambios en el H1 y el background */

/* Variables */

var previousTitle = $("#h1Categoria").text();
var fondo = background(previousTitle);

$("#logo").click(() => {
    location.href = "../../index.html";
});


/* Categorías */

/* --- Historia --- */

$("#iconHistoria").mouseover(() => {
    changeToCategory("Historia", "historia");
});
$("#iconHistoria").mouseout(() => {
    returnToOriginal();
});
$("#iconHistoria").click(() => {
    window.location.href = "../historia/historia.html";
});

/* --- Destinos Turisticos --- */

$("#iconDestinos").mouseover(() => {
    changeToCategory("Destinos Turisticos", "destinos-turisticos");
});
$("#iconDestinos").mouseout(() => {
    returnToOriginal();
});
$("#iconDestinos").click(() => {
    window.location.href = "../Destinos Turisticos/Destinos.html";
});

/* --- Cultura --- */

$("#iconCultura").mouseover(() => {
    changeToCategory("Cultura", "cultura");
});
$("#iconCultura").mouseout(() => {
    returnToOriginal();
});
$("#iconCultura").click(() => {
    window.location.href = "../cultura/cultura.html";
});

/* --- Turismo --- */

$("#iconTurismo").mouseover(() => {
    changeToCategory("Destinos turisticos", "turismo");
});
$("#iconTurismo").mouseout(() => {
    returnToOriginal();
});
$("#iconTurismo").click(() => {
    window.location.href = "../Destinos turisticos/destinos.html";
});

/* --- Gastronomía --- */

$("#iconGastronomia").mouseover(() => {
    changeToCategory("Gastronomía", "gastronomia");
});
$("#iconGastronomia").mouseout(() => {
    returnToOriginal();
});
$("#iconGastronomia").click(() => {
    window.location.href = "../gastronomia/subgastronomia.html";
});

/* --- Festividades --- */

$("#iconFestividades").mouseover(() => {
    changeToCategory("Festividades", "festividades");
});
$("#iconFestividades").mouseout(() => {
    returnToOriginal();
});
$("#iconFestividades").click(() => {
    window.location.href = "../festividades/festividades.html";
});

/* --- Eventos --- */

$("#iconEventos").mouseover(() => {
    changeToCategory("Eventos", "eventos");
});
$("#iconEventos").mouseout(() => {
    returnToOriginal();
});
$("#iconEventos").click(() => {
    window.location.href = "../eventos/eventos.html";
});

/* --- Urbanización --- */

$("#iconUrbanizacion").mouseover(() => {
    changeToCategory("Urbanización", "urbanizacion");
});
$("#iconUrbanizacion").mouseout(() => {
    returnToOriginal();
});
$("#iconUrbanizacion").click(() => {
    window.location.href = "../urbanizacion/urbanizacion.html";
});

/* --- Aportes --- */

$("#iconAportes").mouseover(() => {
    changeToCategory("Aportes", "aportes");
});
$("#iconAportes").mouseout(() => {
    returnToOriginal();
});
$("#iconAportes").click(() => {
    window.location.href = "../aportes/aportes.html";
});

/* --- Viajes --- */

$("#iconViajes").mouseover(() => {
    changeToCategory("Turismo", "viajes");
});
$("#iconViajes").mouseout(() => {
    returnToOriginal();
});
$("#iconViajes").click(() => {
    window.location.href = "../turismo/turismo.html";
});


/* Funciones */

function changeToCategory(title, bg) {
    $("#h1Categoria").text(title);
    $("#divCategoria").removeClass();
    $("#divCategoria").addClass("containerCategoria");
    $("#divCategoria").addClass("background");
    $("#divCategoria").addClass(bg);
}

function returnToOriginal() {
    $("#h1Categoria").text(previousTitle);
    $("#divCategoria").removeClass();
    $("#divCategoria").addClass("containerCategoria");
    $("#divCategoria").addClass("background");
    $("#divCategoria").addClass(fondo);
}

function background(title) {
    switch (title) {
        case "Categoría":
            {
                return "prueba";
            }
        case "Historia":
            {
                return "historia";
            }
        case "Cultura":
            {
                return "cultura";
            }
        case "Destinos turisticos":
            {
                return "destinos-turisticos";
            }
        case "Gastronomía":
            {
                return "gastronomia";
            }
        case "Festividades":
            {
                return "festividades";
            }
        case "Eventos":
            {
                return "eventos";
            }
        case "Urbanización":
            {
                return "urbanizacion";
            }
        case "Aportes":
            {
                return "aportes";
            }
        case "Viajes":
            {
                return "viajes";
            }
        case "Destinos Turisticos":
            {
                return "destinos-turisticos";
            }

    }
}