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

