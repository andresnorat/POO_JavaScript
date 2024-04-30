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
