// dio banck
// name, accountnumber

import { Account } from "./class/DioAccount"
import { PeopleAccount } from "./class/PeopleAccount"
import { CompanyAccount } from "./class/CompanyAccount"

//depositar, sacar 


//const newAccount: Account = new Account('WAGNER', 333)



// a classe admin é uma classe filha que herda de account

class Admin extends Account{

    constructor (name: string, accountNumber: number){
        super(name, accountNumber)

    }
}

//classes abstratas servem de modelos para outras classes e não podem ser utilizadas para instanciar objetos





const peopleAccount: PeopleAccount = new PeopleAccount(1, 'WAGNER GOMES', 3333)
console.log(peopleAccount)
peopleAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('dio', 20)
console.log(companyAccount)
companyAccount.deposit()
