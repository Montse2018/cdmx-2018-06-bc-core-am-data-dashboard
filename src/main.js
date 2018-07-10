const container = document.getElementById("result1");
const container1 = document.getElementById("result2");
const container2 = document.getElementById("result3");
const container3 = document.getElementById("result4");
const container4 = document.getElementById("result5");

renderInfo = (data) => {
    document.getElementById("btnLima").addEventListener("click", (event) => {
        let result1 = '';
        const sede = Object.keys(data);
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
            }
           // console.log()
            const generacion = Object.keys(data.lima.generacion)
            console.log(generacion)
            for(let i=0; i<generacion.length; i++){
                console.log(generacion[i])
                result1 += `<div class="card">
                                <div class="info">
                                    <a href="#" class="generacion" id="${generacion[i]}">${generacion[i]}</a>
                                    <div id="lima-cuarta"></div>
                                    <div class="lima-quinta"></div>
                                </div>
                            </div>
                        </div>`
            }
        container.innerHTML = result1;
            
            return result1;
        }
        })
    
    document.getElementById("btnMexico").addEventListener("click", (event) => {
        console.log(Object.keys(data.mexico.generacion))
        const generacion2 = Object.keys(data.mexico.generacion)
        console.log(generacion2)
        for(let i=0; i<generacion2.length; i++){
            console.log(generacion2[i])
            result2 += `<div class="card">
                            <div class="info">
                                <a href="#" class="generacion2" id="${generacion2[i]}">${generacion2[i]}</a>
                                <div class="mex-cuarta"></div>
                            </div>
                        </div>
                    </div>`
        }
        container1.innerHTML = result2;
            return result2;
    })
    document.getElementById("btnSantiago").addEventListener("click", (event) => {
        let resutado3 = '';
        console.log(Object.keys(data.santiago.generacion))
        const generacion3 = Object.keys(data.santiago.generacion)
        console.log(generacion3)
        for(let i=0; i<generacion3.length; i++){
            console.log(generacion3[i])
            result3 += `<div class="card">
                            <div class="info">
                                <a href="#" class="generacion3" id="${generacion3[i]}">${generacion3[i]}</a>
                                <div class="sant-cuarta"></div>
                            </div>
                        </div>
                    </div>`
        }
        container2.innerHTML = result3;
            return result3;
})
}

renderInfo2 = (data) => {
    document.getElementById("lima-cuarta").addEventListener("click", (event) => {
        let result4 = '';
        console.log(data.lima.generacion.cuarta.estudiantes)
        const estudiantes = data.lima.generacion.cuarta.estudiantes;
        for (const key in estudiantes) {
            if (estudiantes.hasOwnProperty(key)) {
                const element = estudiantes[key];
                console.log(element.nombre)
                console.log(element.progreso.duracionPrograma)
                result4 += `<div class="card">
                                <div class="info3">
                                    <p>Nombre:${element.nombre}</p>
                                    <p>Correo:${element.correo}</p>
                                    <p>Turno:${element.turno}</p>
                                    <p>Duracion Programa: ${element.progreso.duracionPrograma}</p>
                                    <p>Porcentaje Completado: ${element.progreso.porcentajeCompletado}</p>
                                 </div>
                             </div>`
                
            }
            container3.innerHTML = result4

            //return result4;
        }
        // return result4;
    })
   // return result4;
   document.getElementById("lima-quinta").addEventListener("click", (event) => {
    console.log(data.lima.generacion.quinta.estudiantes)
    const estudiantesQuinta = data.lima.generacion.quinta.estudiantes;
    for(let i=0; i<estudiantesQuinta.length; i++){
        console.log(estudiantesQuinta)
    }
    for (const key in estudiantesQuinta) {
        if (estudiantesQuinta.hasOwnProperty(key)) {
            const element1 = estudiantesQuinta[key];
            console.log(element1.nombre)
            console.log(element1.progreso.duracionPrograma)
            result4 += `<div class="card">
                            <div class="info3">
                                <p>Nombre:${element1.nombre}</p>
                                <p>Correo:${element1.correo}</p>
                                <p>Turno:${element1.turno}</p>
                                <p>Duracion Programa: ${element1.progreso.duracionPrograma}</p>
                                <p>Porcentaje Completado: ${element1.progreso.porcentajeCompletado}</p>
                             </div>
                         </div>`
            
        }
        container4.innerHTML = result5
    }
})
}
    //return result5;

//return result5;


/*
renderInfo3 = (data) => {
    document.getElementById("lima-quinta").addEventListener("click", (event) => {
        console.log(data.lima.generacion.quinta.estudiantes)
        const estudiantes = data.lima.generacion.quinta.estudiantes;
        for (const key1 in estudiantes) {
            if (estudiantes.hasOwnProperty(key1)) {
                const element1 = estudiantes[key1];
                console.log(element1.nombre)
                console.log(element1.progreso.duracionPrograma)
                result4 += `<div class="card">
                                <div class="info3">
                                    <p>Nombre:${element1.nombre}</p>
                                    <p>Correo:${element1.correo}</p>
                                    <p>Turno:${element1.turno}</p>
                                    <p>Duracion Programa: ${element1.progreso.duracionPrograma}</p>
                                    <p>Porcentaje Completado: ${element1.progreso.porcentajeCompletado}</p>
                                 </div>
                             </div>`
                
            }
            container4.innerHTML = result5
        }
       // return result5;
    })
    //return result5;
}*/



/*renderInfo2 = (data) => {
    document.getElementById("btnMexico").addEventListener("click", (event) => {
        let result2 = '';
        const sede2 = Object.keys(data);
        console.log(Object.keys(data))
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
            }
            console.log(Object.keys(data.mexico.generacion))
            const generacion2 = Object.keys(data.mexico.generacion)
            console.log(generacion)
            for(let i=0; i<generacion2.length; i++){
                console.log(generacion[i])
                result1 += `<div class="card">
                                <div class="info">
                                    <a href="#" class="generacion2" id="${generacion2[i]}">${generacion2[i]}</a>
                                    <div class="lim-cuarta"></div>
                                </div>
                            </div>
                        </div>`
            }
            //const generacion = Object.keys(data.lima.generacion);
            //console.log(data.lima.generacion)
            //let k=0;
        container.innerHTML = result1;
            
            return result2;
        }

        return result2;
    })
}
        //const generacion = Object.keys(data[key].generacion);
        //console.log(Object.keys(data[key].generacion))
        //})
    //}
       /* //campus = document.getElementsByClassName("sedes");
        const containerGenMex = document.getElementById("mex-gen")
        for (let j = 0; j < campus.length; j ++) {
            campus[j].addEventListener("click", (event) => {
                console.log(event.target.nextSibling)
                const campus = event.target.innerHTML;
                console.log(campus)
                let result2 = '';
                const generacion = Object.keys(data[campus].generacion);
                generacion.forEach((generacion) => {
                    result2 += `<div class="card">
                                <div class="info">
                                    <p> ${generacion}</p>
                                </div>
                            </div>
                        </div>`
                })
                containerGenMex.innerHTML = result2;
                //console.log(data[key].generacion)
                
        
            })
        }

        //container2.innerHTML = result2;
    })*/


//}
//renderInfo2 = (data) => {
  //document.getElementById("btnGeneracion").addEventListener("click", 
  // const mostrargen = 


   /* renderInfo3 = (data) => {
        document.getElementById("btnGeneracion").addEventListener("click", (event) => {
            
        })
      for ( sede in data) {
          if (data.hasOwnProperty(sede)) {
              const element = data[sede];
              let generacionSede = element;
              console.log(sede)
                for ( key in generacionSede) {
                    if (generacionSede.hasOwnProperty(key)) {
                        const sedeUnica = generacionSede[key];
                        console.log(generacionSede, sedeUnica)
                        result2 +=`<div class="card">
                                     <div class="info">
                                       <p> ${generacion}</p>
                                    </div>
                                 </div>
                            </div>`
                
                    }
                }
                container2.innerHTML = result2;
          }
      }
        document.getElementById("btnAlumnas").addEventListener("click", (event) => {
            let result3 = '';
            const estudiantes = data.lima.generacion.cuarta.estudiantes;
            console.log(data.lima.generacion.cuarta.estudiantes[0])
            /*for (let i=0; i<estudiantes.length; i++) {
                average += alumnas[student].progreso.porcentajeCompletado;
                average = average / alumnas.length;
                obj.average = average;
                obj.count = students.length;*/
                    //const element = object[student];*/
                    //for (const key in estudiantes) {
                       // if (estudiantes.hasOwnProperty(key)) {
                            //const element = estudiantes[key];
                            //console.log(lima.cuarta.element)
                            //console.log(lima.cuarta.element.nombre)
                            //console.log(element.correo)
                            //console.log(element.turno)
                            //console.log(elemento.progreso.duracionPrograma)
                    //average += element[student].progrego.porcentajeCompletado
                    //console.log(element[student].progrego.porcentajeCompletado)
            //result3 += `<div class="cardAlumnas">
                            /*<div class="info3">
                                <p>Correo: ${element.correo}</p>
                                <p>Nombre: ${element.nombre}</p>
                                <p>Turno: ${element.turno}</p>
                            </div>
                        </div>  
                    </div>`
                    
                        }
                        container2.innerHTML = result3;
                    }

            })
            //container2.innerHTML = result3;
    }*/ 
    
        
        
    
    
    




        
    
