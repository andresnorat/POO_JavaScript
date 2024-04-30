/**
 * Clase para crear las clases que tienen los cursos
 */
class ClassCourse {
    constructor({
        name,
        classTime,
    }){
        this.name = name;
        this.classTime = classTime;
    }
}

const class1POO = new ClassCourse({
    name: 'Clase de programacion orientada a objectos',
    classTime: 5
});

/**
 * Clase para crear un Curso
 */
class Course {
    constructor({
        name,
        clases = []
    }){
        this._name = name;
        this.clases = clases;
    }

    get name(){
        return this._name; 
    }

    set name(newName){
        if(newName === "Curso Malo"){
            console.error('Web ... no')
        }
        this._name = newName;
    }
}

const cursoProgBasica = new Course({
    name: 'Curso Gratis de Programacion Basica',
    clases: [
        class1POO,
        {name:'Abstracción en JavaScript',classTime: 9.15}
    ]
});

/**
 * Clase para crear una ruta de aprendizaje
 */
class LearningPaths {
    constructor(
        {
            name,
            courses = [],
        }
    ){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaDesarrolloWeb = new LearningPaths({
    name: 'Escuela de Desarrollo Web',
    courses: [
        cursoProgBasica,
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
        this._name = name,
        this._email = email,
        this._username = username,
        this.points = points,
        this._socialMedia = {
            witter: twitter,
            instagram: instagram,
            facebook: facebook,
        }
        this.approvedCourses = approvedCourses,
        this.learningPaths = learningPaths
    }
    get name(){
        return this._name;
    }

    get email(){
        return this._email;
    }

    get username(){
        return this._username;
    }

    get instagram(){
        return this._socialMedia.instagram
    }

    set instagram(newInstagram){
        this._socialMedia.instagram = newInstagram
    }
}

const andres = new Student({
    name: "Andres Gomez",
    username: "andres@1",
    email: "carnorat@gmail.com",
    points: 15000,
    twitter: "@AndresGomexz",
});

const camilito = new Student({
    name: "Camilotto",
    username: "camilouu@1",
    email: "camil@gmail.com",
    points: 15000,
    instagram: "@CamiloGomexz",
    learningPaths: [
        escuelaDesarrolloWeb
    ],
});

