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
