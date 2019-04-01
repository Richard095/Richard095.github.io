Zepto(function($){
    let costo=0;
    let masas= {
        cl:50,
        cr:75,
        li:45
    };

    let sizes = {
        t_chica : 50,
        t_mediana : 70,
        t_grande : 90
    };
    const ppi=5;
    const ppie =7;

    let masa = $("#masa");
    let size = $("input[name=tamano]").filter(checked);
    let ingredientes = $(".ingrediente").filter(checked);
    let iexs = $(".iex").filter(checked);
    console.log(ingredientes);
    console.log(size.val());

    costo += sizes[size.attr("id")];
    costo += masas[masa.val()];
    costo += ingredientes.lenght * ppi;
    costo += iexs.lenght * ppie;
    console.log(costo);
})

let checked = function(){
    return this.checked;}

let selected = function(){
    return this.selected;

}
