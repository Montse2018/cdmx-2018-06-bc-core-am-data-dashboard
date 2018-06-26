//let generation = document.getElementById("generacion");
//let computeGenerationStats = document.getElementById("generation");
let generation = document.getElementsByClassName("Generaciones");
let sedes = document.getElementsByClassName("Sedes");
let buttonSedes = document.getElementById("Sedes";)
let buttonGeneraciones = document.getElementById("Generaciones");

buttonGeneraciones.addEventListener ("click", event => {
    window.data.computeGenerationStats (laboratoria.value, datosLaboratoria.value)
    //generation.innerHTML = data[0].generacion;
})

buttonSedes.addEventListener ("click", event => {
    window.data.Sedes () 
})