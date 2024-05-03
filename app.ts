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