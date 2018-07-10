
const laboratoria = "https://api.myjson.com/bins/17ewfi";

fetch(laboratoria)
.then(response => response.json())
.then(data => {
    console.log(data)
    //console.log(data.lima.generacion)
    //console.log(data.lima.generacion.cuarta)
    //coumputeGenerationStats(data);
    renderInfo(data);
    renderInfo2(data);
    //renderInfo3(data);
})

window.data = {
    coumputeStudentsStats: (laboratoria) => {
        const studentsArray = [];
        const student = {
            name: '',
            email: '',
            campus: '',
            generation: '',
            stats: {
                stats: '',
                completedPercentage: 0,
                topics: {
                    completedPercentage: 0,
                    percentajeDuration: 0,
                    subtopics: {
                        completedPercentage: 0,
                        type: '',
                        duration: 0,
                    }
                }
            }
        }
    }
};
   /* computeGenerationStats: (laboratoria) => {
        const newArray = [],
        const generacion = {
            campus: '',
            generation: '',
            average: 0,
            count: 0,
        }
    },

    sortStudents: (laboratoria) => {
    const sort = [];
    sortStudent = {
        students: '',
        orderBy: '',
        orderDirection: '',
    };
},

    filterStudents: (laboratoria) => {
    const filterSt = [];
    filterStudent = {
        students: '',
        search: '',
    }
};
        /*if (data.hasOwnProperty(key)) {
            const element = data[key];
            console.log(key, element)
            console.log(data.generacion)
        }
    }

}

window.computeGenerationStats = (laboratoria) => {
    fetch(HTMLLabelElement)
    .then(response => response.json())
    .then(data => {

    })
}*/





/*window.computeGenerationStats = (laboratoria) => {
    const generationArray = [];
            for(const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = data[key];
                    console.log(key, element) //crear variables (sedes, generacion, estudiantes...)
                    console.log(element.generacion.cuarta.estudiantes)
                }

            }

    })
}
}*/

/*window.computeStudentsStats = (laboratoria) => {

computeStudentsState(poner elementos)
}

window.computeGenerationsStats = (laboratoria) => {
    const laboratoria = "https://api.myjson.com/bins/17ewfi";
    fetch(laboratoria)
    .then(res => res.json())
    .then(data => {
        const sedes = '';
        sedes = Object.getOwnPropertyNames(data);

    })

}*/

window.sortStudents = (laboratoria) => {
    const sort = [];
    sortStudent = {
        students: '',
        orderBy: '',
        orderDirection: '',
    };
}

window.filterStudents = (laboratoria) => {
    const filterSt = [];
    filterStudent = {
        students: '',
        search: '',
    };
}