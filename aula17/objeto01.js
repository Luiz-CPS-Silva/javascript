let amigo = {
nome: 'baltasar',
sexo: 'M',
peso: 85.4,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
} 
}
amigo.engordar(13)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)