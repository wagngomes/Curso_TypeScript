//declaração de classes 

//toda classe tem um método construtor e se chama 'constructor'

class User {

    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}

const user: User = new User('wag', 43)

console.log(user.name)

// ********************ABSTRAÇÃO ***************


