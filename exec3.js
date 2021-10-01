function Aluno(_nome, _qtdFaltas, _notas) {
    this.nome = _nome;
    this.qtdFaltas = _qtdFaltas;
    this.notas = _notas;
    console.log(`Nome: ${this.nome}, Tem ${this.qtdFaltas} faltas, com notas: ${this.notas}`);
    this.calcularMedia = function () {
        let contadorMedia = 0;
        let somaMedia = 0;

        for (let i = 0; i < this.notas.length; i++) {
            if (this.notas) {
                contadorMedia++;
                somaMedia += this.notas[i];
            }
        }
        let media = somaMedia / contadorMedia;
        console.log(`Média é: ${media}`);
        return media
    }
    this.faltas = function () {
        this.qtdFaltas++;
        console.log(`Faltas aumentadas em ${this.qtdFaltas}`);
    }
}

module.exports = {
    Aluno: Aluno
}