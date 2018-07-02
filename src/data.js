
        /*window.data = {
        API :() =>{
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
                    const generacion = '';
                    for(j=0; j< generacion.length; j++){
                        console.log(generacion[j])
                }
                //let generacion = '';
                /*sedes = sedes[i];
                const generacion = Object.getOwnPropertyNames(computeGenerationStats);
                for(j=0; j< generacion.length; j++){
                    console.log(generacion[j])
            }
        })
    }
};*/

window.computeStudentsStats = (laboratoria) => {

}

window.computeGenerationsStats = (laboratoria) => {
    const generationsArray = [];
    const obj = {
        campus: '',
        generation: '',
        average: 0,
        count: 0,
    };
    let average = 0;
    for (key in laboratoria) {
        obj.campus = key;
        average = 0;
        const generations = Object.keys(laboratoria[key].generacion);
        generations.forEach((generation) => {
            obj.generation = generation;
            const students = laboratoria[key].generacion[generation].estudiantes;
            for (student in students) {
                average += students[student].progreso.porcentajeCompletado;
                average = average / students.length;
                obj.average = average;
                obj.count = students.length;
                generationsArray.push(obj);

            }
        })

    }
    return generationsArray;
}