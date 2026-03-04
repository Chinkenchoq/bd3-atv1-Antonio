const database = 'BD3-NoSQL-AtlasMongoDB';

const colection = 'BD3-nosql-atv1';

use(database);

db.createCollection(colection);


db['bd3-nosql-atv1'].insertMany([
    
  {
    cod_aluno: 1,
    cod_turma: 201,
    nome: "Lucas Ferreira",
    cpf: "32145678901",
    rg: "987654321",
    telefone_aluno: "11997770001",
    telefone_responsavel: "11986660001",
    email: "lucas.ferreira@email.com",
    data_nascimento: new Date("2005-05-12")
  },
  {
    cod_aluno: 2,
    cod_turma: 201,
    nome: "Mariana Oliveira",
    cpf: "32145678902",
    rg: "987654322",
    telefone_aluno: "11997770002",
    telefone_responsavel: "11986660002",
    email: "mariana.oliveira@email.com",
    data_nascimento: new Date("2004-03-22")
  },
  {
    cod_aluno: 3,
    cod_turma: 202,
    nome: "Rafael Gomes",
    cpf: "32145678903",
    rg: "987654323",
    telefone_aluno: "11997770003",
    telefone_responsavel: "11986660003",
    email: "rafael.gomes@email.com",
    data_nascimento: new Date("2005-09-18")
  },
  {
    cod_aluno: 4,
    cod_turma: 202,
    nome: "Beatriz Carvalho",
    cpf: "32145678904",
    rg: "987654324",
    telefone_aluno: "11997770004",
    telefone_responsavel: "11986660004",
    email: "beatriz.carvalho@email.com",
    data_nascimento: new Date("2004-12-02")
  },
  {
    cod_aluno: 5,
    cod_turma: 203,
    nome: "Thiago Almeida",
    cpf: "32145678905",
    rg: "987654325",
    telefone_aluno: "11997770005",
    telefone_responsavel: "11986660005",
    email: "thiago.almeida@email.com",
    data_nascimento: new Date("2005-07-09")
  },
  {
    cod_aluno: 6,
    cod_turma: 203,
    nome: "Larissa Ribeiro",
    cpf: "32145678906",
    rg: "987654326",
    telefone_aluno: "11997770006",
    telefone_responsavel: "11986660006",
    email: "larissa.ribeiro@email.com",
    data_nascimento: new Date("2004-10-27")
  },
  {
    cod_aluno: 7,
    cod_turma: 204,
    nome: "Pedro Henrique Silva",
    cpf: "32145678907",
    rg: "987654327",
    telefone_aluno: "11997770007",
    telefone_responsavel: "11986660007",
    email: "pedro.silva@email.com",
    data_nascimento: new Date("2005-01-30")
  },
  {
    cod_aluno: 8,
    cod_turma: 204,
    nome: "Juliana Martins",
    cpf: "32145678908",
    rg: "987654328",
    telefone_aluno: "11997770008",
    telefone_responsavel: "11986660008",
    email: "juliana.martins@email.com",
    data_nascimento: new Date("2004-06-14")
  },
  {
    cod_aluno: 9,
    cod_turma: 205,
    nome: "Gabriel Santos",
    cpf: "32145678909",
    rg: "987654329",
    telefone_aluno: "11997770009",
    telefone_responsavel: "11986660009",
    email: "gabriel.santos@email.com",
    data_nascimento: new Date("2005-11-03")
  },
  {
    cod_aluno: 10,
    cod_turma: 205,
    nome: "Camila Rodrigues",
    cpf: "32145678910",
    rg: "987654330",
    telefone_aluno: "11997770010",
    telefone_responsavel: "11986660010",
    email: "camila.rodrigues@email.com",
    data_nascimento: new Date("2004-08-19")
  }
]);