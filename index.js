const funcionarios = []

class Funcionario {
    constructor(id, nome, cargo, taxaHoraria) {
        this.id = id;
        this.nome = nome;
        this.cargo = cargo;
        this.taxaHoraria = taxaHoraria;
        this.horasTrabalhadas = [];
    }
}

function adicionarFuncionario(id, nome, cargo, taxaHoraria) {
    const funcionario = new Funcionario(id, nome, cargo, taxaHoraria)

    funcionarios.push(funcionario);
    console.log(`Funcionário ${nome} cadastrado com sucesso!`)
}

adicionarFuncionario (1, 'João Silva', 'Desenvolvedor', 50)

console.log(funcionarios)