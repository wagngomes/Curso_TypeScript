//Array lista de elementos 


const array:Array<number> = [1, 2, 3, 4]

const stringArray: string[] = ['wag', 'dri', 'davi']

console.log(array[0])

//função para sabermos a quantidade de elementos dentro de um array

console.log(stringArray.length)

//adicionar elementos dentro do array

console.log('array original', array)
array.push(8)
console.log('array modificado', array)
console.log(array.pop())
console.log(array)

//Buscando elementos dentro do array

const buscaNum = array.find(num => num > 2)
console.log(buscaNum)

array.forEach(num => console.log(num))

array.map(num => console.log(num))