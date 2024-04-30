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
