console.log("oi")
$(function(){ // to insure that DOM is loaded

    // jQuery methods go here...

    $(".texto").click(function(){
        $(this).attr("class", "texto selecionado");
        $(this).css("border", "solid #d35eb6 3px");
    })

    $("#botao-azul").click(function(){
        $(".selecionado").css("background-color", "blue");
        $(".selecionado").css("border", "none");
        $(".selecionado").attr("class", "texto");
    })

    $("#botao-verde").click(function(){
        $(".selecionado").css("background-color", "green");
        $(".selecionado").css("border", "none");
        $(".selecionado").attr("class", "texto");
    })
  
    $("#botao-remover").click(function(){
        $(".selecionado").hide();
        $(".selecionado").attr("class", "texto");
    })

    $("#botao-add-filho").click(function(){
        $(".selecionado").append("<p> Novo parágrafo adicionado</p>")
        $(".selecionado").css("border", "none");
        $(".selecionado").attr("class", "texto");
    })
});