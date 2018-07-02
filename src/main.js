let buttonSedes = document.getElementById("btnSedes");
let buttonGeneracion = document.getElementById("btnGeneracion");

buttonSedes.addEventListener ("click",  () => {
    window.data.laboratoria()
})

buttonGeneracion.addEventListener ("click", () => {
    window.data.generacion()
})

/*const json = "https://api.myjson.com/bins/17ewfi";

const getData = () => {
    fetch(json)
    .then( response => response.json() )
    .then((res) => {
        let sedes = '';
        //let generacion = '';
        sedes = Object.getOwnPropertyNames(computeGenerationStats);
        for(i=0; i< sedes.length; i++){
            console.log(sedes[i])
        //const generations = computeGenerationsStats(res);
        //const users = computeStudentsStats(res);
        //drawCampus(generations);
        let buttonGeneracion = document.getElementById("btnGeneracion").addEventListener("click", () => {
            window.data.API() 
        })
    }
    //.catch((error) => {
        //console.log(error);
    })
};*/

/*let laboratoria ="https://api.myjson.com/bins/17ewfi";
    let xhttp = newXMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
        let respuesta = JSON.parse(xhhttp.responseText);
        let laboratori = respuesta.laboratoria;
        let salida = '';
        let sedes = '';
        sedes = Object.getOwnPropertyNames(computeGenerationStats);
        for(let i=0; i <laboratoria.length; i++) {
            salida += $(laboratoria[i].sedes)
        }
        let buttonSedes = document.getElementById("btnSedes").innerHTML = salida;
    }
    }
    xhttp.open("GET", "laboratoria.json", true);
    xhhttp.send();*/

   /*fetch(laboratoria).then(response => {
        return response.json();
    }).then(datos => {
        if(this.readyState == 4 && this.status == 200)
        let respuesta = respose.json
    })*/

    let laboratoria ="https://api.myjson.com/bins/17ewfi";
    fetch(laboratoria).then(response => {
        return response.json();
        console.log(response.json)
    }).then(computeGenerationStats => {
        let sedes = '';
        //let generacion = '';
        sedes = Object.getOwnPropertyNames(computeGenerationStats);
        for(i=0; i< sedes.length; i++){
            console.log(sedes[i])
            //sedes = sedes[i];
            let generacion = '';
            for(j=0; j< generacion.length; j++){
                console.log(generacion[j])
            }
        }
    });


/*getData();

const drawCampus = (data) => {
    const sedes = Object.keys(data);

    const containerCampus = document.getElementById('btnSedes');
    sedes.forEach((sede) => {
        const option = document.createElement('option');
        option.innerHTML = sede;
        containerCampus.appendChild(option);
    });

    containerCampus.addEventListener('change', iteratorGenerations);
};


/*const drawGenerations = (e) => {
    //computeGenerationsStats(laboratoria)
}*/