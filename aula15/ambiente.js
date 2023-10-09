let num = [5, 3, 7, 4, 8, 6]
num.push(9)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(11)
if (pos == -1) {
    console.log('valor não foi encontrado')
} else {
    console.log(`O valor 8 esta na posição ${pos}`)
}
