//import { futimes } from "fs";

//import { log } from "util";
//let url = "https://api.myjson.com/bins/17ewfi";

window.get = async () => {
    const url = "https://api.myjson.com/bins/17ewfi";
    const thenData = await fetch(url);
    laboratoria = await thenData.json();
}

window.data = {
    //let contenido = document.querySelector('#contenido')
    computeStudentsStats: () => {
        /*fetch('https://api.myjson.com/bins/17ewfi')
        .then(res => res.json())
        .then(data => {
            contenido.innerHTML = `
            <p>Sede: ${data.lima}<p>
            `
        })
    }*/
    },
    computeGenerationStats: () => {
        /*let contenido = document.querySelector('#contenido')
        computeStudentsStats: () => {
            fetch('https://api.myjson.com/bins/17ewfi')
            .then(res => res.json())
            .then(data => {
                contenido.innerHTML = `
                <p>Generacion: ${data.lima.generacion}<p>
                `
        })
    }*/
    },
    sortStudents: () => {

    },
    filterStudents: () => {

    },
};

/*window.data = {

    getJson: () => {
        let dataVen = [];
        let dataGenerations = [];
        let dataStudents = [];
        let api = "https://api.myjson.com/bins/17ewfi";

        fetch(api).then(function(dataGenerations){
            return dataGenerations.json();
        }).then(function(dataVenues){
            let i=0;
            for(let valor of dataVenues.mexico.generacion.cuarta.estudiantes){
                dataVen[i] = valor;
                i++;
            }
            console.log(dataVen);
            return dataVen;
        })
    }
};*/
    
/*
    function cargarTXT() {
        fetch(url)
        .then(function(res) {
            return res.text();
        })
        .then(function(laboratoria) {
            document.getElementById('resultado').innerHTML = laboratoria;
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    function cargarJSON() {
        fetch('request')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            let html = '';
            data.forEach(function(laboratoria) {
                html += ´
                <li>${laboratoria.lima} $ {laboratoria.generacion}</li>
                        ´;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        });
    }
};*/





























//let jsonResponse 
//se almacen la URL del JSON que se quiere recuperar en una variable
//let request = `https://raw.githubusercontent.com/Montse2018/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json`
//se crea una nueva instancia de objeto de solicitud desde el constructor XMLHttpRequest
//let requestObject = newXMLHttpRequest ();
//se utiliza el metodo open para abrir una nueva solicitud que toma el parametro GET (para traer datos)
//y el parametro requestURL que realiza la solicitud
//requestObject.open('GET', requestObjectURL);
//el responseType es para que XHR sepa que el servidor estara retornando al JSON y que debe convertir
//en un segundo plano en un objeto JavaScript
//requestObject.responseType = 'json';
//se utiliza el metodo send para enviar la solicitud
//requestObject.send();

/*let generation = "";
//let datosLaboratoria = "";
//let laboratoria = "";*/

/*window.get = async () => {
    const request = `https://raw.githubusercontent.com/Montse2018/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json`
    const thenData = await fetch(request);
    laboratoria = await thenData.json();
}

window.data = {
    computeStudentsStats: () =>{

    },
    computeGenerationStats: () =>{

    },
    sortStudents: () => {

    },
    filterStudents: () => {

    },
};*/
    

    /*computeGenerationStats: () => {
        const data = JSON.parse(request.responseType);
        console.log(data.lima.generacion);
        //let generation = (lima.generacion);
        //console.log(request.responseType);
    }
    asyncRequestObject.onload = computeGenerationStats;
    // {
       // let generation = request.response;
    }*/
    
    //generation: document.querySelector("#generacion");
    //datosLaboratoria: "",
    //laboratoria: "",
    //console.log(request);

    /*computeGenerationStats: function() {
        fetch(request).then(function(laboratoria){
            console.log(laboratoria.json);
            return laboratoria.json();
        }).then(function(datosLaboratoria){
            let generaciones = datosLaboratoria[0].lima.generacion;
        })

            /*console.log(laboratoria.json);}).then(function(datosLaboratoria){
                console.log(laboratoria.lima.generacion);
                let generation = laboratoria.lima.generacion;
                generation.innerHTML = generationAPI;})*/
// }
//  };*/

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
       
