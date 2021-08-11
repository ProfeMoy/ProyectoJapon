$("#subViewer").hide();
$("#closeSubViewer").click(() => {
    $("#subViewer").fadeOut();
});

$(".subCat").click((() => {
    $("#subViewer").fadeIn();
}));

$(document).ready(() => {
    AOS.init();
});