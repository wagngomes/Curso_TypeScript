
export abstract class Account {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string):void => {
        this.name = name
        console.log('nome alterado com sucesso')
    }

    getName = (): string => {
        return this.name
    }

    deposit = (): void => {
        if (this.validadeStatus()){
            console.log('vc depositou')            
        }
        
    }

    withDraw = (): void => {
        console.log('vc sacou')
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private validadeStatus = ():boolean => {
        if(this.status = true){
            return this.status
        }
        throw new Error()
    }
}