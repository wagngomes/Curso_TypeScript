import { Account } from "./DioAccount"

export class CompanyAccount extends Account {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (): void => {

        console.log('você pegou um imprestimo')

    }

    deposit = (): void => {

        console.log('A empresa depositou')
    }

}