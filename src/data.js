const laboratoria = "https://api.myjson.com/bins/17ewfi";

fetch(laboratoria)
.then(response => response.json())
.then(data => {
    // console.log(data)
    //console.log(data.lima.generacion)
    // console.log(data.lima.generacion.cuarta)
    //coumputeGenerationStats(data);
    renderInfo(data);
    renderInfo2(data);
    renderInfo3(data);
})

/*window.data = {
    coumputeStudentsStats: (data) => {
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
},

window.computeGenerationStats = (laboratoria) => {
        const newArray = [],
        const generation = {
            campus: '',
            generation: '',
            average: 0,
            count: 0,
        }
    },

window.sortStudents = (laboratoria) => {
    const sort = [];
    sortStudent = {
        students: '',
        orderBy: '',
        orderDirection: '',
    };
},

window.filterStudents: (laboratoria) => {
    const filterSt = [];
    filterStudent = {
        students: '',
        search: '',
    }
};
