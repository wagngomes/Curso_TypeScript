

const num: number = 14

if(num > 15 ){
    console.log('numero maior do que 15')
}else {
    console.log('numero menor ou igual a 15')
}

//podemos fazer esse tipo de validação com objetos literais

const typeUser = {
    admin: 'seja bem vindo admin',
    student: 'você é um estudante',
    viewer: 'você pode visualizar'
}

function validaUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])

}

const usuario = 'admin'

validaUser(usuario)

for (let i = 0; i < 10; i++){
    console.log(i)


}

let nux: number = 2

while(nux < 6){
    console.log(n)
    n++
}