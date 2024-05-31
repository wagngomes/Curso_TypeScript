const soma = (a: number, b: number) => {
    console.log(a + b)

}


//para rodar o arquivo, é preciso primeiro transpilar o typescritp para javascript com o comando npx tsc app.ts
//Podemos criar um script para rodar direto o typescript  - "dev": "ts-node-dev app.ts",

//**************declaração de variáveis *************/

var a = 'a' //escopo global, conseguimos alterar em qualquer lugar do código, inseguranças para aplicação
let b = 'b' // podemos alterar o valor da variável ao longo do código
const c = 'c' // constante ...imutável

// com tipos 

let e: string = 'e'
let n: number = 2
let x: boolean = true

let m: string | number = 'não recomendável'
let z: any = 'qualquer tipo'

//para declarar os tipos para um objeto usamos as interfaces 

interface Pessoa {
    nome: string,
    idade: number,
    //se quisermos colocar um parâmetro que não é obrigatório , usamos o ponto '?' da seguinte forma:
    profissao?: string
}

const pessoa: Pessoa = {
    nome: 'wagner',
    idade: 42
}

const outraPessoa: Pessoa = {
    nome: 'Dri',
    idade: 38,
    profissao: 'pedagoga'
}

//Declaração no uso de arrays 

const arrayPessoas: Pessoa[] = [ pessoa, outraPessoa]

const arrayPessoas2: Array<Pessoa> = [ pessoa, outraPessoa]

const number: number[] = [
    1, 2, 3
]

const strings: Array<string>= [
    'wagner', 'dri', 'davi'
]

