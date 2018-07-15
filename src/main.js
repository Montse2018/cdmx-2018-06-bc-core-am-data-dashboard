const container = document.getElementById("result1");
const container1 = document.getElementById("result2");
const container2 = document.getElementById("result3");
const container3 = document.getElementById("result4");
const container4 = document.getElementById("result5");
const container5 = document.getElementById("result6");
const container6 = document.getElementById("result7");
const container7 = document.getElementById("result8");
const container8 = document.getElementById("result9");
const container9 = document.getElementById("result10");
const container10 = document.getElementById("result11");
const container11 = document.getElementById("result12");


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
                                    <li>${generacion[i]}</li>
                                </div>
                            </div>`

            }
        container.innerHTML = result1;
            
            return result1;
        }
        })
    
    document.getElementById("btnMexico").addEventListener("click", (event) => {
        let result2 = '';
        const sede = Object.keys(data);
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
        console.log(Object.keys(data.mexico.generacion))
        const generacion2 = Object.keys(data.mexico.generacion)
        console.log(generacion2)
        for(let i=0; i<generacion2.length; i++){
            console.log(generacion2[i])
            result2 += `<div class="card">
                            <div class="info">
                                <li>${generacion2[i]}</li>
                            </div>
                        </div>`
        }
        container1.innerHTML = result2;
            return result2;
        }
    }
    })
    document.getElementById("btnSantiago").addEventListener("click", (event) => {
        let resutado3 = '';
        const sede = Object.keys(data);
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                console.log(Object.keys(data.santiago.generacion))
                const generacion3 = Object.keys(data.santiago.generacion)
                console.log(generacion3)
                for(let i=0; i<generacion3.length; i++){
                    console.log(generacion3[i])
                    result3 += `<div class="card">
                                    <div class="info">
                                        <li>${generacion3[i]}</li>
                                     </div>
                                </div>`
                }
                container2.innerHTML = result3
                return result3;
                }
        }
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
                result4 += `<div class="cardAlumnas">
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
        }
    })
   
   document.getElementById("lima-quinta").addEventListener("click", (event) => {
    console.log(data.lima.generacion.quinta.estudiantes)
    //console.log(data.lima.generacion.quinta.estudiantes.nombre)
    const estudiantesQuinta = data.lima.generacion.quinta.estudiantes;
    for (const students in estudiantesQuinta) {
        if (estudiantesQuinta.hasOwnProperty(students)) {
            const studentQuinta = estudiantesQuinta[students];
            console.log(studentQuinta.nombre)
            console.log(studentQuinta.progreso.duracionPrograma)
            result5 += `<div class="cardAlumanas2">
                            <div class="info3">
                                <p>Nombre:${studentQuinta.nombre}</p>
                                <p>Correo:${studentQuinta.correo}</p>
                                <p>Turno:${studentQuinta.turno}</p>
                                <p>Duracion Programa: ${studentQuinta.progreso.duracionPrograma}</p>
                                <p>Porcentaje Completado: ${studentQuinta.progreso.porcentajeCompletado}</p>
                             </div>
                         </div>`
            
        }
        container4.innerHTML = result5
    }
})
    document.getElementById("lima-tercera").addEventListener("click", (event) => {
        console.log(data.lima.generacion.tercera.estudiantes)
        const estudiantesTercera = data.lima.generacion.tercera.estudiantes;
        for (const key in estudiantesTercera) {
            if (estudiantesTercera.hasOwnProperty(key)){
                const studentTercera = estudiantesTercera[key];
                console.log(studentTercera.nombre)
                console.log(studentTercera.progreso.duracionPrograma)
                result6 += `<div class="cardAlumanas3">
                                <div class="info3">
                                    <p>Nombre:${studentTercera.nombre}</p>
                                    <p>Correo:${studentTercera.correo}</p>
                                    <p>Turno:${studentTercera.turno}</p>
                                    <p>Duracion Programa: ${studentTercera.progreso.duracionPrograma}</p>
                                    <p>Porcentaje Completado: ${studentTercera.progreso.porcentajeCompletado}</p>
                                 </div>
                            </div>`
            }
            container5.innerHTML = result6
        }
    })
}

    renderInfo3 = (data) => {
        document.getElementById("mexico-cuarta").addEventListener("click", (event) => {
            let result7 = '';
            console.log(data.mexico.generacion.cuarta.estudiantes)
            const estudiantes = data.mexico.generacion.cuarta.estudiantes;
            for (const key in estudiantes) {
                if (estudiantes.hasOwnProperty(key)) {
                    const element = estudiantes[key];
                    console.log(element.nombre)
                    console.log(element.progreso.duracionPrograma)
                    result7 += `<div class="cardAlumnas">
                                    <div class="info3">
                                        <p>Nombre:${element.nombre}</p>
                                        <p>Correo:${element.correo}</p>
                                        <p>Turno:${element.turno}</p>
                                        <p>Duracion Programa: ${element.progreso.duracionPrograma}</p>
                                        <p>Porcentaje Completado: ${element.progreso.porcentajeCompletado}</p>
                                     </div>
                                 </div>`
                    
                }
                container6.innerHTML = result7
            }
        })
        
       
       document.getElementById("mexico-quinta").addEventListener("click", (event) => {
        console.log(data.mexico.generacion.quinta.estudiantes)
        //console.log(data.lima.generacion.quinta.estudiantes.nombre)
        const estudiantesQuinta = data.mexico.generacion.quinta.estudiantes;
        for (const students in estudiantesQuinta) {
            if (estudiantesQuinta.hasOwnProperty(students)) {
                const studentQuinta = estudiantesQuinta[students];
                console.log(studentQuinta.nombre)
                console.log(studentQuinta.progreso.duracionPrograma)
                result8 += `<div class="cardAlumanas2">
                                <div class="info3">
                                    <p>Nombre:${studentQuinta.nombre}</p>
                                    <p>Correo:${studentQuinta.correo}</p>
                                    <p>Turno:${studentQuinta.turno}</p>
                                    <p>Duracion Programa: ${studentQuinta.progreso.duracionPrograma}</p>
                                    <p>Porcentaje Completado: ${studentQuinta.progreso.porcentajeCompletado}</p>
                                 </div>
                             </div>`
                
            }
            container7.innerHTML = result8;
        }
        return result8;
    })
        document.getElementById("mexico-tercera").addEventListener("click", (event) => {
            console.log(data.mexico.generacion.tercera.estudiantes)
            const estudiantesTercera = data.mexico.generacion.tercera.estudiantes;
            for (const key in estudiantesTercera) {
                if (estudiantesTercera.hasOwnProperty(key)){
                    const studentTercera = estudiantesTercera[key];
                    console.log(studentTercera.nombre)
                    console.log(studentTercera.progreso.duracionPrograma)
                    result9 += `<div class="cardAlumanas3">
                                    <div class="info3">
                                        <p>Nombre:${studentTercera.nombre}</p>
                                        <p>Correo:${studentTercera.correo}</p>
                                        <p>Turno:${studentTercera.turno}</p>
                                        <p>Duracion Programa: ${studentTercera.progreso.duracionPrograma}</p>
                                        <p>Porcentaje Completado: ${studentTercera.progreso.porcentajeCompletado}</p>
                                     </div>
                                </div>`
                }
                container8.innerHTML = result9;
            }
            return result9;
        })
        document.getElementById("santiago-cuarta").addEventListener("click", (event) => {
            console.log(data.santiago.generacion.cuarta.estudiantes)
            const estudiantesCuarta = data.santiago.generacion.cuarta.estudiantes;
            for (const key in estudiantesCuarta) {
                if (estudiantesCuarta.hasOwnProperty(key)) {
                    const santiagoCuarta = estudiantesCuarta[key];
                    console.log(santiagoCuarta.nombre)
                    console.log(santiagoCuarta.progreso.duracionPrograma)
                    result10 += `<div class="cardAlumnas">
                                    <div class="info3">
                                        <p>Nombre:${santiagoCuarta.nombre}</p>
                                        <p>Correo:${santiagoCuarta.correo}</p>
                                        <p>Turno:${santiagoCuarta.turno}</p>
                                        <p>Duracion Programa: ${santiagoCuarta.progreso.duracionPrograma}</p>
                                        <p>Porcentaje Completado: ${santiagoCuarta.progreso.porcentajeCompletado}</p>
                                    </div>
                                </div>`
                }
                container9.innerHTML = result10
            }
            return result10;
        })
        document.getElementById("santiago-quinta").addEventListener("click", (event) => {
            console.log(data.santiago.generacion.quinta.estudiantes)
            const estudiantesQuinta = data.santiago.generacion.quinta.estudiantes;
            for (const key in estudiantesQuinta) {
                if (estudiantesQuinta.hasOwnProperty(key)) {
                    const santiagoQuinta = estudiantesQuinta[key];
                    console.log(santiagoQuinta.nombre)
                    console.log(santiagoQuinta.progreso.duracionPrograma)
                    result11 += `<div class="cardAlumanas2">
                                    <div class="info3">
                                        <p>Nombre:${santiagoQuinta.nombre}</p>
                                        <p>Correo:${santiagoQuinta.correo}</p>
                                        <p>Turno:${santiagoQuinta.turno}</p>
                                        <p>Duracion Programa: ${santiagoQuinta.progreso.duracionPrograma}</p>
                                        <p>Porcentaje Completado: ${santiagoQuinta.progreso.porcentajeCompletado}</p>
                                    </div>
                                </div>`     
                }
                container10.innerHTML = result11;
            }
            return result11;
        })
        document.getElementById("santiago-tercera").addEventListener("click", (event) => {
            console.log(data.santiago.generacion.tercera.estudiantes)
            const estudiantesTercera = data.santiago.generacion.tercera.estudiantes;
            for (const key in estudiantesTercera) {
                if (estudiantesTercera.hasOwnProperty(key)) {
                    const santiagoTercera = estudiantesTercera[key];
                    console.log(santiagoTercera.nombre)
                    console.log(santiagoTercera.progreso.duracionPrograma)
                    result12 += `<div class="cardAlumanas3">
                                    <div class="info3">
                                        <p>Nombre:${santiagoTercera.nombre}</p>
                                        <p>Correo:${santiagoTercera.correo}</p>
                                        <p>Turno:${santiagoTercera.turno}</p>
                                        <p>Duracion Programa: ${santiagoTercera.progreso.duracionPrograma}</p>
                                        <p>Porcentaje Completado: ${santiagoTercera.progreso.porcentajeCompletado}</p>
                                    </div>
                                </div>`
                }
                container11.innerHTML = result12;
            }
        })
}
