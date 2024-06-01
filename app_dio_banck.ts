// dio banck
// name, accountnumber

//depositar, sacar 

class Account {
    name: string
    accountNumber: number

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log('vc depositou')
    }

    withDraw = () => {
        console.log('vc sacou')
    }
}

const newAccount: Account = new Account('WAGNER', 333)

console.log(newAccount.name)
console.log(newAccount.accountNumber)