//Objecto literal en JavaScript
const andres = {
    name: 'Andres',
    age: 18,
    cursosAprobados: [
        'Curso de Github profesional',
        'Curso de CSS Grid'
    ],

    aprobarCurso:  function(cursoAprobado){
        this.cursosAprobados.push(cursoAprobado);
    }
}

//Prototipos en JavaScript
function StudentProto(name, age, cursosAprobados){
    this.name = name,
    this.age = age,
    this.cursoAprobado = cursosAprobados
    // this.aprobarCurso = function(cursoAprobado){
    //     this.cursosAprobados.push(cursoAprobado)
    // }
}

StudentProto.prototype.aprobarCurso = function(cursoAprobado){
        this.cursosAprobados.push(cursoAprobado);
}

const juanita = new StudentProto('Juanita', 21, ['Curso de CSS', 'Curso de introduccion a los video juegos']);

//Prototipos con la sintaxis de clases
class Student2 {
    constructor({
        name,
        age,
        email,
        cursosAprobados = []
    }){
        this.name = name,
        this.age = age,
        this.email = email;
        this.cursosAprobados = cursosAprobados
    }


    aprobarCurso(cursoAprobado){
        this.cursosAprobados.push(cursoAprobado);
    }
}

const miguel =  new Student2({
    name: "Miguel",
    age: 25,
    email: "miguel@gmail.com",
}
);

const andres1 = {
    name: "Andres Gomez",
    username: "andreg",
    points: 100,
    socialMedia: {
        twitter: "andresnorat",
        instagram: "andresnorat",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS",
                "Curso de Responsive Desing"
            ]
        },
        {
            name: "Escuela de Video Juegos",
            courses: [
                "Curso de introduccion a la Produccion de Video Juegos",
                "Curso de Desarrollo de Juegos con Unity",
            ] 
        },
    ],
};


const camilo1 = {
    name: "camilito",
    username: "camilitofeliz",
    points: 1000,
    socialMedia: {
        twitter: "camilitofeliz",
        instagram: "camilitofeliz_01",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso Data Business",
        "Curso DataViz",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS",
                "Curso de Responsive Desing"
            ]
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso Data Business",
                "Curso DataViz",
                "Curso Tableau"
            ] 
        },
    ],
};

class LearningPaths {
    constructor(
        {
            name,
            courses,
        }
    ){
        this.name = name;
        this.courses = courses;
    }
}


const escuelaDesarrolloWeb = new LearningPaths({
    name: 'Escuela de Desarrollo Web',
    courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
        "Curso de Responsive Desing"
    ]
});

const escuelaDataScience = new LearningPaths({
    name: 'Escuela de Data Science',
    courses: [
        "Curso Data Business",
        "Curso DataViz",
        "Curso Tableau"
    ]
});


class Student {
    constructor({
        name,
        email,
        username,
        points,
        twitter = undefined, 
        instagram =  undefined,
        facebook =  undefined,
        approvedCourses = [],
        learningPaths = []
    }){
        this.name = name,
        this.email = email,
        this.username = username,
        this.points = points,
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses,
        this.learningPaths = learningPaths
    }
}

const andres2 = new Student({
    name: "Andres Gomez",
    username: "andres@1",
    email: "carnorat@gmail.com",
    points: 15000,
    twitter: "@AndresGomexz",
});

const camilito2 = new Student({
    name: "Camilotto",
    username: "camilouu@1",
    email: "camil@gmail.com",
    points: 15000,
    instagram: "@CamiloGomexz",
    learningPaths: [
        escuelaDesarrolloWeb,
        escuelaDesarrolloWeb
    ],
});

