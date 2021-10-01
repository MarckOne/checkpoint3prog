const aluno = require('./exec3');


let aluno1 = new aluno.Aluno('Isabella',5,[8,9,8,7]);
let aluno2 = new aluno.Aluno('Joao',4,[8,9,9,7]);
let aluno3 = new aluno.Aluno('Matheus',3,[9,8,6,7]);

aluno1.calcularMedia()
aluno1.faltas()

let listaEstudantes = [aluno1,aluno2,aluno3]

module.exports = {
    listaEstudantes
}

