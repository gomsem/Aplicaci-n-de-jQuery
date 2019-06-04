$(document).ready(function () {
    console.log("El documento está listo");


//Selección
//Punto #1

    console.log($("div.module"));

//Punto #2

var select = $(".cuerpo");

if(select.length)
{
    console.log(select.length);
}

//Punto #3

    console.log($("tr.odd"));


//Recorrido del DOM
//Punto #1

    console.log($("#search:input").addClass("Seleccionado"));

//Punto #2

    $("#myList li.current bar").removeClass("current bar").next("#myList li").addClass("current bar");

//Punto #3

    $("#slideshow li:first").addClass("current bar");
    $("li.selected").siblings().addClass("disabled");

//Manipulación
//Punto #1

for(var i = 8; i<13; i++)
{
    $("#myList li").last().append("<br>");
    $("#myList li").last().append("<li>List item " + i + "</li>");
}
    
//Punto #2
    $("#myList").remove("tr:odd");
//Punto #3
    $("div.module:last").append($("<h2>otro h2</h2>")).append($("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"));
//Punto #4
    $("select").append("<option value="wednesday">Wednesday</option>");
    
//Punto #5
    $("body").append($("<module> modulo </module>"));
    
    });
    