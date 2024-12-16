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

function registrarHoras (id, qtdHorasTrabalhadas) {
    const funcionario = funcionarios.find(item => item.id === id)
    if (funcionario) {
        funcionario.horasTrabalhadas.push(qtdHorasTrabalhadas)
        console.log(`Foram registradas ${qtdHorasTrabalhadas} horas para o funcionário ${funcionario.nome}.`)
      } else {
        console.log(`ID ${id} não encontrado.`)
      }
        }

function calcularSalarioMensal (id) {
    const funcionario = funcionarios.find(item => item.id === id)
    if (funcionario) {
        const totalHoras = funcionario.horasTrabalhadas.reduce((accumulator, value) => accumulator + value,0)
        const salarioMensal = totalHoras * funcionario.taxaHoraria
        console.log(`Salario do funcionário ${funcionario.nome} é R$ ${salarioMensal.toFixed(2)}.`)
        return salarioMensal
    } else {
        console.log(`ID ${id} não encontrado.`)
      }
}

function calcularInss (id) {
    const funcionario = funcionarios.find(item => item.id === id)
    if (funcionario) {
        const salarioBruto = calcularSalarioMensal(id)
        if (salarioBruto <= 1412.00) {
            salarioliqudo = 0.075 * salarioBruto
            console.log(`O inss do funcionário ${funcionario.nome} é R$ ${inss.toFixed(2)}.`)
            return inss
        }else if (salarioBruto <= 2666.68) {
            inss = 0.09 * salarioBruto
            console.log(`O inss do funcionário ${funcionario.nome} é R$ ${inss.toFixed(2)}.`)
            return inss
        }else if (salarioBruto <= 4000.03) {
            inss = 0.12 * salarioBruto
            console.log(`O inss do funcionário ${funcionario.nome} é R$ ${inss.toFixed(2)}.`)
            return inss
        }else if (salarioBruto <= 7786.02) {
            inss = 0.14 * salarioBruto
            console.log(`O inss do funcionário ${funcionario.nome} é R$ ${inss.toFixed(2)}.`)
            return inss
        }else if (salarioBruto > 7786.02) {
            inss = 908.85
            console.log(`O inss do funcionário ${funcionario.nome} é R$ ${inss.toFixed(2)}.`)
            return inss
    } else {
        console.log(`ID ${id} não encontrado.`)
      }
}
}

function salarioLiqudo (id) {
    const funcionario = funcionarios.find(item => item.id === id)
    if (funcionario) {
        const salarioLiquido = calcularSalarioMensal(id) - calcularInss(id)
        console.log(`Salario líquido do funcionário ${funcionario.nome} é R$ ${salarioLiquido.toFixed(2)}.`)
        return salarioLiquido
    } else {
        console.log(`ID ${id} não encontrado.`)
      }
}

adicionarFuncionario (1, 'Rafael Amaral', 'Desenvolvedor', 50)
adicionarFuncionario(2, 'José Patella', 'Engenheiro', 42)
registrarHoras(1, 8)
registrarHoras(2, 60)
registrarHoras(1, 200)
salarioLiqudo(1)
salarioLiqudo(2)



console.log(funcionarios)