Zepto(function ($){

const pokeapi = "https://pokeapi.co/api/v2/pokemon/";

let cargar = $("#cargar"); 


cargar.click(function(){
    let code = $("#code").val();
    cargar.prop('disabled','true');
    cargar.text('Cargando..');


    $.getJSON(pokeapi+code,function(data){
        // console.log(data);
        // console.info(data['name']);
        let _name = $("div#descripcion h2");
        let _img = $("div#descripcion img");

        _name.text(data ['name']);
        _img.attr("src",data['sprites']
        ['front_default']);
        cargar.removeAttr('disabled');

        _img.prop("alt",data['name']);
            
        _img.live('hover',function(){
            _img.prop("src",data['sprites']['back_default']);
        });
        
    });
});

});