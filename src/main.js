const container = document.getElementById("result1");
const container1 = document.getElementById("result2");
const container2 = document.getElementById("result3");

renderInfo = (data) => {
    document.getElementById("btnSedes").addEventListener("click", (event) => {
        let result1 = '';
        // console.log(Object.keys(data))
        // console.log(data.lima.generacion)
        const sede = Object.keys(data);
        //const generacion = data.lima.generacion;
        for(key in data) {
            if(data.hasOwnProperty(key))
            //console.log(Object.value(generacion))

            result1 += `<div class="card">
                            <div class="info">
                                <a href="#" class="sedes" id ="${key}">${key}</a>
                                <div class="lim-gen"></div>
                                
                                <div id="mex-gen"></div>
                                <div id="santiago-gen"></div>
                            </div>
                        </div>
                    </div>`              
        }
        container.innerHTML = result1;
        const campus = document.getElementsByClassName("sedes");
        const containerGenLima = document.getElementsByClassName("lim-gen")
        for (let i = 0; i < campus.length; i ++) {
            campus[i].addEventListener("click", (event) => {
                console.log(event.target.nextSibling)
                const campus = event.target.innerHTML;
                console.log(campus)
                let result2 = '';
                const generacion = Object.keys(data[campus].generacion);
                generacion.forEach((generacion) => {
                    result2 += `<div class="card">
                                <div class="info">
                                    <button ref="#" class="generacion" id="${generacion}> ${generacion}</button>
                                </div>
                            </div>
                        </div>`
                })
                containerGenLima.innerHTML = result2;
                //console.log(data[key].generacion)
                
        
            })
        }
        //campus = document.getElementsByClassName("sedes");
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
    })


}
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
    
        
        
    
    
    




        
    
