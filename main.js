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
function Student(name, age, cursosAprobados){
    this.name = name,
    this.age = age,
    this.cursoAprobado = cursosAprobados
    // this.aprobarCurso = function(cursoAprobado){
    //     this.cursosAprobados.push(cursoAprobado)
    // }
}

Student.prototype.aprobarCurso = function(cursoAprobado){
        this.cursosAprobados.push(cursoAprobado);
}

const juanita = new Student('Juanita', 21, ['Curso de CSS', 'Curso de introduccion a los video juegos']);

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