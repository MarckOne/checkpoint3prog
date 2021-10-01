let lista = require('./exec');
let aluno = require('./exec3');

let alunoX = new aluno.Aluno('Marcos', 3, [1, 4, 7, 6]);

let alunoY = new aluno.Aluno('Lucas', 2, [7, 3, 4, 9]);

let curso = {
    nomeDoCurso: "",
    notaAprovacao: 7,
    maximoFaltas: 6,
    listaEstudantes: lista.listaEstudantes,

    adicionarAluno: function (aluno) {
        this.listaEstudantes.push(aluno)
    },
   
    validacao: function (_aluno) {
    
        for (let i = 0; i < this.listaEstudantes.length; i++) {
            if (_aluno == curso.listaEstudantes[i].nome) {
                if(curso.listaEstudantes[i].calcularMedia() >= this.notaAprovacao && curso.listaEstudantes[i].qtdFaltas < this.maximoFaltas){
                    console.log(`${curso.listaEstudantes[i].nome}, Aprovado`);
                    return true;
                }else if(curso.listaEstudantes[i].calcularMedia() > 1.1* this.notaAprovacao && curso.listaEstudantes[i].qtdFaltas == this.maximoFaltas){
                    console.log(`${curso.listaEstudantes[i].nome}, Aprovado`);
                    return true;
                }else{
                    console.log(`${curso.listaEstudantes[i].nome}, Reprovado`);
                    return false;
                }
            }
        }
    },
    situacaoEstudantes: function () {
        let lista = []
        for (let i = 0; i < this.listaEstudantes.length; i++) {
            lista.push(this.validacao(this.listaEstudantes[i].nome));
        }
        return lista;
      
    }
}
console.log(curso.listaEstudantes[0])

curso.adicionarAluno(alunoX)
curso.adicionarAluno(alunoY)

curso.validacao('Marcos')


console.log(curso.situacaoEstudantes())