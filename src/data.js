window.data = {
    let api = "https://raw.githubusercontent.com/Montse2018/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json" 
    let generation = document.querySelector(#generacion) 
    let datosLaboratoria = "";
    let laboratoria = "";
    console.log(api)

    let computeGenerationStats = function(){
        fetch(api).then(function(laboratoria){
            console.log(laboratoria.json);}).then(function(datosLaboratoria){
                console.log(laboratoria.lima.generacion);
                let generation = laboratoria.lima.generacion;
                generation.innerHTML = generationAPI;})
     }
};

/*window.data = {
let data = {
    generacion: ["cuarta", "quinta", "tercera"],
    sedes: [lima, mexico, santiago],
};

computeGenerationStats(data) {
    let generation = data.generacion;
}
console.log(data.generacion);

};*/

            //console.log(laboratoria.generacion[0]);
            //let generation = laboratoria.generacion[0];
        
            //console.log(laboratoria.generacion[0]);
            //let generation = laboratoria.generacion[0];
       
